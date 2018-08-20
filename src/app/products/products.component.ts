import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from "../shared/models/product";
import 'rxjs/add/operator/switchMap';
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {ShoppingCart} from "../shared/models/shopping-cart";
import {ConfigService} from "shared/services/config.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    category: string;
    cart$: Observable<ShoppingCart>;

    constructor(private route: ActivatedRoute, //injecting activatedRoute service so we read route parameters
                private productService: ProductService,
                private shoppingCartService: ShoppingCartService,
                private config: ConfigService) {
    }

    async ngOnInit() {
        this.cart$ = await this.shoppingCartService.getCart(); // initializing the cart
        this.populateProducts();
        this.getProducts()
    }

    getProducts() {
        this.config.getAllProducts().subscribe(data => {
            console.log("produc data",data)
        }, error => {
            console.log("product error",error)
        })
    }

    private populateProducts() {

        this.productService //goto product service
            .getAll() // get all products
            .switchMap(products => {
                this.products = products; // store them here
                return this.route.queryParamMap
            })
            .subscribe(params => {
                this.category = params.get('category'); //reading category from the route parameter and storing it in this.category
                this.applyFilter();
            });
    }

    private applyFilter() {
        this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
    }
}

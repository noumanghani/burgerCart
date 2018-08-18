import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from "../models/product";
import 'rxjs/add/operator/switchMap';
import {ShoppingCartService} from "../shopping-cart.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {ShoppingCart} from "../models/shopping-cart";

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

    constructor(
                private route: ActivatedRoute, //injecting activatedRoute service so we read route parameters
                private productService: ProductService,
                private shoppingCartService: ShoppingCartService) {
    }

    async ngOnInit() {
        this.cart$ = await this.shoppingCartService.getCart(); // initializing the cart
        this.populateProducts();
    }

    private populateProducts(){

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

    private applyFilter(){
        this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
    }
}

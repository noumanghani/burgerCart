import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductCardComponent} from "shared/components/product-card/product-card.component";
import {ProductQuantityComponent} from "shared/components/product-quantity/product-quantity.component";
import {AuthGuard} from "shared/services/auth-guard.service";
import {AuthService} from "shared/services/auth.service";
import {UserService} from "shared/services/user.service";
import {CategoryService} from "shared/services/category.service";
import {ShoppingCartService} from "shared/services/shopping-cart.service";
import {OrderService} from "shared/services/order.service";
import {ConfigService} from "shared/services/config.service";
import {ProductService} from "shared/services/product.service";
import {FormsModule} from "@angular/forms";
import {CustomFormsModule} from "ng2-validation/dist";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {DataTableModule} from "angular-4-data-table/src";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),

  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    ConfigService
  ]
})
export class SharedModule { }
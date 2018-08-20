import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AngularFireModule} from "angularfire2";
import {RouterModule} from "@angular/router";

import {environment} from "./../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./shopping/components/products/products.component";
import {LoginComponent} from "./core/components/login/login.component";
import {HttpModule} from "@angular/http";
import {SharedModule} from "shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {ShoppingModule} from "./shopping/shopping.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AdminModule,
        ShoppingModule,
        CoreModule,

        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpModule,
        RouterModule.forRoot([
            {path: '', component: ProductsComponent},
            {path: 'login', component: LoginComponent},
        ])
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from "@angular/core";
import {TopNavbarComponent} from "./components/top-navbar/top-navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "shared/shared.module";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    TopNavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
  ],
  exports: [
    TopNavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }

import {AppUser} from './../models/app-user';
import {AuthService} from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {Observable} from "rxjs/Observable";
import {ShoppingCart} from "../models/shopping-cart";

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
      private auth: AuthService,
      private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // count the total no. of items in shop cart
   this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

}

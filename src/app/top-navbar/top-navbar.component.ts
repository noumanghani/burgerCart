import {AppUser} from './../models/app-user';
import {AuthService} from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit{
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

   let cart$ = await this.shoppingCartService.getCart();
   cart$.subscribe(cart => {
     this.shoppingCartItemCount = 0;
     for (let productId in cart.items)
      this.shoppingCartItemCount += cart.items[productId].quantity

   })
  }

  logout() {
    this.auth.logout();
  }

}

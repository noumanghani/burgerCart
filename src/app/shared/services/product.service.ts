import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase,private http: Http) { }

  create(product) { 
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }
  
  get(productId) { 
    return this.db.object('/products/' + productId);
  }

  update(productId, product) { 
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) { 
    return this.db.object('/products/' + productId).remove();
  }
}

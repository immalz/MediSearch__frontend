import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numberCart = 0;

  products: any[] = [];
  cartTotal = 0;

  private productAddedSource = new Subject<any>();


  productAdded$ = this.productAddedSource.asObservable();

  constructor() { }
  addProductToCart(product): any {
    let exists = false;

    const parsedPrice = product.price;

    console.log(product);

    this.cartTotal += parsedPrice;

    // Search this product on the cart and increment the quantity
    this.products = this.products.map(result => {
      if (result.product._id === product._id) {
        result.quantity++;
        exists = true;
      }
      return result;
    });
    // // Add a new product to the cart if it's a new product
    // if (!exists) {
    //   product.parsedPrice = parsedPrice;
    //   this.products.push({
    //     product,
    //     quantity: 1
    //   });
    // }

    // this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

  deleteProductFromCart(product): any {
    this.products = this.products.filter(result => {
      if (result.product.id === product.id) {
        this.cartTotal -= result.product.parsedPrice * result.quantity;
        return false;
      }
      return true;
     });
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }


  flushCart(): any {
    this.products = [];
    this.cartTotal = 0;
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }
}

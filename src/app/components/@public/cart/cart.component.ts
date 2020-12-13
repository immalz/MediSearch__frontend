import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

const OFFSET_HEIGHT = 170;
const PRODUCT_HEIGHT = 48;

@Component({
  selector: 'app-search',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  numProducts = 0;
  animatePlop = false;
  animatePopout = false;
  expanded = false;
  expandedHeight: string;
  cartTotal = 0;
  inherit: string;

  changeDetectorRef: ChangeDetectorRef;

  constructor(private cartService: CartService, changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnInit(): any {
    this.expandedHeight = '0';
    this.cartService.productAdded$.subscribe(data => {
      this.products = data.products;
      this.cartTotal = data.cartTotal;
      this.numProducts = data.products.reduce((acc, product) => {
        acc += product.quantity;
        return acc;
      }, 0);

      // Make a plop animation
      if (this.numProducts > 1) {
        this.animatePlop = true;
        setTimeout(() => {
          this.animatePlop = false;
        }, 160);
      } else if (this.numProducts === 1) {
        this.animatePopout = true;
        setTimeout(() => {
          this.animatePopout = false;
        }, 300);
      }
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
      if (!this.products.length) {
        this.expanded = false;
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  deleteProduct(product): any {
    this.cartService.deleteProductFromCart(product);
  }

  onCartClick(): any {
    this.expanded = !this.expanded;
  }
}


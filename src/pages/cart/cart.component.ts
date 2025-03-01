import { Component, computed, inject } from '@angular/core';
import { CartStore } from './cart.store';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [CartStore]
})
export class CartComponent {
  #cartStore = inject(CartStore);

  constructor() {
    this.#cartStore.init();
  }

  cart = this.#cartStore.cart();
  total = computed(() => this.cart().products.reduce((acc, pr) => acc + pr.price, 0));

  removeFromCart(product:Product) {
    this.#cartStore.removeFromCart(product);
  }

}

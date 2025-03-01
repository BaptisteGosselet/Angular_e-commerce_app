import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsStore } from './product-details.store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductDetailsStore]
})
export class ProductDetailsComponent {
  #productDetailsStore: ProductDetailsStore = inject(ProductDetailsStore);

  product = this.#productDetailsStore.product();

  constructor(private route: ActivatedRoute) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const numProductId = +productId | 0;
      this.#productDetailsStore.init(numProductId);
    }
  }

  addToCart() {
    this.#productDetailsStore.addToCart();
  }

}

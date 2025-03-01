import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  #router = inject(Router);

  readonly product = input.required<Product>();

  goToProductDetails(id: number) {
    this.#router.navigate([`/product/${id}`]);
    
  }

}


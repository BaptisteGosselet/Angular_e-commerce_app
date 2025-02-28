import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();

  goToProductDetails() {
    console.log(this.product().id);
    
  }

}


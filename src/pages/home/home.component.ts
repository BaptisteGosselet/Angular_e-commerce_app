import { Component, inject, Signal } from '@angular/core';
import { HomeStore } from './home.store';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HomeStore]
})
export class HomeComponent {
  #homeStore:HomeStore = inject(HomeStore);

  products:Signal<Product[]> = this.#homeStore.products();

  constructor() {
    this.#homeStore.init();
  }


}

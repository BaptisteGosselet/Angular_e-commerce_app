import { Component, inject, Signal } from '@angular/core';
import { HomeStore } from './home.store';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [],
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

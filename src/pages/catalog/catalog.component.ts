import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CatalogStore } from './catalog.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  providers: [CatalogStore],
})
export class CatalogComponent {
  #catalogStore: CatalogStore = inject(CatalogStore);

  products = this.#catalogStore.products();
  constructor(private route: ActivatedRoute) {
      const category = this.route.snapshot.paramMap.get('category');
      this.#catalogStore.init(category);
  }
}




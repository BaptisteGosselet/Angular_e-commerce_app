import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product/product.service";

@Injectable()
export class HomeStore {
    #productService:ProductService = inject(ProductService);

    #products = signal<Product[]>([]);
    readonly products = this.#products.asReadonly;

    init() {
        this.#getTopProducts();
    }

    #getTopProducts() {
        this.#productService.getProducts().subscribe((products) => {
            let m = products.length;
              while (m) {
              const i = Math.floor(Math.random() * m--);
              [products[m], products[i]] = [products[i], products[m]];
            }
            this.#products.set(products.slice(0, 4));
        });
    }
    
}
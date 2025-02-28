import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product/product.service";

@Injectable()
export class HomeStore {
    #productService:ProductService = inject(ProductService);

    #products = signal<Product[]>([]);
    readonly products = this.#products.asReadonly;

    init() {
        console.log('HomeStore initialized');
        this.#getProducts();
    }

    #getProducts() {
        this.#productService.getProducts().subscribe((products) => {
            this.#products.set(products);
        });
    }


    
}
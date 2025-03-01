import { inject, Injectable, signal } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";

@Injectable()
export class CatalogStore {    
    #productService:ProductService = inject(ProductService);

    #products = signal<Product[]>([]);
    readonly products = this.#products.asReadonly;

    init(category: string | null) {
        if(category === null) {
            this.#getProducts();
        }
        else{
            this.#getProductsByCategory(category);
        }
    }

    #getProducts() {
        this.#productService.getProducts().subscribe((products) => {
            this.#products.set(products);
        });
    }

    #getProductsByCategory(category: string) {
        this.#productService.getProducts().subscribe((products) => {
            products = products.filter(product => product.category === category);
            this.#products.set(products);
        });
    }

}
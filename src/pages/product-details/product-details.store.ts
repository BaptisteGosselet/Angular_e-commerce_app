import { inject, Injectable, signal } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";

@Injectable()
export class ProductDetailsStore {
   
    #productService:ProductService = inject(ProductService);
    
    #product = signal<Product | undefined>(undefined);
    product = this.#product.asReadonly;

    init(id: number) {
        this.#getProduct(id);
    }

    #getProduct(id: number) {
        this.#productService.getProductById(id).subscribe((product) => {
            this.#product.set(product);
        });
    }

    addToCart() {
        console.log('Product added to cart:', this.product());
    }

}
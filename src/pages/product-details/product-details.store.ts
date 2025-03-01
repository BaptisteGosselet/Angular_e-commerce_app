import { inject, Injectable, signal } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { CartService } from "../../services/cart/cart.service";

@Injectable()
export class ProductDetailsStore {
   
    #productService:ProductService = inject(ProductService);
    #cartService:CartService = inject(CartService);
    
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
        if(this.#product()){
            this.#cartService.addToCart(this.#product()!);
        }
    }

}
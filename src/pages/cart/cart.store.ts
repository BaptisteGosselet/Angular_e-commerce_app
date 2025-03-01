import { inject, Injectable, signal } from "@angular/core";
import { CartService } from "../../services/cart/cart.service";
import { Cart } from "../../models/cart.model";
import { Product } from "../../models/product.model";

@Injectable()
export class CartStore {
    #cartService:CartService = inject(CartService);

    #cart = signal<Cart>(new Cart());
    cart = this.#cart.asReadonly;

    init(){
        this.refreshCart();
    }

    refreshCart() {
        this.#cart.set(this.#cartService.getCart());        
    }

    removeFromCart(product: Product) {
        this.#cartService.removeFromCart(product);
        this.refreshCart();
    }

    checkout() {
        this.#cartService.clearCart();
        this.refreshCart();
    }

}
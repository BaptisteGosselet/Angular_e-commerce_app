import { Injectable } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    
    getCart(): Cart {
      return this.#readCart();
    }

    addToCart(product: Product): void {      
      const cart = this.#readCart();
      cart.addProduct(product);
      this.#writeCart(cart);
    }
    
    removeFromCart(product: Product): void {
      const cart = this.#readCart();
      cart.removeProduct(product);
      this.#writeCart(cart);
    }

    clearCart(): void {
      this.#writeCart(new Cart());
    }
    
    #readCart(): Cart {
      const loadedData = localStorage.getItem('cart');
      const loadedCart: Cart = loadedData ? JSON.parse(loadedData) : new Cart();
      const cart = new Cart(loadedCart.products);
      return cart;
    }
    
    #writeCart(cart: Cart): void {
      localStorage.setItem('cart', JSON.stringify(cart));
    }  
  
}

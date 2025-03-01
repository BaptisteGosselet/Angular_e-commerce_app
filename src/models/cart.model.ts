import { Product } from "./product.model";

export class Cart{
    //user: User;
    products: Product[] = [];

    constructor(products: Product[] = []){
        this.products = products;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    removeProduct(product: Product){
        this.products = this.products.filter(p => p.id !== product.id);
    }

}
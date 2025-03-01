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

    removeProduct(product: Product): void {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    

}
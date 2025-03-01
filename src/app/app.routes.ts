import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';
import { ProductDetailsComponent } from '../pages/product-details/product-details.component';
import { CartComponent } from '../pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'catalog', children: [
        { path: '', component: CatalogComponent },
        { path: ':category', component: CatalogComponent },
    ]},
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },      
];

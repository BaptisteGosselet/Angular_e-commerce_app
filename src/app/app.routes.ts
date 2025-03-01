import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'catalog', children: [
        { path: '', component: CatalogComponent },
        { path: ':category', component: CatalogComponent },
    ]


    }
        
];

import { Injectable, signal } from "@angular/core";
import { HeaderLink } from "../../models/header-link.model";

Injectable()
export class HeaderStore {

    #catalogLinks = signal<HeaderLink[]>([
        {
            name: 'Collection',
            url: '/catalog'
        },        
        {
            name: 'Mode homme',
            url: `/catalog/men's clothing`,
        },
        {
            name: 'Mode femme',
            url: `/catalog/women's clothing`,
        },
        {
            name: 'Electronique',
            url: '/catalog/electronics'
        },
        {
            name: 'Bijoux',
            url: '/catalog/jewelery'
        }

    ]);  

    #userLinks = signal<HeaderLink[]>([
        {
            name: 'Panier',
            url: '/cart'
        }
    ]);
    
    readonly catalogLinks = this.#catalogLinks.asReadonly;
    readonly userLinks = this.#userLinks.asReadonly;

}
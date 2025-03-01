import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../app/app.constants';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  #http = inject(HttpClient);
  #serviceUrl = '/products';

  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>(`${BASE_URL}${this.#serviceUrl}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.#http.get<Product>(`${BASE_URL}${this.#serviceUrl}/${id}`);
  }


}

import { observable } from './../../../../../10-nest-teslo-shop-complete-backend-paginated/node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse } from '../interfaces/product.interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {


  private http = inject(HttpClient);

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>('localhost:3000/api/products')
    .pipe(tap((resp) => console.log({resp})));
  }
}

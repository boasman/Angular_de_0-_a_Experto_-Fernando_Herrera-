import { observable } from './../../../../../10-nest-teslo-shop-complete-backend-paginated/node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../interfaces/product.interfaces';
import { delay, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  //const baseUrl = environment.baseUrl;

  private http = inject(HttpClient);

  private ProductsCache = new Map<string, ProductsResponse>();
  private ProductCache = new Map<string, Product>();

  getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 9, offset = 0, gender = '' } = options;

    const key = `${limit}-${offset}-${gender}`; //9-0-''

    if (this.ProductsCache.has(key)) {
      return of(this.ProductsCache.get(key)!);
    }

    return this.http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit,
          offset,
          gender,
        },
      })
      .pipe(
        tap((resp) => console.log(resp)),
        tap((resp) => this.ProductsCache.set(key, resp))
      );
  }

  getProductByIdSlug(idSlug: string): Observable<Product> {

    if (this.ProductCache.has(idSlug)) {
      return of(this.ProductCache.get(idSlug)!);
    }
    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
    .pipe(
      tap((product) => this.ProductCache.set(idSlug,product))
    );

  }
}

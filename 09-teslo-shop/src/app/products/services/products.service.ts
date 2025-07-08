import { observable } from './../../../../../10-nest-teslo-shop-complete-backend-paginated/node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Gender,
  Product,
  ProductsResponse,
} from '../interfaces/product.interfaces';
import { delay, forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '@auth/interfaces/user.interfaces';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

const emptyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Kid,
  tags: [],
  images: [],
  user: {} as User,
};

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
    return this.http
      .get<Product>(`${baseUrl}/products/${idSlug}`)
      .pipe(tap((product) => this.ProductCache.set(idSlug, product)));
  }

  getProductById(id: string): Observable<Product> {
    if (id === 'new') {
      return of(emptyProduct);
    }

    if (this.ProductCache.has(id)) {
      return of(this.ProductCache.get(id)!);
    }
    return this.http
      .get<Product>(`${baseUrl}/products/${id}`)
      .pipe(tap((product) => this.ProductCache.set(id, product)));
  }

  updateProduct(
    id: string,
    productLike: Partial<Product>,
    imageFileList?: FileList
  ): Observable<Product> {
    const currentImages = productLike.images ?? [];

    return this.uploadImages(imageFileList).pipe(
      map((imagesNames) => ({
        ...productLike,
        images: [...currentImages, ...imagesNames],
      })),
      switchMap((updateProduct) =>
        this.http.patch<Product>(`${baseUrl}/products/${id}`, updateProduct)
      ),
      tap((product) => this.updateProductCache(product))
    );

    // return this.http
    //   .patch<Product>(`${baseUrl}/products/${id}`, productLike)
    //   .pipe(tap((product) => this.updateProductCache(product)));
  }

  createProduct(
    productLike: Partial<Product>,
    imageFileList?: FileList
  ): Observable<Product> {
    //const currentImages = productLike.images ?? [];

    return this.uploadImages(imageFileList).pipe(
      map((imagesNames) => ({
        ...productLike,
        images: [...imagesNames],
      })),
      switchMap((createProduct) =>
        this.http.post<Product>(`${baseUrl}/products/`, createProduct)
      ),
      tap((product) => this.updateProductCache(product))
    );
  }

  updateProductCache(product: Product) {
    const productId = product.id;

    this.ProductCache.set(productId, product);

    this.ProductsCache.forEach((productResponse) => {
      productResponse.products = productResponse.products.map(
        (currentProduct) => {
          return currentProduct.id == productId ? product : currentProduct;
        }
      );
    });

    console.log('Cache actualizado');
  }

  //tome un FileList y los suba

  uploadImages(images?: FileList): Observable<string[]> {
    if (!images) return of([]);

    const uploadObservables = Array.from(images).map((imageFile) =>
      this.updaloadImage(imageFile)
    );

    return forkJoin(uploadObservables).pipe(
      tap((imagesName) => console.log({ imagesName }))
    );
  }

  updaloadImage(imageFile: File): Observable<string> {
    const formdData = new FormData();
    formdData.append('file', imageFile);

    return this.http
      .post<{ fileName: string }>(`${baseUrl}/files/product`, formdData)
      .pipe(map((resp) => resp.fileName));
  }
}

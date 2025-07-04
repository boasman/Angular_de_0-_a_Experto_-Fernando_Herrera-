import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products//services/products.service';


@Component({
  standalone: true,
  imports: [ProductCardComponent],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  query = signal<string>('');

  //npm install -g @angular/cli@latest

  //products = signal<>

  productService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({}),
    stream: ({params}) => this.productService.getProducts({}),
  });
}


import { Component, inject } from '@angular/core';
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

   //npm install -g @angular/cli@latest

  productService = inject(ProductsService);

  productsResource = rxResource({
    loader: () => this.productService.getProducts()
  });


}

import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products//services/products.service';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PaginationService } from '@shared/components/pagination/pagination.service';




@Component({
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  //query = signal<string>('');

  //products = signal<>

  paginationService = inject(PaginationService);

  productService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() - 1}),
    stream: ({params}) =>  {
      return this.productService.getProducts({
        offset: params.page * 9
      })
    } ,
  });
}

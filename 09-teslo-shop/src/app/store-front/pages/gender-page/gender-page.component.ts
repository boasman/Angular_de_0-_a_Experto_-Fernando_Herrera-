import { Component, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { ProductsService } from '@products//services/products.service';
import { map } from 'rxjs';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {

  route = inject(ActivatedRoute);
  productService = inject(ProductsService);

  paginationService = inject(PaginationService);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  productResource = rxResource({
    params: () => ({ gender: this.gender(), page: this.paginationService.currentPage() - 1 }),
    stream: ({ params }) =>
      this.productService.getProducts({
        gender: params.gender,
        offset: params.page * 9
      }),
  });
}

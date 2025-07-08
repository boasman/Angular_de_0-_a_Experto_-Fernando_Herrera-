import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductTableComponent } from "../../../products/components/product-table/product-table.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products//services/products.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  imports: [ProductTableComponent, PaginationComponent, RouterLink],
  selector: 'app-products-admin-page',
  templateUrl: './products-admin-page.component.html',

})
export class ProductsAdminPageComponent  {

  productPerPage = signal(10);

   paginationService = inject(PaginationService);

  productService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() - 1,
      limit: this.productPerPage()
    }),
    stream: ({params}) =>  {
      return this.productService.getProducts({
        offset: params.page * 9,
        limit: params.limit
      })
    } ,
  });

}

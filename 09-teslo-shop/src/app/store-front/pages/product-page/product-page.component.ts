import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products//services/products.service';

@Component({
  standalone: true,
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug = signal(this.ActivatedRoute.snapshot.params['idSlug']);

  productResource = rxResource({
    params: () => {
      const id = this.productIdSlug();
      console.log('rxResource params:', id);
      return { idslug: id };
    },
    stream: ({ params }) => {
      console.log('stream llamado con:', params.idslug);
      return this.productService.getProductByIdSlug(params.idslug);
    },
  });
}

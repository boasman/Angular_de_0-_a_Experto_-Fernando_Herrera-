import { Component, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { ProductsService } from '@products//services/products.service';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [ProductCardComponent],
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductsService);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));


  productResource = rxResource({
    params: () => ({gender: this.gender()}),
    stream: ({params}) => this.productService.getProducts({
      gender: params.gender
    }),
  });
}

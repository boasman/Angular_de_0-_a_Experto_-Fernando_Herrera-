import { SlicePipe } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products//interfaces/product.interfaces';
import { ProductImagePipe } from '@products//pipes/product-image.pipe';


@Component({
  standalone: true,
  imports: [RouterLink, SlicePipe,ProductImagePipe],
  selector: 'product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //  title = input.required<string>();
  //  description = input.required<string>();

  product = input.required<Product>();

  imageUrl =  computed( () => {

    // if(this.product()) return '';

    return `http://localhost:3000/api/files/product/${this.product().images[0]}`;

  })
}

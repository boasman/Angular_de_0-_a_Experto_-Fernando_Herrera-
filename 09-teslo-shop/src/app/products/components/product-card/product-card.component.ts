import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

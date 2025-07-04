import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [ProductCardComponent],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

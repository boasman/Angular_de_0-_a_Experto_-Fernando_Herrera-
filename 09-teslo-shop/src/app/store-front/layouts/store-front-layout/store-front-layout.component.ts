import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from '../../components/front-navbar/front-navbar.component';

@Component({
  standalone: true,
  imports: [RouterOutlet,FrontNavbarComponent],
  selector: 'app-store-front-layout',
  templateUrl: './store-front-layout.component.html',
})
export class StoreFrontLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

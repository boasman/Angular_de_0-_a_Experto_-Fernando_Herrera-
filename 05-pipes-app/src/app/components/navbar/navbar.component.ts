import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rotue = routes.map(routes => ({
    title: routes.title ?? '',
    path: routes.path ?? ''
  }))

}

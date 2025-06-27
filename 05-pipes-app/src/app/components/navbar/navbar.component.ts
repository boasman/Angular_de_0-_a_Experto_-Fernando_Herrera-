import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  routes = routes.map(routes => ({
    title: routes.title ?? '',
    path: routes.path ?? ''
  }))

}

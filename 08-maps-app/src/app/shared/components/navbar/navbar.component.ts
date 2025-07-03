import { Component, inject, OnInit } from '@angular/core';
import { routes } from '../../../app.routes';
import { filter, map, pipe, tap } from 'rxjs';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [AsyncPipe,RouterLink],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit 
{
  constructor() {}

  ngOnInit() {}

  router = inject(Router)

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`,
  })).filter(route => route.path !== '**');

  pageTitle$ =  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),    
    map((event) => event.url),
    map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
  
  );

  //para pasar un observable a una senal
  pageTitle = toSignal(this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),    
    map((event) => event.url),
    map((url) => routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')  
  ))

}

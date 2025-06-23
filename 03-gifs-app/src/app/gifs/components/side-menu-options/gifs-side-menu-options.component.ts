import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../services/gifs.service';


interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
    selector: 'app-gifs-side-menu-options',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './gifs-side-menu-options.component.html',
    styleUrls: ['./gifs-side-menu-options.component.css'],
    standalone: true
})
export class GifsSideMenuOptionsComponent implements OnInit {

  giServices = inject(GifService);

  constructor() { }

  ngOnInit() {
  }

    menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];

}

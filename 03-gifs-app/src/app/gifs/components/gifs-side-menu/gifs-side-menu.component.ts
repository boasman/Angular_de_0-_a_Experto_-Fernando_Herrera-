import { Component, OnInit } from '@angular/core';
import { GifsSideMenuHeaderComponent } from '../gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from '../gifs-side-menu-options/gifs-side-menu-options.component';



@Component({
  standalone: true,
  imports: [
    GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent,
  ],
  selector: 'app-gifs-side-menu',
  templateUrl: './gifs-side-menu.component.html',
  styleUrls: ['./gifs-side-menu.component.css'],
})
export class GifsSideMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}


}

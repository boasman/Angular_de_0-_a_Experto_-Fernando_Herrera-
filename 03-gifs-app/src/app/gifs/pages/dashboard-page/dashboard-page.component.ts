import { Component, OnInit } from '@angular/core';

import { GifsSideMenuComponent } from "../../components/side-menu/gifs-side-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [GifsSideMenuComponent,RouterOutlet],
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})
export default class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

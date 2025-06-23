// import { environment } from '../../../../environments/environment.development';
import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';



@Component({
    selector: 'app-gifs-side-menu-header',
    templateUrl: './gifs-side-menu-header.component.html',
    styleUrls: ['./gifs-side-menu-header.component.css'],
    standalone: true
})
export class GifsSideMenuHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  envs =  environment

}

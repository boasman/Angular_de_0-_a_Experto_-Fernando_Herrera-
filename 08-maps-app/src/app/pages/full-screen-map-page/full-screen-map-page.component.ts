import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-full-screen-map-page',
  templateUrl: './full-screen-map-page.component.html',  
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export class FullScreenMapPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

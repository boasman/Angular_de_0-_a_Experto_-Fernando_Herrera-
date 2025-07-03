import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment.development';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  standalone: true,
  selector: 'app-full-screen-map-page',
  templateUrl: './full-screen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }

    #controls {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `,
})
export class FullScreenMapPageComponent implements OnInit, AfterViewInit {

    divElement = viewChild<ElementRef>('map');


  constructor() {}

  async ngAfterViewInit() {


    if( !this.divElement()) return;

    const element = this.divElement()?.nativeElement;

    console.log(element);

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  ngOnInit() {}


}

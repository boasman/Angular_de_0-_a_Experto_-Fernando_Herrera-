import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';

import mapboxgl, { LngLat } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

import { DecimalPipe, JsonPipe } from '@angular/common';
import { environment } from '../../../../environments/environment.development';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  standalone: true,
  imports: [],
  selector: 'app-mini-maps',
  templateUrl: './mini-maps.component.html',
  styles: `
   div {
      width: 100%;
      height: 260px;
    }
  `,
})
export class MiniMapsComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  zoom = signal(14);

  coordinates = signal({
    lng: -74.5,
    lat: 40,
  });

  lgnLat = input.required<{lng: number, lat: number}>();

  map = signal<mapboxgl.Map | null>(null);

  async ngAfterViewInit() {
    if (!this.divElement()) return;

    const element = this.divElement()?.nativeElement;

    console.log(element);

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lgnLat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false
    });

    new mapboxgl.Marker()
    .setLngLat(this.lgnLat())
    .addTo(map);
  }


}

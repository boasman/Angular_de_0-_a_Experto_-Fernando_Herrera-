import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  standalone: true,
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements OnInit, AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  zoom = signal(14);
  map = signal<mapboxgl.Map | null>(null);

  constructor() {}

  ngOnInit() {}

  async ngAfterViewInit() {
    if (!this.divElement()) return;

    const element = this.divElement()?.nativeElement;
    //const { lng, lat } = this.coordinates();

    console.log(element);

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-3.735591, 40.302867], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    // const marker = new mapboxgl.Marker({
    //   draggable: false,
    //   color: '#000',

    // }).setLngLat([-3.735591, 40.302867])
    // .addTo(map);

    // marker.on('dragend', (event) => {
    //   console.log(event);
    // } )

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('click', (event) => this.mapClick(event));
    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent) {

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );


  }
}

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { v4 as UUIv4 } from 'uuid';
import { JsonPipe } from '@angular/common';
import { filter } from 'rxjs';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  standalone: true,
  imports: [JsonPipe],
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements OnInit, AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  zoom = signal(14);
  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);

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
    if (!this.map()) return;

    const map = this.map()!;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: color,
    })
      .setLngLat(event.lngLat)
      .addTo(map);

    const newMarker: Marker = {
      id: UUIv4(),
      mapboxMarker: marker,
    };

    this.markers.set([newMarker, ...this.markers()]);

    console.log(this.markers());
  }

  flyToMarker(lnglat: LngLatLike) {
    if (!this.map()) return;
    this.map()?.flyTo({
      center:lnglat
    })
  }

  deleteMarker(marker: Marker){

    if(!this.map()) return;
    const map = this.map();
    marker.mapboxMarker.remove();

    this.markers.set(this.markers().filter(m => m.id !== marker.id))

  }
}

import { Component, OnInit } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifListItemComponent } from "../../components/gif-list-item/gif-list-item.component";

@Component({
  standalone: true,
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css'],
  imports: [GifListComponent, GifListItemComponent]
})
export  default class TrendingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

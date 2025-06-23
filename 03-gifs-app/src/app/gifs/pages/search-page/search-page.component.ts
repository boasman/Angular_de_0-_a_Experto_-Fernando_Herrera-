import { Component, OnInit } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  standalone: true,
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  imports: [GifListComponent]
})
export default class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

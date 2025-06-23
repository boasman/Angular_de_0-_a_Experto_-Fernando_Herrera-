import { Component, OnInit } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";

@Component({
  standalone: true,
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
  imports: [GifListItemComponent]
})
export class GifListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

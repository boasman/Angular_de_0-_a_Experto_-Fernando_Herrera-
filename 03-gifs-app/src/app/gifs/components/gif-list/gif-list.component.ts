import { Component, input, OnInit, output } from '@angular/core';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/gir.interface';

@Component({
  standalone: true,
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
  imports: [GifListItemComponent],
})
export class GifListComponent implements OnInit {

  gifs = input.required<Gif[]>();

  constructor() {
  }

  ngOnInit() {}
}

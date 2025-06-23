import { Component, input, OnInit, output } from '@angular/core';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';

@Component({
  standalone: true,
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
  imports: [GifListItemComponent],
})
export class GifListComponent implements OnInit {
  // stringUrlOutput = output<string[]>();
  gifs = input.required<string[]>();

  constructor() {
    // if(this.stringUrlInput()){
    //   this.stringUrlOutput.emit(this.stringUrlInput());
    // }
  }

  ngOnInit() {}
}

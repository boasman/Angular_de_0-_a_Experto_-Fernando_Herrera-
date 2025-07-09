import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports:[HeavyLoadersFastComponent, TitleComponent,CommonModule],
  selector: 'app-defer-options',
  templateUrl: './defer-options.component.html',

})
export default class DeferOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

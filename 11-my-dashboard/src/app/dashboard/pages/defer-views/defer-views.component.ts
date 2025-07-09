import { Component, OnInit } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component copy';
import { TitleComponent } from "@shared/title/title.component";

@Component({
  standalone:true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  selector: 'app-defer-views',
  templateUrl: './defer-views.component.html',

})
export default class DeferViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

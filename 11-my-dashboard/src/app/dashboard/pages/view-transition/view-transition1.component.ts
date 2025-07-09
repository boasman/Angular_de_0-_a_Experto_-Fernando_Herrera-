import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  selector: 'app-view-transition',
  template: `

  <app-title title="View Transition 1">  </app-title>

  <section class="flex justify-start">
    <img srcset="https://picsum.photos/id/237/536/354"
    alt="Picsum"
    height="536"
    width="354"
    style="view-timeline-name: hero1;"
    >
    <div class="bg-blue-500 w-56 h-56 "
      style="view-timeline-name: hero2;">

    </div>
  </section>

  `

})
export default class ViewTransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

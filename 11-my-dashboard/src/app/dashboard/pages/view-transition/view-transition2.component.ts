import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  selector: 'app-view-transition',
  template: `

  <app-title title="View Transition 2">  </app-title>

  <section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/536/354"
    alt="Picsum"
    height="536"
    width="354"
    style="view-timeline-name: hero1;"
    >
    <div class="fixed bottom-16 bg-blue-500 w-32 h-32"
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

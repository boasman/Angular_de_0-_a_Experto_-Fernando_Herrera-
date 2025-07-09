import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-change-detection',
  template: `
    <app-title [title]="currentFrameWork()"></app-title>

    <pre>{{ frameworkAsProperties | json }}</pre>

    <pre>{{ frameworkAsSignal() | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFrameWork = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  constructor() {
    setTimeout(() => {
      //this.frameworkAsProperties.name  = 'React'

      this.frameworkAsSignal.update((valor) => ({
        ...valor,
        name: 'React',
      }));

      console.log('Hecho');
    }, 3000);
  }

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  frameworkAsProperties = {
    name: 'Angular',
    releaseDate: 2016,
  };
}

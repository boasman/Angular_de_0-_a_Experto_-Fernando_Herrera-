import { CommonModule, NgClass } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';


@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-heavy-loaders-fast',
  template: `
    <section [ngClass]="['w-full', cssClass()]">

      <ng-content>

      </ng-content>

    </section>
  `
})
export class HeavyLoadersFastComponent implements OnInit {

  cssClass = input.required<string>();

  constructor() {
    console.log("HeavyLoader fast Creado")
   }

  ngOnInit() {
  }

}

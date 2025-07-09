import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, input, OnInit, ɵsetClassDebugInfo } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-heavy-loaders-slow',
  template: ` <section [ngClass]="['w-full h-[600px]', cssClass]">
    heavy loader slow
  </section> `,
})
export class HeavyLoadersSlowComponent  {


  @Input({required: true}) cssClass!: string;




  constructor() {


    const start = Date.now();

    while(Date.now() -  start < 3000){

    }

    console.log('Cargado');

  }

}

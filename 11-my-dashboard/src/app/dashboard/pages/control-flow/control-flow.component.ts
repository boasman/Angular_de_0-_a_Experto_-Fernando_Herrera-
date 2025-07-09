import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',

})
export default class ControlFlowComponent  {


  showContent = signal(false);
  grade = signal<Grade>('A');

  framwork  = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  framwork2  = signal(['Angular']);

  public toogleContent(){
    this.showContent.update(value  => !value);
  }
  constructor() { }




}

import { Component, input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-title',
  template: `
  <h1 class="text-3xl mb-5">{{title()}}</h1>`

})
export class TitleComponent implements OnInit {

  title = input.required<string>();

  constructor() { }

  ngOnInit() {
  }

}

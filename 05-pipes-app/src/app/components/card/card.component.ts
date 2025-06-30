import { Component, input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = input.required();


  constructor() { }

  ngOnInit() {
  }

}

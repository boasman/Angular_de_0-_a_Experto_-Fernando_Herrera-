import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  standalone: true,
  imports:[
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export default class  NumberPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  totalSell = signal(2_423_323.5567);
  percent = signal(0.4856);


}

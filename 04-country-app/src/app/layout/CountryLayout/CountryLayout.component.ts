import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterOutlet],
  selector: 'app-CountryLayout',
  templateUrl: './CountryLayout.component.html',
  styleUrls: ['./CountryLayout.component.css']
})
export class CountryLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

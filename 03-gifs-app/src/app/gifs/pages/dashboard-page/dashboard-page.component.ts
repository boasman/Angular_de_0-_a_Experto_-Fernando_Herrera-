import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterOutlet],
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export default class DashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

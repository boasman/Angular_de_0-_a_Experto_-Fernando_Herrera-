import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

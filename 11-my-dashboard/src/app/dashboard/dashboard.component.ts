import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';




@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}

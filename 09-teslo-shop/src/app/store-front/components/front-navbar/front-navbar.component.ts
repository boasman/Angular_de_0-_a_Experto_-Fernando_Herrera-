import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'front-navbar',
  templateUrl: './front-navbar.component.html',

})
export class FrontNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

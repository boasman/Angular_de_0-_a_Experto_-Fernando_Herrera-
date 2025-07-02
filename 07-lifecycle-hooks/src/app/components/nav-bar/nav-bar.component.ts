import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: `

   nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.active {
  color: #341162;
  font-weight: bold;
}


  `,
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

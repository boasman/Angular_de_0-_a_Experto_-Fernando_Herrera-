import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'front-navbar',
  templateUrl: './front-navbar.component.html',

})
export class FrontNavbarComponent  {

  authService = inject(AuthService);



}

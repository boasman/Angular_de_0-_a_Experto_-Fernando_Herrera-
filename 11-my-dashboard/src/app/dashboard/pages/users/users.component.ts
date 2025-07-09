import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from "@shared/title/title.component";



@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  selector: 'app-users',
  templateUrl: './users.component.html',

})
export default class UsersComponent implements OnInit {




  userService = inject(UsersService);

  constructor() {

    this.userService.users();
   }

  ngOnInit() {
  }

}

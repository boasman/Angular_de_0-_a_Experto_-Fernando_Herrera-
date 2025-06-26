import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  location = inject(Location);

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../country/components/top-menu/top-menu.component";

@Component({
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent],
  selector: 'app-CountryLayout',
  templateUrl: './CountryLayout.component.html',
  styleUrls: ['./CountryLayout.component.css']
})
export class CountryLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

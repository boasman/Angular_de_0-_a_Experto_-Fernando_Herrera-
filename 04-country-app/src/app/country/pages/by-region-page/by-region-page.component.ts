import { Component, OnInit, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interfaces';

@Component({
    standalone: true,
    imports: [CountryListComponent],
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  country = signal<Country[]>([]);

}

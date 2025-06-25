import { Component, inject, OnInit } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryService } from '../../services/country.service';

@Component({
  standalone: true,
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
  imports: [CountryListComponent, CountrySearchInputComponent],
})
export class ByCapitalPageComponent implements OnInit {

  searchByCapitalPage = inject(CountryService);
  constructor() { }

  ngOnInit() { }

  onSearch(value: any) {
    console.log('Imprimiendo el valor desde el padre', value);
  }
}

import { Component, input, OnInit } from '@angular/core';
import { RESTCountry } from '../../interfaces/res-country.interfaces';
import { Country } from '../../interfaces/country.interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [DecimalPipe,RouterLink],
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries = input.required<Country[]>();

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);


  constructor() { }

  ngOnInit() {
  }

}

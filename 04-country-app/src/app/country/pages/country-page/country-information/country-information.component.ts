import { Component, computed, input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  standalone: true,
  imports:[DecimalPipe],
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.css']
})
export class CountryInformationComponent implements OnInit {

  country = input.required<Country>();

  currentYear = computed(() =>  {
    return new Date().getFullYear();
  })

  constructor() { }

  ngOnInit() {
  }

}

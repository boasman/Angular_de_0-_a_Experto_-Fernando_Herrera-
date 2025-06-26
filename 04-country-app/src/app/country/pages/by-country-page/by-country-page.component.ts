import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
    standalone: true,
    imports: [CountrySearchInputComponent, CountryListComponent],
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countryService = inject(CountryService);
  query  = signal('');

    //CON OBSERVABLE
    countryResource  =  rxResource({
    request: () => ({query : this.query()}),
    loader: ({request}) => {

      if(!request.query) return of([]);

      return this.countryService.searchByCountry(request.query)

    }
  });


  // countryResource  =  resource({
  //   request: () => ({query : this.query()}),
  //   loader: async({request}) => {

  //     if(!request.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // });


}

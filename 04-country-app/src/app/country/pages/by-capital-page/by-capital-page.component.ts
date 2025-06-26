import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryService } from '../../services/country.service';
import {rxResource} from '@angular/core/rxjs-interop'
import { of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
  imports: [CountryListComponent, CountrySearchInputComponent],
})
export class ByCapitalPageComponent implements OnInit {

  countryService = inject(CountryService);
  query  = signal('');

    //CON OBSERVABLE
    countryResource  =  rxResource({
    request: () => ({query : this.query()}),
    loader: ({request}) => {

      if(!request.query) return of([]);

      return this.countryService.searchByCapital(request.query)

    }
  });

  //CON PROMESA

  // countryResource  =  resource({
  //   request: () => ({query : this.query()}),
  //   loader: async({request}) => {

  //     if(!request.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  constructor() { }

  ngOnInit() { }



  // onSearch(value: any) {

  //   if(this.isLoading()) return

  //   this.isError.set(null);


  //   this.countryService.searchByCapital(value)
  //   .subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error : (err) => {
  //       console.log(err);
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err)
  //     }
  //   })

  // }
}



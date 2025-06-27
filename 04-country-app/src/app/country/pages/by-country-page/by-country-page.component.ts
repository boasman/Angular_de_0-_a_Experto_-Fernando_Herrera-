import { Component, inject, linkedSignal, OnInit, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, ActivatedRoute } from '@angular/router';

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

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  countryService = inject(CountryService);
  query  = linkedSignal(() => this.queryParam);

    //CON OBSERVABLE
    countryResource  =  rxResource({
    request: () => ({query : this.query()}),
    loader: ({request}) => {

      if(!request.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: request.query
        }
      })

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

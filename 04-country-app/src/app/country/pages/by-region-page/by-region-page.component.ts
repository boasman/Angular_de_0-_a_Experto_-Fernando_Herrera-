import { Request } from './../../../../../../03-gifs-app/node_modules/@types/express-serve-static-core/index.d';
import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    standalone: true,
    imports: [CountryListComponent],
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrls: ['./by-region-page.component.css']
})


export class ByRegionPageComponent implements OnInit {

  countryService = inject(CountryService)

  router  = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';
  query  = linkedSignal(() => this.selecteRegion());

  constructor() { }

  ngOnInit() {
  }

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selecteRegion = linkedSignal<Region | null>(() => this.validateQueryPara(this.queryParam) ?? 'Americas');

  regionResource  =  rxResource({
    request: () => ({region : this.selecteRegion()}),
    loader: ({request}) => {

      if(!request.region) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: request.region
        }
      })
      return this.countryService.searchByRegions(request.region)
    }
  });

  validateQueryPara(queryParam: string) : Region {

    queryParam = queryParam.toLowerCase();

    const validRegion: Record<string, Region> = {
      africa:'Africa',
      americas : 'Americas',
      asia:'Asia',
      europa : 'Europe',
      oceania:'Oceania',
      antarctic:'Antarctic'
    }

    return validRegion[queryParam] ?? 'Americas';

    }

}

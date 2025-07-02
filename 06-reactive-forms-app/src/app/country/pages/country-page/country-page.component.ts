import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { JsonPipe } from '@angular/common';
import { Country } from '../../../interfaces/country.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  fb = inject(FormBuilder);

  countryService = inject(CountryService);

  regions = signal(this.countryService.regions);

  countryByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  onFormchanged = effect((onCleanup) => {
    const regionSubscription = this.onRegionChange();

    onCleanup(() => {
      regionSubscription.unsubscribe();
      console.log('limpiado');
    });
  });

  onRegionChange() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => {
          this.borders.set([]);
          this.countryByRegion.set([]);
        }),
        switchMap((region) =>
          this.countryService.getCountriesByRegions(region!)
        )
      )
      .subscribe((countries) => {
        console.log({countries})
        this.countryByRegion.set(countries);
        console.log("senal country by region", this.countryByRegion())
      });
  }

  //esta es una forma de hacerlo
  // formRegionChange = this.myForm
  //   .get('region')!
  //   .valueChanges.subscribe((value) => {
  //     console.log({ value });
  //   });
}

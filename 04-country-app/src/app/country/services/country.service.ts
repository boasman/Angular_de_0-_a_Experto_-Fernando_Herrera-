import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/res-country.interfaces';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

constructor() { }

private http = inject(HttpClient)

private queryCacheCapital = new Map<string, Country[]>();
private queryCacheCountry = new Map<string, Country[]>();
private regionCache = new Map<string, Country[]>();


searchByCapital(query: string): Observable<Country[]>{

   query = query.toLowerCase();

   if(this.queryCacheCapital.has(query)){
    return of(this.queryCacheCapital.get(query) ?? []);
   }
   console.log(`LLegando al servidor por ${query}`);
   console.log("valores de los mapas", this.queryCacheCapital);



  return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    tap(countries => this.queryCacheCapital.set(query,countries)),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo obtener la capital con ese ${query}` ));
    })
  )
}

searchByCountry(query: string): Observable<Country[]>{

   query = query.toLowerCase();

   if(this.queryCacheCountry.has(query)){
    return of(this.queryCacheCountry.get(query) ?? []);
   }

   console.log("llegando al servidor de country");
   console.log("Resultado de la cache de Country:", this.queryCacheCountry);

  return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    tap(countries => this.queryCacheCountry.set(query,countries)),
    delay(2000),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo obtener paises con ese ${query}` ));
    })
  )
}

searchByRegions(region: Region): Observable<Country[]>{

  if(this.regionCache.has(region)){
    return of(this.regionCache.get(region) ?? []);
   }

  return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    tap(countries => this.regionCache.set(region,countries)),
    delay(2000),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo obtener los paises de la region seleccionada ${region}` ));
    })
  )
}

searchCountryByAlphaCode(code: string){

  return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    map(countries => countries.at(0)),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo encontrar un pais con ese codigo: ${code}` ));
    })
  )
}

}

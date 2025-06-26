import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/res-country.interfaces';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

constructor() { }



private http = inject(HttpClient)


searchByCapital(query: string): Observable<Country[]>{

   query = query.toLowerCase();

  return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo obtener la capital con ese ${query}` ));
    })
  )
}

searchByCountry(query: string): Observable<Country[]>{

   query = query.toLowerCase();

  return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
  .pipe(
    map((resp) => CountryMapper.mapResCountryArrayToCountryArray(resp)),
    delay(2000),
    catchError(error => {
      console.log('Error fetching', error);
      return throwError(() => new Error(`No se pudo obtener paises con ese ${query}` ));
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

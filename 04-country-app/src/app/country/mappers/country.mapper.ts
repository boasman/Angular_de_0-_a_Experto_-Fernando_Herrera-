import { Country } from '../interfaces/country.interfaces';
import { RESTCountry } from '../interfaces/res-country.interfaces';

export class CountryMapper{


  //static RestCountry  => Country

  static mapResCountryToCountry(resCountry: RESTCountry) : Country{
    return {
      cca2: resCountry.cca2,
      flag: resCountry.flag,
      flagSvg: resCountry.flags.svg,
      name: resCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: resCountry.capital.join(','),
      population: resCountry.population
    }
  }

  static mapResCountryArrayToCountryArray(restCountries : RESTCountry[]) : Country[]{
    return restCountries.map(this.mapResCountryToCountry);
  }

}

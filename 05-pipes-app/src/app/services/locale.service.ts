import { Injectable, signal } from '@angular/core';


export type AvaliableLocale = 'es'|'fr'|'en';


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

constructor() { }

private currentLocale = signal<AvaliableLocale>('fr');


get getLocal(){
  return this.currentLocale()
};

changLocale(locale: AvaliableLocale){
  this.currentLocale.set(locale);
}

}

import { Injectable, signal } from '@angular/core';


export type AvaliableLocale = 'es'|'fr'|'en';


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

constructor() {
  this.currentLocale.set(
    (localStorage.getItem('locale') as AvaliableLocale) ?? 'es'
  )
 }

private currentLocale = signal<AvaliableLocale>('fr');


get getLocal(){
  return this.currentLocale()
};

changLocale(locale: AvaliableLocale){
  localStorage.setItem('locale', locale);
  this.currentLocale.set(locale);
  window.location.reload();
}

}

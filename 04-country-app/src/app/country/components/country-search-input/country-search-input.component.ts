import { Component, input, OnInit, output } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-country-search-input',
    templateUrl: './country-search-input.component.html',
    styleUrls: ['./country-search-input.component.css']
})
export class CountrySearchInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  value = output<string>();
  placeholder = input('Buscar')

  // onSearch(value: string) {
  //   console.log(value);
  //   this.value.emit(value);
  // }
}

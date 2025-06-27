import { Component, effect, input, linkedSignal, OnInit, output, signal } from '@angular/core';

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
  placeholder = input('Buscar');
  initialValue = input<string>();

  debounceTime = input(300);

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '') ;

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    },this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    })
  })

  // onSearch(value: string) {
  //   console.log(value);
  //   this.value.emit(value);
  // }
}

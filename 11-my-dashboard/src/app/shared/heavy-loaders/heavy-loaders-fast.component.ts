import { Handler } from './../../../../node_modules/node-gyp/node_modules/tar/dist/commonjs/path-reservations.d';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports:[],
  selector: 'app-heavy-loaders-fast',
  template: `
    <h1>Hola Mundo</h1>
  `
})
export class HeavyLoadersFastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada',
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada',
};

@Component({
  standalone: true,
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export default class UncommonPageComponent implements OnInit {
  //i18n Select

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  constructor() {}

  ngOnInit() {}

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    '=2': 'tenemos # clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  deleteClient() {
    this.clients.update((pre) => pre.slice(1));
  }

  //KeyValuePipe

  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  profile2 = signal({
    name: 'Maria',
    age: 40,
    address: 'toronto, Canada',
  });

  // Async Pipe

  promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500)
  })

  myObservabletimer  = interval(2000).pipe(

    tap((value)  =>  console.log("tab:", value))

  )
}

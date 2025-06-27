import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe
  ],
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export default class BasicPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nameLower = signal('elvis');
  nameUpper = signal('ELVIS');
  fullName = signal('ElVis MIchaEl');

  customDate = signal(new Date());

  tickingDateEffect =  effect( (onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    })


  })

}

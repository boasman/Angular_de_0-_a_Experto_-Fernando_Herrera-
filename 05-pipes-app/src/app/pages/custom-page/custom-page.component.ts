import { Component, OnInit, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanflyPipe } from '../../pipes/canfly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-bty.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';


@Component({
  standalone: true,
  imports:[
    ToggleCasePipe,
    CanflyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export default class CustomPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = signal('Elvis Boasman');

  upperCase = signal(true);


  //Yo implemente este metodo
  changeValue(){
    console.log("entro", this.upperCase())
    if(this.upperCase()){
      this.upperCase.set(false);
    }
    else{
      this.upperCase.set(true);
    }

  }

  heroes = signal(heroes);

  sortBy = signal<keyof Hero |  null>(null);

  searchQuery = signal('');



}

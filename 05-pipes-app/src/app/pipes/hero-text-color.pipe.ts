import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor',
  standalone: true
})


export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color) : string {

    return ColorMap[value]

  }
}

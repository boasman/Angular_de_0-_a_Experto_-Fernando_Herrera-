import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
  standalone: true
})
export class HeroColorPipe implements PipeTransform {

  transform(color: Color) : string {
    return Color[color];
  }

}

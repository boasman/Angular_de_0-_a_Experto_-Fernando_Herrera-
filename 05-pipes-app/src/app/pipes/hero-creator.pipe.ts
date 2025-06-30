import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'creatorPipe',
  standalone: true,
})
export class HeroCreatorPipe implements PipeTransform {

  transform(creator: Creator): string {
    return Creator[creator];
  }

}

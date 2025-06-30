import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
  standalone: true// 'fernando | toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, upper: boolean): string {
    console.log({value})

    return upper ? value.toUpperCase() : value.toLowerCase();



  }

}

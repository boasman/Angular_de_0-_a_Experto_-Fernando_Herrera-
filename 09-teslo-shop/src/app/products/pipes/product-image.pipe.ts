import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

const baseUrl = environment.baseUrl;

@Pipe({
  standalone: true,
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): any {
    if (typeof value === 'string') {
      return `${baseUrl}/files/product/${value}`;
    }

    const image = value.at(0);

    if (!image) {
      console.log("2");
      return './asset/images/no-image.jpg';
    }
    console.log("23");
    return `${baseUrl}/files/product/${image}`;
  }
}

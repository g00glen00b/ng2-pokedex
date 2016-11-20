import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feet'
})
export class FeetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

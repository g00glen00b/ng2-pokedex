import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'feet'
})
export class FeetPipe implements PipeTransform {
  private _types = { 'cm': 0.01, 'dm': 0.1, 'm': 1 };
  private _feetPerMeter: number = 3.28084;
  private _inchesPerFeet: number = 12;

  transform(value: number, type: string): string {
    let meters = this.getMeters(value, type),
        feet = meters * this._feetPerMeter,
        roundedFeet = Math.floor(feet),
        inches = Math.round((feet - roundedFeet) * this._inchesPerFeet);
    return `${roundedFeet}' ${_.padStart(inches.toString(), 2, '0')}"`;
  }

  getMeters(value: number, type: string): number {
    let conversion = this._types[type];
    if (conversion == null) {
       throw new Error('Could not find type');
    } else {
      return value * conversion;
    }
  }
}

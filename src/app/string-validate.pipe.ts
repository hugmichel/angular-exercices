import {Pipe, PipeTransform} from '@angular/core';

/*
 * Validate a string
 * Takes a string argument (required)
 * Usage:
 *   value | stringValidate
 * Example:
 *   {{ 109 | stringValidate }}
 *   return 'validated'
*/
@Pipe({
  name: 'stringValidate'
})
export class StringValidatePipe implements PipeTransform {
  transform(value: string): any {
    if (!Number.isInteger(Number(value))) return 'the inserted text is not an integer';
    const isTooShort = value.length < 3;
    const doesNotContains9 = value.indexOf('9') === -1;
    if (isTooShort && doesNotContains9) return 'the inserted text is too short and it does not contain a 9'
    if (isTooShort) return 'the inserted text is too short';
    if (doesNotContains9) return 'the inserted text does not contain a 9';
    return 'validated';
  }

}

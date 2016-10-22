import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.replace(/\b\w/g, l => l.toUpperCase());
      /*
        \b matches word boundary
        \w matches [a-zA-Z0-9]
      */
    }
    return value;
  }
}

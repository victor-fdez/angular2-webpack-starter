import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removedashes'})
export class RemoveDashesPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.replace(/[\-\_]/g, l => ' ');
    }
    return value;
  }
}

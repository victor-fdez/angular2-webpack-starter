import { Pipe, PipeTransform } from '@angular/core';

import { Category } from '../category';

@Pipe({name: 'filterCategories'})
export class FilterCategoriesPipe implements PipeTransform {
  transform(value: Category[], term: string): Category[] {
    if ( term !== '' ) {
      return value.filter(category => category.name.match(new RegExp(term, 'i')));
    }
    else
    {
      return value;
    }
  }
}

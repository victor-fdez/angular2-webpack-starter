import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from '../category.ts';

@Injectable()
export class CategoriesService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = '/domain-categories/';

  constructor(private http: Http) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(this.handleError);
  }

  toggleCategory(category: Category): Promise<Category> {
    console.log(category);
    let op = (category.set ? 'unset' : 'set');
    const url = `${this.baseUrl}${category.name}/${op}`;
    return this.http.put(url, {})
      .toPromise()
      .then(response => response.json() as Category)
      .catch(this.handleError);
   }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

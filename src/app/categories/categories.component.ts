import { Component } from '@angular/core';

import { CategoryToggleComponent } from '../categoryToggle';
import { Category } from '../category';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'categories',
  providers: [
    CategoriesService
  ],
  styleUrls: [ './categories.component.css' ],
  templateUrl: './categories.component.html'
})

export class CategoriesComponent {
  categories: Category[];
  searchTerm: string;

  constructor(private categoriesS: CategoriesService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.searchTerm = '';
  }

  getCategories(): void {
    this.categoriesS
        .getCategories()
        .then(categories => this.categories = categories);
  }

}

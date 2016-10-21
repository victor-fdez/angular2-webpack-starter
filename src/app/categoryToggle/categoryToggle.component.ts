import { Component, Input } from '@angular/core';

import { Category } from '../category';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'category-toggle',
  providers: [
    CategoriesService
  ],
  styleUrls: [ './categoryToggle.component.css' ],
  template: `
  <button
     mdl-button
     mdl-button-type="raised"
     mdl-colored="{{ category.set ? 'accent' : '' }}"
     mdl-ripple
     (click)="toggleCategory()">
    {{ category.set ? "Unset" : "Set" }}
  </button>
  `
})

export class CategoryToggleComponent {
  @Input("category") category: Category;

  constructor(private categoriesS: CategoriesService) {
  }

  ngOnInit(): void {
  }

  toggleCategory(): void {
  console.log(this.category);
    this.categoriesS
        .toggleCategory(this.category)
        .then(category => this.category = category);
  }

}

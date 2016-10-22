import { Component, Input } from '@angular/core';

import { Category } from '../category';
import { CategoriesService } from '../categories/categories.service';

import { MdlSnackbarService } from 'angular2-mdl';

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

  constructor(private categoriesS: CategoriesService,
    private mdlSnackbarService: MdlSnackbarService) {
  }

  ngOnInit(): void {
  }

  toggleCategory(): void {
  console.log(this.category);
    this.categoriesS
        .toggleCategory(this.category)
        .then(category => {
          const catName = category.name.replace(/\b\w/g, l => l.toUpperCase());
          const msg = `Category ${catName} is ${(category.set ? 'set' : 'unset')}`;
          this.mdlSnackbarService.showSnackbar({
            message: msg
          });
          this.category = category
        });
  }

}

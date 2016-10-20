import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';


import { CategoriesComponent } from './categories';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
// { path: '',      component: HomeComponent },
  { path: '',      component: CategoriesComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: 'add', component: CategoryAddComponent
  },
  {
    path: ':id', component: CategoryDetailComponent,
  },
  {
    path: '', component: CategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

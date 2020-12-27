import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddComponent } from './users/add/add.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {
    path: 'users/:id', component: UsersComponent,
    // path: 'users', redirectTo: 'user-list',
    children: [
      {path: 'add', component: AddComponent},
      {path: 'detail/:id', component: UserDetailComponent}
    ]
  },
  {path: 'contact-us', component: ContactUsComponent},
  {
    path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

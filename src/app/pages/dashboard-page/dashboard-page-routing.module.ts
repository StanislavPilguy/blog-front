import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {DashboardPageComponent} from "./dashboard-page.component";
import {PostsComponent} from "./components/posts/posts.component";
import {UsersComponent} from "./components/users/users.component";
import {RolesComponent} from "./components/roles/roles.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent, children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        loadChildren: () => {
          return import('../category/category.module').then(m => m.CategoryModule)
        }
      },
      {
        path: 'create-category',
        loadChildren: () => {
          return import('../create-category-page/create-category-page.module').then(m => m.CreateCategoryPageModule)
        },
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }

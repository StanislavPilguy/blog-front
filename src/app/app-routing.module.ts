import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => {
      return import('./pages/home-page/home-page.module').then(m => m.HomePageModule);
    }
  },
  {
    path: 'about-us',
    loadChildren: () => {
      return import('./pages/about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
    }
  },
  {
    path: 'schedule',
    loadChildren: () => {
      return import('./pages/schedule-page/schedule-page.module').then(m => m.SchedulePageModule);
    }
  },
  {
    path: 'gallery',
    loadChildren: () => {
      return import('./pages/gallery-page/gallery-page.module').then(m => m.GalleryPageModule);
    }
  },
  {
    path: 'blog',
    loadChildren: () => {
      return import('./pages/blog-page/blog-page.module').then(m => m.BlogPageModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bikes',
    component: BikeListComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'dvds',
    component: DvdListComponent
  },
  {
    path: 'food',
    component: FoodListComponent
  },
  {
    path: 'laptops',
    component: LaptopListComponent
  },
  {
    path: 'toys',
    component: ToyListComponent
  },
  {
    path: '404',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

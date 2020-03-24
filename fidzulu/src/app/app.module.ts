import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiUrlInterceptorService } from './routing-utils/api-url-interceptor.service';
import { BikeComponent } from './bike-list/bike/bike.component';
import { FoodComponent } from './food-list/food/food.component';
import { BookComponent } from './book-list/book/book.component';
import { DvdComponent } from './dvd-list/dvd/dvd.component';
import { LaptopComponent } from './laptop-list/laptop/laptop.component';
import { ToyComponent } from './toy-list/toy/toy.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TeamComponent } from './team/team.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    FoodComponent,
    BookComponent,
    DvdComponent,
    LaptopComponent,
    ToyComponent,
    BikeListComponent,
    BookListComponent,
    DvdListComponent,
    FoodListComponent,
    LaptopListComponent,
    ToyListComponent,
    NavComponent,
    HomeComponent,
    ErrorPageComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

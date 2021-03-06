import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipeContainerComponent } from './components/swipe-container/swipe-container.component';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { MaterialModule } from './modules/material-module';

import { MovieService } from './services/movie.service';
@NgModule({
  declarations: [
    AppComponent,
    SwipeContainerComponent,
    SwipeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

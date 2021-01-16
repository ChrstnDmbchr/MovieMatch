import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipeContainerComponent } from './components/swipe-container/swipe-container.component';
import { SwipeCardsComponent } from './components/swipe-cards/swipe-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SwipeContainerComponent,
    SwipeCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

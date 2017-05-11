import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RestService } from './services/rest/rest.service';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsListItemComponent } from './components/cards-list-item/cards-list-item.component';

import { MainComponent } from './components/main/main.component';
import { AppPageComponent } from './components/app-page/app-page.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardsListItemComponent,
    MainComponent,
    AppPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

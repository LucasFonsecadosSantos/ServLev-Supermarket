import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  
  TemplateComponent,
  HeaderComponent,
  FooterComponent

} from './template';
import {

  PresentationComponent,
  TeaserPresentationComponent,
  ContactComponent,
  CardsPresentationComponent,
  LocationComponent

} from './components';
import {

  CardsService,
  PresentationService

} from './services';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    CardsPresentationComponent,
    ContactComponent,
    LocationComponent,
    TeaserPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CardsService,
    PresentationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

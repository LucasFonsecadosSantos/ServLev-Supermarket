import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

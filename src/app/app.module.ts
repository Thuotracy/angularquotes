import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { from } from 'rxjs';
import { DatePassedPipe } from './date-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DatePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

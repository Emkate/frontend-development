import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesSearchComponent } from './components/series-search/series-search.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SeriesDetailsComponent,
    SeriesSearchComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

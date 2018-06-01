import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeriesService } from './services/series.service';


@NgModule({
  declarations: [
    AppComponent,
    SeriesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

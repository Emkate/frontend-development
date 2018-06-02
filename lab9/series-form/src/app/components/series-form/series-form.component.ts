import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Series } from '../../models/series';
import { SeriesService } from '../../services/series.service';



@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss']
})
export class SeriesFormComponent implements OnInit {

  seriesList: Array<Series> = [];

  seriesForm: FormGroup;
  title: AbstractControl;
  startYear: AbstractControl;
  finishYear: AbstractControl;
  seasons: AbstractControl;

  constructor(
    fb: FormBuilder,
    private _seriesService: SeriesService
  ) {

    this.seriesForm = fb.group({
      'title': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2)
      ])],
      'startYear': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        this.numberValidator
      ])],
      'finishYear': ['', Validators.compose([
        Validators.maxLength(4),
        Validators.minLength(4),
        this.numberValidator
      ])],
      'seasons': ['', []]
    });

    this.title = this.seriesForm.controls.title;
    this.startYear = this.seriesForm.controls.startYear;
    this.finishYear = this.seriesForm.controls.finishYear;
    this.seasons = this.seriesForm.controls.seasons;

    _seriesService.getSeries().subscribe(items => {
      this.seriesList = items;
    });
  }

  ngOnInit() {
  }

  submitForm(value: Series) {
    if (this.seriesForm.valid) {
      const newSeries = new Series(value.title, value.startYear, value.finishYear, value.seasons);
      this._seriesService.addSeries(newSeries);
      this._seriesService.getSeries().subscribe(items => {
        this.seriesList = items;
      });
    }
  }

  numberValidator (control: FormControl) {
    if (!/^\d+$/.test(control.value)) {
      return {
        'notANumber': true
      };
    }
  }

}

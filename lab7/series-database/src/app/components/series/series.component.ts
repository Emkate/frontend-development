import { Component, OnInit } from '@angular/core';
import { Series } from '../../class/series';
import { SERIES } from '../../class/mock-series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: Series = {
    id: 1,
    name: 'The Sopranos',
    startYear: 1999,
    seasons: 6,
    finishYear: 2007
  };

  seriesList = SERIES;
  selectedSeries: Series;

  constructor() { }

  ngOnInit() {
  }

  onSelect(series: Series): void {
    this.selectedSeries = series;
  }

}

import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  public _series: Series[];

  constructor() {
    this._series = [
      new Series('Breaking Bad', 2008, 2012, 4),
      new Series('Tabu', 2008, 2012, 4),
      new Series('Sopranos', 1999, 2008, 6),
      new Series('Daredevil', 2014, 2016, 2),
      new Series('Game of Thrones', 2011, 2018, 7),
      new Series('Vikings', 2008, 2012, 4),
      new Series('Boardwalk Empire', 2011, 2015, 4),
      new Series('Better call Saul!', 2011, 2014, 2)
    ]
  }

  ngOnInit() {
  }

}

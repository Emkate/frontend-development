import { Injectable } from '@angular/core';
import { Series } from '../models/series';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SeriesService {
  seriesList: Array<Series>;

  constructor() {
    this.seriesList = [
      new Series('Breaking Bad', 2008, 2012, 4),
      new Series('Tabu', 2008, 2012, 4),
      new Series('Sopranos', 1999, 2008, 6),
      new Series('Daredevil', 2014, 2016, 2),
      new Series('Game of Thrones', 2011, 2018, 7),
      new Series('Vikings', 2008, 2012, 4),
      new Series('Boardwalk Empire', 2011, 2015, 4),
      new Series('Better call Saul!', 2011, 2014, 2)
    ];
  }

  getSeries(): Observable<Array<Series>> {
    return Observable.of(this.seriesList.sort((a: Series, b: Series) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    }));
  }

  addSeries(series: Series) {
    this.seriesList.push(series);
  }
}

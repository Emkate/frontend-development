import { Injectable } from '@angular/core';
import { Series } from '../model/series.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SeriesService {

  constructor() { }

  private seriesList = [
    new Series( 1, 'Breaking Bad', 2008, 2012, 4, 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.'),
    new Series( 2, 'Tabu', 2008, 2012, 4, ''),
    new Series( 3, 'Sopranos', 1999, 2008, 6, ''),
    new Series( 4, 'Daredevil', 2014, 2016, 2, ''),
    new Series( 5, 'Game of Thrones', 2011, 2018, 7, 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.'),
    new Series( 6, 'Vikings', 2008, 2012, 4, ''),
    new Series( 7, 'Boardwalk Empire', 2011, 2015, 4, ''),
    new Series( 8, 'Better call Saul!', 2011, 2014, 2, '')
  ];

  getSeriesList(settings): Observable<Series[]> {
    return Observable.of(this.seriesList);
  }

  getOneSeries(seriesId): Observable<Series> {
    return Observable.of(this.seriesList.find((series) => {
      return series.id === Number(seriesId);
    }));
  }


}

import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../model/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  private seriesList: Series[] = [];

  constructor(private seriesService: SeriesService) {
    seriesService.getSeriesList({}).subscribe((seriesList) => {
      this.seriesList = seriesList;
    });
  }

  ngOnInit() {
  }

}

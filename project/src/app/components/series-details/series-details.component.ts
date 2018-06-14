import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Series } from '../../model/series.model';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  private seriesData: Series;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getSeriesData(params.id);
    });
   }

  ngOnInit() {
  }

  getSeriesData(seriesId) {
    this.seriesService.getOneSeries(seriesId).subscribe((seriesData) => {
      this.seriesData = seriesData;
    });
  }
}

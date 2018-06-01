import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../../class/series';


@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {
  @Input() series: Series;
  constructor() { }

  ngOnInit() {
  }

}

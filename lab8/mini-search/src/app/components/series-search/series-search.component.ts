import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Series } from '../../models/series';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss']
})
export class SeriesSearchComponent implements OnInit {

  @Input() seriesList: Array<Series>;
  searchInput: FormControl = new FormControl();
  searchResults: Array<Series> = [];

  constructor(

  ) {
    console.log(this.seriesList);
  }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchResults = this.seriesList.filter((seriesItem) => {
        return seriesItem.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    });
  }

}

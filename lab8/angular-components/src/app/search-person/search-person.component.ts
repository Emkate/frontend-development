import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from '../model/person';
import { PersonsComponent } from '../persons/persons.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  searchControl = new FormControl();
  searchItems: string[] = [];
  personList: Person[];

  constructor() {
    this.searchControl.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(
      searchTerm => this.searchItems.push(searchTerm)
    );
   }

   filterPersons (term) {
    //  return PersonsComponent.persons;        //TODO :: make search of persons
   }

  ngOnInit() {
  }

}

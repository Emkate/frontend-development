import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  public persons: Person[];
  selectedPerson: Person;

  constructor() {
    this.persons = [new Person('Bolek'), new Person('Lolek'), new Person('Tola')];
  }

  ngOnInit() {
    console.log(this.persons);
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
    console.log(this.selectedPerson);
  }

  detailsChanged() {
    console.log('Children changed');
  }

}

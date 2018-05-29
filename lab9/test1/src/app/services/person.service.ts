import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
// import { of } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  persons: Person[];

  constructor() { 
    this.persons = [
      new Person('Bolek', 1990),
      new Person('Lolek', 1992),
      new Person('Tola', 1994)
    ]
  }

  getPersons (): Observable<Person[]> {
    // return this.persons;
    return Observable.of(this.persons);
  }

  addPerson (newPerson: Person) {
    this.persons.push(newPerson);
  }

}

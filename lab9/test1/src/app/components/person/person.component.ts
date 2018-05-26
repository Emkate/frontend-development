import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person.model';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;
  persons: Observable<Person>[];

  constructor(
    fb: FormBuilder,
    private _personService: PersonService
  ) {
    this.myForm = fb.group({
      'imie': ['Dawej swoje imie', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(2),
        this.myImieValidator
      ])],
      'rokUr': ['Dawej rok urodzenia', Validators.compose([
        Validators.required
      ])]
    });

    this.imie = this.myForm.controls.imie;
    this.rokUr = this.myForm.controls.rokUr;
    _personService.getPersons().subscribe(person => {
      console.log('Nowa osoba');
    });
   }

  ngOnInit() {
  }

  mySubmit(formValue: any) {
    const person = new Person(this.imie.value, this.rokUr.value);
    this._personService.addPerson(person);
    console.log('Całkowita liczba ziomkuw: ', this._personService.getPersons());
    this._personService.getPersons().subscribe(person => {
      console.log('Nowa osoba');
    });
  }

  myImieValidator (control: FormControl) {
    if (control.value.match(/^Bol/i)) {
      return {
        'bolekValue': true
      };
    }
  }

}

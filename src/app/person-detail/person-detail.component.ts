import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person }         from '../Person';
import { PersonService }  from '../person.service';

@Component({
  selector: 'app-Person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: [ './person-detail.component.css' ]
})
export class PersonDetailComponent implements OnInit {
  @Input() Person: Person;

  constructor(
    private route: ActivatedRoute,
    private PersonService: PersonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PersonService.getPerson(id)
      .subscribe(Person => this.Person = Person);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.PersonService.updatePerson(this.Person)
      .subscribe(() => this.goBack());
  }
}
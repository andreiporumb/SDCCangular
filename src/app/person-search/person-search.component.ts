import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-Person-search',
  templateUrl: './person-search.component.html',
  styleUrls: [ './person-search.component.css' ]
})
export class PersonSearchComponent implements OnInit {
  Persones$: Observable<Person[]>;
  private searchTerms = new Subject<string>();

  constructor(private PersonService: PersonService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.Persones$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.PersonService.searchPersones(term)),
    );
  }
}

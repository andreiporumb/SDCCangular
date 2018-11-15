import { Component, OnInit } from '@angular/core';

import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-Persones',
  templateUrl: './persones.component.html',
  styleUrls: ['./persones.component.css']
})
export class PersonesComponent implements OnInit {
  Persones: Person[];

  constructor(private PersonService: PersonService) { }

  ngOnInit() {
    this.getPersones();
  }

  getPersones(): void {
    this.PersonService.getPersones()
    .subscribe(Persones => this.Persones = Persones);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.PersonService.addPerson({ name } as Person)
      .subscribe(Person => {
        this.Persones.push(Person);
      });
  }

  delete(Person: Person): void {
    this.Persones = this.Persones.filter(h => h !== Person);
    this.PersonService.deletePerson(Person).subscribe();
  }

}

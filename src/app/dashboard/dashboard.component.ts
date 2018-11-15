import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  Persones: Person[] = [];

  constructor(private PersonService: PersonService) { }

  ngOnInit() {
    this.getPersones();
  }

  getPersones(): void {
    this.PersonService.getPersones()
      .subscribe(Persones => this.Persones = Persones.slice(1, 5));
  }
}


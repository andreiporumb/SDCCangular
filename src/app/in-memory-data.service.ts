//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './Person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements  {
  createDb() {
    const Persones = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {Persones};
  }

 
  genId(Persones: Person[]): number {
    return Persones.length > 0 ? Math.max(...Persones.map(Person => Person.id)) + 1 : 11;
  }
}

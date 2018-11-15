import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './Person';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PersonService {

  private PersonesUrl = 'https://jsonplaceholder.typicode.com/todos';  

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPersones (): Observable<Person[]> {
    return this.http.get<Person[]>(this.PersonesUrl)
      .pipe(
        tap(_ => this.log('GET Persones from Consent Engine')),
        catchError(this.handleError('getPersones', []))
      );
  }

  
  getPersonNo404<Data>(id: number): Observable<Person> {
    const url = `${this.PersonesUrl}/?id=${id}`;
    return this.http.get<Person[]>(url)
      .pipe(
        map(Persones => Persones[0]), 
        tap(h => {
          const outcome = h ? `fetched from Consent` : `did not find`;
          this.log(`${outcome} Person id=${id}`);
        }),
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }

 
  getPerson(id: number): Observable<Person> {
    const url = `${this.PersonesUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetchedfrom Consent Person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  
  searchPersones(term: string): Observable<Person[]> {
    if (!term.trim()) {
     
      return of([]);
    }
    return this.http.get<Person[]>(`${this.PersonesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Persones matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPersones', []))
    );
  }

 

  
  addPerson (Person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonesUrl, Person, httpOptions).pipe(
      tap((Person: Person) => this.log(`added Person w/ id=${Person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  
  deletePerson (Person: Person | number): Observable<Person> {
    const id = typeof Person === 'number' ? Person : Person.id;
    const url = `${this.PersonesUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Person id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  
  updatePerson (Person: Person): Observable<any> {
    return this.http.put(this.PersonesUrl, Person, httpOptions).pipe(
      tap(_ => this.log(`updated Person id=${Person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      
      console.error(error); 

      
      this.log(`${operation} failed: ${error.message}`);

     
      return of(result as T);
    };
  }

  
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }
}

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PersonDetailComponent }  from './person-detail/person-detail.component';
import { PersonesComponent }      from './persones/persones.component';
import { PersonSearchComponent }  from './person-search/person-search.component';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

   
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonesComponent,
    PersonDetailComponent,
    MessagesComponent,
    PersonSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



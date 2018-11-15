import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonesComponent } from './persones.component';

describe('PersonesComponent', () => {
  let component: PersonesComponent;
  let fixture: ComponentFixture<PersonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

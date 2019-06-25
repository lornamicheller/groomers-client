import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEmbeddedPage } from './calendar-embedded.page';

describe('CalendarEmbeddedPage', () => {
  let component: CalendarEmbeddedPage;
  let fixture: ComponentFixture<CalendarEmbeddedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEmbeddedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEmbeddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

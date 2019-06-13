import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomersAvailabilityPage } from './groomers-availability.page';

describe('GroomersAvailabilityPage', () => {
  let component: GroomersAvailabilityPage;
  let fixture: ComponentFixture<GroomersAvailabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomersAvailabilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomersAvailabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

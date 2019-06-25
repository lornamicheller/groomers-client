import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardPage } from './add-credit-card.page';

describe('AddCreditCardPage', () => {
  let component: AddCreditCardPage;
  let fixture: ComponentFixture<AddCreditCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreditCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

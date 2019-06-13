import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressReceiverPage } from './address-receiver.page';

describe('AddressReceiverPage', () => {
  let component: AddressReceiverPage;
  let fixture: ComponentFixture<AddressReceiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressReceiverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressReceiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

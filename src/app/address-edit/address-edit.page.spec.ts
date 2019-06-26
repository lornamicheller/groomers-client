import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEditPage } from './address-edit.page';

describe('AddressEditPage', () => {
  let component: AddressEditPage;
  let fixture: ComponentFixture<AddressEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

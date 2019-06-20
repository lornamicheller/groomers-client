import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFormPage } from './facebook-form.page';

describe('FacebookFormPage', () => {
  let component: FacebookFormPage;
  let fixture: ComponentFixture<FacebookFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

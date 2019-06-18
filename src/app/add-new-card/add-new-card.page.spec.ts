import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCardPage } from './add-new-card.page';

describe('AddNewCardPage', () => {
  let component: AddNewCardPage;
  let fixture: ComponentFixture<AddNewCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

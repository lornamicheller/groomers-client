import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOrdersPage } from './cards-orders.page';

describe('CardsOrdersPage', () => {
  let component: CardsOrdersPage;
  let fixture: ComponentFixture<CardsOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

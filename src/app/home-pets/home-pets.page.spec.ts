import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePetsPage } from './home-pets.page';

describe('HomePetsPage', () => {
  let component: HomePetsPage;
  let fixture: ComponentFixture<HomePetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

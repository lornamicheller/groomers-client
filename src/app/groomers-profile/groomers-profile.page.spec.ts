import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomersProfilePage } from './groomers-profile.page';

describe('GroomersProfilePage', () => {
  let component: GroomersProfilePage;
  let fixture: ComponentFixture<GroomersProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomersProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomersProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

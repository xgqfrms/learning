/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockdataComponent } from './mockdata.component';

describe('MockdataComponent', () => {
  let component: MockdataComponent;
  let fixture: ComponentFixture<MockdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

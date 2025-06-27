/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UncommonPageComponent } from './uncommon-page.component';

describe('UncommonPageComponent', () => {
  let component: UncommonPageComponent;
  let fixture: ComponentFixture<UncommonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncommonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

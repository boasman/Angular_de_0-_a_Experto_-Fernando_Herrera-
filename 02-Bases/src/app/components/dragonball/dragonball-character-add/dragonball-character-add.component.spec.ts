/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragonballCharacterAddComponent } from './dragonball-character-add.component';

describe('DragonballCharacterAddComponent', () => {
  let component: DragonballCharacterAddComponent;
  let fixture: ComponentFixture<DragonballCharacterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonballCharacterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballCharacterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

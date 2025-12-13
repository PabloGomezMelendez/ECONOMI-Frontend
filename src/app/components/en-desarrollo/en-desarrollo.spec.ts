import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnDesarrollo } from './en-desarrollo';

describe('EnDesarrollo', () => {
  let component: EnDesarrollo;
  let fixture: ComponentFixture<EnDesarrollo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnDesarrollo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnDesarrollo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

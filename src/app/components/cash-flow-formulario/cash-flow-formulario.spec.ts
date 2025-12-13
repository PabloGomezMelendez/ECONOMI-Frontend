import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowFormulario } from './cash-flow-formulario';

describe('CashFlowFormulario', () => {
  let component: CashFlowFormulario;
  let fixture: ComponentFixture<CashFlowFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashFlowFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

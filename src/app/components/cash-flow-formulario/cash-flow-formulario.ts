
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-cash-flow-formulario',
  imports: [ReactiveFormsModule , Navbar, Footer],
  templateUrl: './cash-flow-formulario.html',
  styleUrl: './cash-flow-formulario.scss',
})
export class CashFlowFormulario
  implements OnInit {
  cashFlowForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cashFlowForm = this.fb.group({
      proyecto: ['', [Validators.required, Validators.minLength(3)]],
      periodo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      ingresos: this.fb.array([]),
      gastos: this.fb.array([]),
      proyecciones: this.fb.group({
        ingresosEsperados: ['', [Validators.required, Validators.min(0)]],
        gastosEsperados: ['', [Validators.required, Validators.min(0)]]
      })
    });
  }

  get ingresos(): FormArray {
    return this.cashFlowForm.get('ingresos') as FormArray;
  }

  get gastos(): FormArray {
    return this.cashFlowForm.get('gastos') as FormArray;
  }

  agregarIngreso() {
    this.ingresos.push(this.fb.group({
      fuente: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', Validators.required],
      metodoPago: ['', Validators.required],
      categoria: ['', Validators.required],
      comentarios: ['']
    }));
  }

  agregarGasto() {
    this.gastos.push(this.fb.group({
      concepto: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', Validators.required],
      formaPago: ['', Validators.required],
      categoria: ['', Validators.required],
      comentarios: ['']
    }));
  }

  submitForm() {
    if (this.cashFlowForm.valid) {
      console.log('Datos del Cash Flow:', this.cashFlowForm.value);
      alert('Formulario enviado correctamente');
    } else {
      alert('Por favor, completa todos los campos requeridos');
    }
  }


}

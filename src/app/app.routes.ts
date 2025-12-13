import { Inicio } from './components/inicio/inicio';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Error404 } from './components/error404/error404';
import { CashFlow } from './components/cash-flow/cash-flow';
import { CashFlowFormulario } from './components/cash-flow-formulario/cash-flow-formulario';
import { EnDesarrollo } from './components/en-desarrollo/en-desarrollo';

export const routes: Routes = [
  {
    path:'cash-flow-formulario',
    component: CashFlowFormulario,
  },
  {
    path:'cash-flow',
    component: CashFlow,
  },
  {
    path: 'desarrollo',
    component: EnDesarrollo,
  },
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: '',
    component: Home,
  },
  {
    path: '**',
    component: Error404
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

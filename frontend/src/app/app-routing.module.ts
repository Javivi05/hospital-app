import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListaComponent } from './pacientes/pacientes-lista/pacientes-lista.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesListaComponent },
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { UrgenciasComponent } from './components/pages/urgencias/urgencias.component';
import { GinecologiaComponent } from './components/pages/ginecologia/ginecologia.component';
import { PacientesComponent } from './components/pages/pacientes/pacientes.component';
import { ObstetriciaComponent } from './components/pages/obstetricia/obstetricia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'obstetricia', component: ObstetriciaComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'ginecologia', component: GinecologiaComponent},
  {path: 'urgencias', component: UrgenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';


export const routes: Routes = [
  { path: 'formulario-alumno', component: AlumnoComponent },
  { path: '', redirectTo: '/formulario-alumno', pathMatch: 'full' }
];

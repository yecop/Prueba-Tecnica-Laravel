import { Component } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  alumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombre_padre: '',
    nombre_madre: '',
    grado: '',
    seccion: '',
    fecha_ingreso: ''
  };

  alumnos: any[] = [];
  grado: string = '';
  errorMessage: string = '';

  constructor(private alumnoService: AlumnoService){ };
  onSubmit(){
    this.alumnoService.crearAlumno(this.alumno).subscribe(response => {
      console.log('Alumno creado:', response);
      this.resetForm();
    }); 
  }
  consultarAlumnos() {
    this.alumnoService.consultarAlumnoPorGrado(this.grado).subscribe(
      (response) => {
        this.alumnos = response;
        this.errorMessage = '';
      },
      (error) => {
        this.alumnos = [];
        this.errorMessage = error;
      }
    );
  }
  resetForm(){
    this.alumno = {
      nombre: '',
      fecha_nacimiento: '',
      nombre_padre: '',
      nombre_madre: '',
      grado: '',
      seccion: '',
      fecha_ingreso: ''
    };
  }
}

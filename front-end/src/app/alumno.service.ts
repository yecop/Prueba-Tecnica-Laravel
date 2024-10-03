import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }
  crearAlumno(alumno: any): Observable<any>{
    const headers= new HttpHeaders({'API_KEY': 'th1s1sth3k3yf0rt3st'});
    return this.http.post(`${this.apiUrl}/crear-alumno`,alumno,{headers}).pipe(
      catchError(this.handleError)
    );
  }
  consultarAlumnoPorGrado(grado:string): Observable<any>{
    const headers= new HttpHeaders({'API_KEY': 'th1s1sth3k3yf0rt3st'});
    return this.http.get(`${this.apiUrl}/consultar-alumno/${grado}`,{headers}).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse){
    if(error.status === 404){
      return throwError('No hay estudiantes para este grado');
    }else{
      return throwError('Ocurrió un eror, intenta nuevamente');
    }
  }
}

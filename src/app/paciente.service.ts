import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './Paciente';
import { Response } from './Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  public url = environment.urlApi;

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Response<Paciente[]>> {
    const urlApi = `${this.url}/pacientes`;
    return this.http.get<Response<Paciente[]>>(urlApi);
  }

  createPaciente(paciente: Paciente): Observable<Response<Paciente>> {
    const urlApi = `${this.url}/pacientes`;
    return this.http.post<Response<Paciente>>(urlApi, paciente);
    //console.log(paciente)
  }
}

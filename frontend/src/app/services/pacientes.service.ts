import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Paciente {
  id: number;
  nombre: string;
  edad: number;
  diagnostico: string;
}
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private apiUrl = '/api/pacientes';

  constructor(private http: HttpClient) {}

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }
}

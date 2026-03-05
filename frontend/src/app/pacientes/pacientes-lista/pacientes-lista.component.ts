import { Component, OnInit } from '@angular/core';
import { Paciente, PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes-lista',
  standalone: false,
  templateUrl: './pacientes-lista.component.html',
  styleUrl: './pacientes-lista.component.css'
})
export class PacientesListaComponent implements OnInit{

  pacientes: Paciente[] = [];

  constructor(private ps: PacientesService) {}

  ngOnInit(): void {
    this.ps.obtenerPacientes().subscribe(data => this.pacientes = data);
  }
}

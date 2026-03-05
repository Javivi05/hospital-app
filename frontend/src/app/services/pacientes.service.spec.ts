import { TestBed } from '@angular/core/testing';

import { PacientesService } from './pacientes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PacientesService', () => {
  let service: PacientesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacientesService]
    });
    service = TestBed.inject(PacientesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debe obtener la lista de pacientes', () => {
    const mockPacientes = [
      {id: 1, nombre: 'Ana Pérez', edad: 35, diagnostico: 'Asma'}
    ];
    service.obtenerPacientes().subscribe(pacientes => {
      expect(pacientes.length).toBe(1);
      expect(pacientes[0].nombre).toBe('Ana Pérez');
    });
    const req = httpMock.expectOne('/api/pacientes');
    expect(req.request.method).toBe('GET');
    req.flush(mockPacientes);
  });
});

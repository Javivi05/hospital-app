/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacientesListaComponent } from './pacientes-lista.component';
import { PacientesService } from '../../services/pacientes.service';
import { of } from 'rxjs';

describe('PacientesListaComponent (mocked service)', () => {
  let component: PacientesListaComponent;
  let fixture: ComponentFixture<PacientesListaComponent>;
  let mockService: any;

  beforeEach(async () => {
    mockService = {
      obtenerPacientes: () => of([
        { id: 1, nombre: 'Carlos Ruiz', edad: 42, diagnostico: 'Hipertensión' }
      ])
    };

    await TestBed.configureTestingModule({
      declarations: [PacientesListaComponent],
      providers: [{ provide: PacientesService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe mostrar un paciente simulado', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('li');
    expect(items[0].textContent).toContain('Carlos Ruiz');
  });
});
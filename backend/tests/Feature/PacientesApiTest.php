<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Paciente;

class PacientesApiTest extends TestCase
{
    use RefreshDatabase;
    public function test_api_devuelve_lista_pacientes()
    {
        // Creamos un paciente de prueba en la BD
        Paciente::create([
            'nombre' => 'Ana Pérez',
            'edad' => 35,
            'diagnostico' => 'Asma',
        ]);

        // Llamada al endpoint
        $response = $this->getJson('/api/pacientes');

        // Comprobamos status y que en el JSON aparece el nombre
        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'nombre' => 'Ana Pérez',
                 ]);
    }
}

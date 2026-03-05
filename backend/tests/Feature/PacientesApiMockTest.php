<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Paciente;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PacientesApiMockTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_pacientes_mockeada()
    {
        Paciente::factory()->create([
            'nombre'      => 'Laura Gómez',
            'edad'        => 28,
            'diagnostico' => 'Alergia'
        ]);

        $response = $this->getJson('/api/pacientes');

        $response->assertStatus(200)
                 ->assertJsonFragment(['nombre' => 'Laura Gómez']);
    }
}
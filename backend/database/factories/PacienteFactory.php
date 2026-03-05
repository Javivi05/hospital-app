<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PacienteFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nombre'      => $this->faker->name(),
            'edad'        => $this->faker->numberBetween(18, 90),
            'diagnostico' => $this->faker->word(),
        ];
    }
}
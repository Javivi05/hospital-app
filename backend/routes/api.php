<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PacienteController;

Route::get('/pacientes', [PacienteController::class, 'index']);
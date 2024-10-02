<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alumno;

class AlumnoController extends Controller
{
    public function crearAlumno(Request $request){
          $validatedData = $request->validate([
            'nombre' => 'required|string',
            'fecha_nacimiento' => 'required|date',
            'nombre_padre' => 'required|string',
            'nombre_madre' => 'required|string',
            'grado' => 'required|string',
            'seccion' => 'required|string',
            'fecha_ingreso' => 'required|date',
          ]);
          $alumno = Alumno::create($validatedData);
          return response()->json($alumno, 201);
    }
    public function consultarAlumno($idGrado){
        $alumnos = Alumno::where('grado',$idGrado)->get();
        if($alumnos->isEmpty()){
            return response()->json(['message'=>'No hay alumnos para el grado seleccionado'],404);
        }
        return response()->json($alumnos,200);
    }
}

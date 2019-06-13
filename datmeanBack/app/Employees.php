<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Employees extends Model
{
    //manda notificación al usuario si algo va mal
    use Notifiable;

    //definimos tabla a la que atacar
    public $table="employees";
    //definimos campos que llenaremos;
    protected $fillable = [
        'name', 'lastname', 'age', 'gender', 'id_departament','contract_date'
    ];



    //relacionamos tabla empleado con tabla departamento la invocaremos en index o get EmployeesController
    // con este tipo de funcion navegamos x las tablas como si fuera inner join
    public function departament(){
        return $this->belongsTo('App\Departament','id_departament');
    }

}

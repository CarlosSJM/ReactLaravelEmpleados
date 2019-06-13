<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Departament extends Model
{
    //manda notificación al usuario si algo va mal
    use Notifiable;

    //definimos tabla a la que atacar
    public $table="departament";
    //definimos campo que llenaremos;
    protected $fillable = ['departament_name'];

}

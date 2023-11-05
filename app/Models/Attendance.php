<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'enrol_student_id',
        'status_id',
        'date',
    ];


    public function studentAttendance()
    {
        return $this -> belongsTo(EnrolStudent::class);
    }


}

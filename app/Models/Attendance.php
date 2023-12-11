<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'enrol_student_id',
        'status_id',
        'attendance_time',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);  
    }

    public function student()  
    {
        return $this->belongsTo(Student::class, EnrolStudent::class);
    }

    public function enrols()  
    {
        return $this->belongsTo(EnrolStudent::class);
    }

    
}

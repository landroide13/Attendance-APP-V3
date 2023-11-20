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
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);  
    }

    public function student()
    {
        return $this->hasOneThrough(Student::class, EnrolStudent::class);
    }

    
}

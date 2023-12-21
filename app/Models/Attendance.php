<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_id',
        'student_id',
        'status_id',
        'attendance_time',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);  
    }

    public function student()  
    {
        return $this->belongsTo(Student::class);
    }

    public function lecture()
    {
        return $this-> belongsTo(Lecture::class);
    }
    
}

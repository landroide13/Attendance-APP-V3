<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'parent_email',
        'parent_phone',
        'parent_name',
        'parent_2_name',
        'parent_2_email',
        'parent_2_phone',
        'gender',
        'school_thoughts',
        'student_studying',
        'aditional_info',
        'birth_date'
    ];

    // public function attendance()  
    // { 
    //     return $this->hasMany(Attendance::class);
    // }

    public function lectures()
    {
        return $this->belongsToMany(Lecture::class, 'lecture_students', 'student_id', 'lecture_id');
    }


}

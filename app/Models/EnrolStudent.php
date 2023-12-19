<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnrolStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_tutor_id',
        'student_id' 
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function lecture_tutor()
    {
        return $this->belongsTo(lecture_tutor::class);
    }


    public function attendance()      
    {
        return $this->hasMany(Attendance::class); 
    }

    


}

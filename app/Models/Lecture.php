<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_name',
        'description',
        'term_id'
    ];

    public function attendance()
    {
        return $this->hasMany(Attendance::class); 
    } 

    public function students()
    {
        return $this-> belongsToMany(Student::class, 'lecture_students');
    }

    public function tutors()  
    {
        return $this-> belongsToMany(User::class, 'lecture_users');
    }

    public function term()
    {
        return $this->belongsTo(Term::class);  
    }
    


}

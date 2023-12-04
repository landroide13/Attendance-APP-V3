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
    ];

    public function attendance()  
    { 
        return $this->hasManyThrough(Attendance::class, EnrolStudent::class);
    }

    public function subjects()
    {
        return $this->hasMany(EnrolStudent::class);
    }
}

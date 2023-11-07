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
        'gender',
    ];

    public function attendance()
    {
        return $this->hasManyThrough(Attendance::class, EnrolStudent::class);
    }
}

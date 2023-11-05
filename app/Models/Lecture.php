<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_name',
        'user_id'
    ];


    public function tutor()
    {
        return $this->belongsTo(User::class);
    }

}

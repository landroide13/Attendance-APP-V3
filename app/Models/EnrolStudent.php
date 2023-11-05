<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnrolStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_id',
        'user_id'
    ];

    public function studentEnrol()
    {
        return $this->belongsTo(User::class);
    }


}

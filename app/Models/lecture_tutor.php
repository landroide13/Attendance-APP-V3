<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lecture_tutor extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecture_id',
        'user_id' 
    ];

    public function tutor()
    {  
        return $this->belongsTo(User::class);
    }

    public function lecture()
    {
        return $this->belongsTo(Lecture::class);
    }

}

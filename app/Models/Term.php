<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    use HasFactory;

    protected $fillable = ['year', 'term'];

    public function lectures()
    {
        return $this->hasMany(Lecture::class);
    }
}

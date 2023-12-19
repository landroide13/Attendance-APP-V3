<?php

namespace App\Services;

use App\Models\Lecture;

class LectureService
{
    public function store(array $details):Lecture
    {
        $lecture = Lecture::create([
            'lecture_name' => $details['lecture_name'],
            'decription' => $details['decription'],
        ]);

        return $lecture;   
    }


}
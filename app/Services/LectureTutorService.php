<?php

namespace App\Services;

use App\Models\lecture_tutor as Lecture;

class LectureTutorService
{
    public function store(array $details):Lecture
    {
        $lectureTutor = Lecture::create([
            'lecture_id' => $details['lecture_id'],
            'user_id' => $details['user_id'],
        ]);

        return $lectureTutor;   
    }


}
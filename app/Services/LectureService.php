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

    public function getLectureStudents($lecture_id)
    {
        $lecture = Lecture::with('students')->findOrFail($lecture_id);
        return $lecture->students;
    }


}
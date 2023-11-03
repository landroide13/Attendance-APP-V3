<?php

namespace App\Services;

use App\Models\Lecture;

class LectureService
{
    public function store(array $details, string $id):Lecture
    {
        $lecture = Lecture::create([
            'lecture_name' => $details['lecture_name'],
            'user_id' => $id,
        ]);

        return $lecture;
    }


}
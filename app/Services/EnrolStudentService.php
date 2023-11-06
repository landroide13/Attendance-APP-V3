<?php

namespace App\Services;

use App\Models\EnrolStudent;

class EnrolStudentService
{

    public function store(array $details):EnrolStudent
    {
        $enrol = EnrolStudent::create([
            'lecture_id' => $details['lecture_id'],
            'user_id' => $details['user_id'],
        ]);

        return $enrol;
    }

    public function update(array $details):EnrolStudent
    {
        $enrol = EnrolStudent::update([
            'lecture_id' => $details['lecture_id'],
            'user_id' => $details['user_id'],
        ]);

        return $enrol;
    }
}
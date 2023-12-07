<?php

namespace App\Services;

use App\Models\TutorHour;

class TutorHourService
{
    public function store(array $details)
    {
        $tutorHour = TutorHour::create([
            'user_id' => $details['user_id'],
            'date' => $details['date'],
            'hours' => $details['hours'],
        ]);

        return $tutorHour;   
    }


}
<?php

namespace App\Services;

use App\Models\Attendance;

class AttendanceService
{
    public function store(array $details):Attendance
    {
        $attendance = Attendance::create([
            'enrol_student_id' => $details['enrol_student_id'],
            'status_id' => $details['status_id'],
            'date' => $details['date'],
        ]);
   
        return $attendance;
    }

    

}
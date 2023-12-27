<?php

namespace App\Services;

use App\Models\Attendance;

class AttendanceService
{
    public function store(array $details):Attendance
    {
        $attendance = Attendance::create([
            'student_id' => $details['student_id'],
            'lecture_id' => $details['lecture_id'],
            'status_id' => $details['status_id'],
            'attendance_time' => $details['attendance_time'] 
        ]);
   
        return $attendance;
    }

    public function update(array $details, Attendance $attendance):Attendance
    {
        $attendance -> update([  
            'student_id' => $details['student_id'],
            'lecture_id' => $details['lecture_id'],
            'status_id' => $details['status_id'],
            'attendance_time' => $details['attendance_time']
        ]);
   
        return $attendance;
    }

    

}
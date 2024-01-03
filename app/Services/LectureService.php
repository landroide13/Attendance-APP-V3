<?php

namespace App\Services;

use App\Models\User;
use App\Models\Lecture;

class LectureService
{
    public function store(array $details):Lecture
    {
        $lecture = Lecture::create([
            'lecture_name' => $details['lecture_name'],
            'description' => $details['description'],
            'term_id' => $details['term_id'],
        ]);

        return $lecture;   
    }

    public function getLectureStudents($lecture_id)
    {
        $lecture = Lecture::with('students')->findOrFail($lecture_id);
        return $lecture->students;
    } 

    public function assignTutorInToLecture($id, $lecture_id) 
    { 
        $tutor = User::findOrFail($id);

        $tutor -> lectures()->attach($lecture_id);
    }

    public function unassignTutor($id, $lecture_id) 
    {
        $tutor = User::findOrFail($id);

        $tutor ->lectures()->detach($lecture_id);
    }
    
    


}
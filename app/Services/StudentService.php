<?php

namespace App\Services;

use App\Models\Student;

class StudentService
{

    public function store(array $userDetails):Student
    {
        $student = Student::create([
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'parent_email' => $userDetails['parent_email'],
            'parent_phone' => $userDetails['parent_phone'],
            'parent_name' => $userDetails['parent_name'],
            'parent_2_name' => $userDetails['parent_2_name'],
            'parent_2_phone' => $userDetails['parent_2_phone'],
            'parent_2_email' => $userDetails['parent_2_email'],
            'gender' => $userDetails['gender'],
            'school_thoughts' => $userDetails['school_thoughts'],
            'student_studying' => $userDetails['student_studying'],
            'aditional_info' => $userDetails['aditional_info'],
            'birth_date' => $userDetails['birth_date'],
        ]);

        return $student;
    }

    public function update(array $userDetails, string $id):Student
    {
        $updateStudent = Student::findOrFail($id);

        $updateStudent -> update([
            'id' => $id,
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'parent_email' => $userDetails['parent_email'],
            'parent_phone' => $userDetails['parent_phone'],
            'gender' => $userDetails['gender'],
            'school_thoughts' => $userDetails['school_thoughts'],
            'student_studying' => $userDetails['student_studying'],
            'aditional_info' => $userDetails['aditional_info'],
            'birth_date' => $userDetails['birth_date'],
        ]);  

        return $updateStudent;
    }

    public function enrollStudentInToLecture($id, $lecture_id)
    { 
        $student = Student::findOrFail($id);

        $student->lectures()->attach($lecture_id);
    }

    public function unenrollStudent($id, $lecture_id) 
    {
        $student = Student::findOrFail($id);

        $student->lectures()->detach($lecture_id);
    }




}
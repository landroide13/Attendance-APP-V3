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
            'gender' => $userDetails['gender'],
        ]);

        return $student;
    }

    public function update(array $userDetails, string $id):Student
    {
        $student = Student::update([
            'id' => $id,
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'parent_email' => $userDetails['parent_email'],
            'parent_phone' => $userDetails['parent_phone'],
            'gender' => $userDetails['gender'],
        ]);

        return $student;
    }



}
<?php

namespace App\Services;

use App\Models\Student;
use App\Jobs\CreateStudent;
use App\Jobs\DeleteStudent;
use App\Jobs\UpdateStudent;

class StudentService
{

    public function store(array $userDetails)
    {
        CreateStudent::dispatch($userDetails);
    }

    public function updateStudent(array $userDetails, Student $student):Student
    { 
        UpdateStudent::dispatch($userDetails, $student);

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

    public function deleteStudent(Student $student)
    {
        DeleteStudent::dispatch($student);
    }



}
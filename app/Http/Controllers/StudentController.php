<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Services\StudentService;   
use App\Http\Requests\StudentUpdate;
use App\Http\Requests\StudentRequest;
use App\Http\Resources\StudentResource;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return StudentResource::collection(Student::latest()->get());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $studentRequest, StudentService $studentService)
    {
        $newStudent = $studentService ->store($studentRequest->validated());

        return response('Student created successfully', 203);
    }

    public function enrollInLecture(Request $request, $id, StudentService $studentService) 
    {
        
        $studentService->enrollStudentInToLecture($id, $request->lecture_id);  

        return response()->json(['message' => 'Student enrolled in subjects successfully']);

    }  

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return new StudentResource($student);
    }

    /**
     * Update the specified resource in storage. 
     */
    public function update(StudentService $studentService, StudentUpdate $request, Student $student)
    {
        $update = $studentService -> updateStudent($request->validated(), $student);

        return response('Student Updated Successfully', 203);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student, StudentService $studentService)
    {
       $studentService -> deleteStudent($student);

       return response('Student Deleted Successfully', 203);
    }
}

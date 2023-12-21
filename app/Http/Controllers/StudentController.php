<?php

namespace App\Http\Controllers;

use App\Models\Student as StudentModel;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Services\StudentService;   
use App\Http\Requests\StudentRequest;
use App\Http\Resources\StudentResource;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return StudentResource::collection(StudentModel::latest()->get());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $studentRequest, StudentService $studentService)
    {
        $newStudent = $studentService -> store($studentRequest -> validated());

        return response(new StudentResource($newStudent), 203);
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
    public function update(StudentRequest $studentRequest, StudentResource $studentResource , Student $student)
    {
        $edit = $studentService -> update($studentRequest -> validated(), $student -> id);

        return response(new StudentResource($edit), 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}

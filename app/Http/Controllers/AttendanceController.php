<?php

namespace App\Http\Controllers;

use App\Models\Attendance as AttendanceModel;
use Illuminate\Http\Request;
use App\Services\AttendanceService;   
use App\Http\Requests\Attendance as AttendanceRequest;
use App\Http\Resources\Attendance as AttendanceResource;

class AttendanceController extends Controller
{
    public function __construct()
    {
        ///$this->middleware('auth:sanctum')->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AttendanceResource::collection(AttendanceModel::latest()->paginate(6));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AttendanceRequest $attendanceRequest, AttendanceService $attendanceService)
    {
        $newAttendance = $attendanceService -> store($attendanceRequest -> validated());

        return response(new AttendanceResource($newAttendance), 203);
    }

    /**
     * Display the specified resource.
     */
    public function show(AttendanceModel $attendance)
    {
        return new AttendanceResource($attendance);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

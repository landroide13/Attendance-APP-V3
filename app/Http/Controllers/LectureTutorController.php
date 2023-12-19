<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\LectureTutorService;
use App\Http\Requests\LectureTutor as LectureRequest;
use App\Http\Resources\LectureTutor as LectureResource;
use App\Models\lecture_tutor as Lecture;

class LectureTutorController extends Controller
{
    public function index()
    {
        return LectureResource::collection(Lecture::all());
       // return Lecture::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LectureRequest $lectureRequest, LectureTutorService $lectureService)
    {
        $newLectureTutor = $lectureService -> store($lectureRequest -> validated());

        return response(new LectureResource($newLectureTutor), 203);
    }

    public function show(Lecture $lecture)
    {
        return new LectureResource($lecture);
    }

    public function destroy(string $id)
    {
        //
    }
}

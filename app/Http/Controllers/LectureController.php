<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\LectureService;
use App\Http\Requests\Lecture as LectureRequest;
use App\Http\Resources\Lecture as LectureResource;
use App\Models\Lecture as LectureModel;

class LectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new LectureResource(Lecture::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LectureRequest $lectureRequest, LectureService $lectureService)
    {
        $newLecture = $lectureService -> store($lectureRequest -> valiadted());

        return new LectureResource($newLecture);
    }

    /**
     * Display the specified resource.
     */
    public function show(LectureModel $lecture)
    {
        return new LectureResource($lecture);
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

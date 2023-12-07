<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TutorHourService;
use App\Http\Resources\TutorHour as TutorHourResource;
use App\Http\Requests\TutorHour as TutorHourRequest;

use App\Models\TutorHour as TutorHourModel;

class TutorHourController extends Controller
{
    public function index()
    {
        return TutorHourResource::collection(TutorHourModel::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TutorHourService $tutorHourService, TutorHourRequest $tutorHourRequest)
    {
        $newHour = $tutorHourService -> store($tutorHourRequest -> validated());

        return response(new TutorHourResource($newHour), 203);
    }
}

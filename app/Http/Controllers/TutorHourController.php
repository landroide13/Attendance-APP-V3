<?php

namespace App\Http\Controllers;

use App\Models\TutorHour;
use Illuminate\Http\Request;
use App\Services\TutorHourService;
use App\Http\Resources\TutorHour as TutorHourResource;
use App\Http\Requests\TutorHour as TutorHourRequest;



class TutorHourController extends Controller
{
    public function index()
    { 
        return TutorHourResource::collection(TutorHour::latest()->get());
        //return TutorHour::all();
    }

    public function store(TutorHourService $tutorHourService, TutorHourRequest $tutorHourRequest)
    {
        $newHour = $tutorHourService -> store($tutorHourRequest -> validated());

        return response(new TutorHourResource($newHour), 203);
    }

    public function show(HourModel $hrs)
    {
        return new TutorHourResource($hrs);
    }
}

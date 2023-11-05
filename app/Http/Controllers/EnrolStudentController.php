<?php

namespace App\Http\Controllers;

use App\Models\EnrolStudent as EnrolStudentModel;
use Illuminate\Http\Request;
use App\Services\EnrolStudent as EnrolStudentServices;
use App\Http\Requests\EnrolStudent as EnrolStudentRequest;
use App\Http\Resources\EnrolStudent as EnrolStudentResource;

class EnrolStudentController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EnrolStudentResource::collection(EnrolStudentModel::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EnrolStudentRequest $request, EnrolStudentServices $enrolService)
    {
        $newEnrol = $enrolService -> store($request -> validated());

        return response(new EnrolStudentResource($newEnrol), 203);
    }

    /**
     * Display the specified resource.
     */
    public function show(EnrolStudentModel $enrol)
    {
        return new EnrolStudentResource($enrol);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EnrolStudentRequest $request, EnrolStudentServices $enrolService, EnrolStudentModel $enrolModel)
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

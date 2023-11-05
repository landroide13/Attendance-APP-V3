<?php

namespace App\Http\Controllers;

use App\Models\Status as StatusModel;
use Illuminate\Http\Request;
use App\Services\Status as StatusService;   
use App\Http\Requests\Status as StatusRequest;
use App\Http\Resources\Status as StatusResource;

class StatusController extends Controller
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
        return StatusResource::collection(StatusModel::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StatusRequest $statusRequest, StatusService $statusService)
    {
        $newStatus = $statusService -> store($statusRequest -> validated());

        return response(new StatusResource($newStatus), 203);
    }

    /**
     * Display the specified resource.
     */
    public function show(StatusModel $status)
    {
        return new StatusResource($status);
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

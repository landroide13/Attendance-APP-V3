<?php

namespace App\Http\Controllers;

use App\Models\Role as RoleModel;
use Illuminate\Http\Request;
use App\Services\RoleService;   
use App\Http\Requests\Role as RoleRequest;
use App\Http\Resources\Role as RoleResource;

class RoleController extends Controller
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
        return RoleResource::collection(RoleModel::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $roleRequest, RoleService $roleService)
    {
        $newRole = $roleService -> store($roleRequest -> validated());

        return response(new RoleResource($newRole), 203);
    }

    /**
     * Display the specified resource.
     */
    public function show(RoleModel $role)
    {
        return new RoleResource($role);
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

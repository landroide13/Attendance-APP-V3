<?php

namespace App\Http\Controllers;

use App\Models\User as UserModel;
use Illuminate\Http\Request;
use App\Services\UserServices;   
use App\Http\Requests\User as UserRequest;
use App\Http\Resources\User as UserResource;

class UserController extends Controller
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
        return UserResource::collection(UserModel::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserServices $userService, UserRequest $userRequest)
    {
        $newUser = $userService -> store($userRequest -> validated());

        return response(new UserResource($newUser), 203);
    }

    /**
     * Display the specified resource.
     */
    public function show(UserModel $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $updateRequest, UserServices $userService, UserModel $user)
    {
        $editUser = $userService -> update($updateRequest -> validated(), $user->role_id);

        return response(new UserResource($editUser), 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

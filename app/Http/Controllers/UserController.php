<?php

namespace App\Http\Controllers;

use App\Models\User as UserModel;
use Illuminate\Http\Request;
use App\Services\UserServices;
use App\Http\Requests\User as UserRequest;
use App\Http\Resources\User as UserResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new UserResource(UserModel::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, UserServices $userService, UserRequest $userRequest)
    {
        $newUser = $userService -> store($request -> validated());

        return new UserResource($newUser);
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

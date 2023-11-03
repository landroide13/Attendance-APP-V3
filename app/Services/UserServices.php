<?php

namespace App\Services;

use App\Models\User;

class UserService
{

    public function store(array $userDetails, string $id):User
    {
        $user = User::create([
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'email' => $userDetails['email'],
            'password' => bcrypt($userDetails['password']),
            'role_id' => $id,
        ]);

        return $user;
    }

    public function update(array $userDetails, string $roleId):User
    {
        $user = User::update([
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'email' => $userDetails['email'],
            'password' => bcrypt($userDetails['password']),
            'role_id' => $roleId,
        ]);

        return $user;
    }



}
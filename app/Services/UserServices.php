<?php

namespace App\Services;

use App\Models\User;

class UserService
{

    public function store(array $userDetails):User
    {
        $user = User::create([
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'email' => $userDetails['email'],
            'password' => bcrypt($userDetails['password']),
            'role_id' => $userDetails['role_id'],
        ]);

        return $user;
    }

    public function update(array $userDetails):User
    {
        $user = User::update([
            'first_name' => $userDetails['first_name'],
            'last_name' => $userDetails['last_name'],
            'email' => $userDetails['email'],
            'password' => bcrypt($userDetails['password']),
            'role_id' => $userDetails['role_id'],
        ]);

        return $user;
    }



}
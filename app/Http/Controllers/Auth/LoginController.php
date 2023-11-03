<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Login;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Login $login)
    {
        $credentials = $login -> validated();

        if(!Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']]))
        {
            return response(['Incorrect Credentials'], 422);
        }

        $user = Auth::user();

        $token = $user -> createToken($user -> id) -> plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
}

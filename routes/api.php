<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TutorHourController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\EnrolStudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});      

Route::apiResource('users', UserController::class);

Route::apiResource('students', StudentController::class);

Route::apiResource('lectures', LectureController::class);
Route::apiResource('attendances', AttendanceController::class);
Route::apiResource('status', StatusController::class);
Route::apiResource('enrol', EnrolStudentController::class);
Route::apiResource('roles', RoleController::class);
Route::apiResource('tutorHours', TutorHourController::class);


Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout']);


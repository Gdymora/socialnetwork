<?php

use App\Http\Controllers\Pages\UserHome\UserHomeController;
use App\Http\Controllers\PostMediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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
use App\Http\Controllers\AuthApiController;

/* Route::post('register', [AuthApiController::class, 'register']);
Route::post('login', [AuthApiController::class, 'login']);
Route::post('refresh', [AuthApiController::class, 'refresh']);
Route::post('logout', [AuthApiController::class, 'logout']);
 */
Route::controller(AuthApiController::class)->group(function () {
    Route::post('register', [AuthApiController::class, 'register']);
    Route::post('login', [AuthApiController::class, 'login']);
    Route::post('refresh', [AuthApiController::class, 'refresh']);
    Route::post('logout', [AuthApiController::class, 'logout']);
});

//Route::get('me', [UserHomeController::class, 'me']);
// Authenticated only API
// We use auth api here as a middleware so only authenticated user who can access the endpoint
// We use group so we can apply middleware auth api to all the routes within the group
Route::middleware('auth:api')->group(function() {
   Route::get('index-api', [UserHomeController::class, 'indexApi']);
});

//http://127.0.0.1:8000/api/login
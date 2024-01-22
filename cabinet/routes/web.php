<?php

use App\Http\Controllers\Pages\Frends\FrendsController;
use App\Http\Controllers\Pages\Message\MessageController;
use App\Http\Controllers\Pages\Dashboard\DashboardController;  
use App\Http\Controllers\Pages\Galery\GaleryController;
use App\Http\Controllers\Pages\UserHome\UserHomeController;
use App\Http\Controllers\Pages\WorkShop\WorkShopController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    if (!Auth::check()) {
        return redirect('/login');
    } else {
        return redirect('/dashboard');
    }
});

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 */
Route::get('/dashboard',  [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/user-home',  [UserHomeController::class, 'index'])->middleware(['auth', 'verified'])->name('user-home');
Route::get('/message',  [MessageController::class, 'index'])->middleware(['auth', 'verified'])->name('message');
Route::get('/galery',  [GaleryController::class, 'index'])->middleware(['auth', 'verified'])->name('galery');
Route::get('/frends',  [FrendsController::class, 'index'])->middleware(['auth', 'verified'])->name('frends');
Route::get('/work-shop',  [WorkShopController::class, 'index'])->middleware(['auth', 'verified'])->name('work-shop');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
});

require __DIR__.'/auth.php';

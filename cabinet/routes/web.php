<?php
use App\Http\Controllers\LinkPreviewController;
use App\Http\Controllers\Pages\Friends\FriendsController;
use App\Http\Controllers\Pages\Friends\ProfileFriendController;
use App\Http\Controllers\Pages\Friends\FollowController;
use App\Http\Controllers\Pages\Friends\UnFollowController;
use App\Http\Controllers\Pages\Message\MessageController;
use App\Http\Controllers\Pages\Dashboard\DashboardController;
use App\Http\Controllers\Pages\Galery\GaleryController;
use App\Http\Controllers\Pages\UserHome\FileController;
use App\Http\Controllers\Pages\UserHome\UserHomeController;
use App\Http\Controllers\Pages\WorkShop\WorkShopController;
use App\Http\Controllers\Pages\Post\PostMediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\UserAboutMeController;
use App\Http\Controllers\UserFileController;
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

// Враховуючи, що {url} - це параметр, який може містити слеші
Route::get('/link-preview/{url}', [LinkPreviewController::class, 'show'])
    ->where('url', '.*'); // Дозволяє URL містити будь-які символи, включно із слешами
Route::get('/redirect', [RedirectController::class, 'redirectToExternalSite'])->name('external.redirect');

Route::get('/media/{type}/{filename}', function ($type, $filename) {
    if (!in_array($type, ['images', 'videos', 'image', 'video'])) {
        abort(404);
    }

    $filePath = "posts/{$type}/" . $filename;

    if (!Storage::disk('local')->exists($filePath)) {
        abort(404);
    }

    $file = Storage::disk('local')->get($filePath);
    $fileType = Storage::disk('local')->mimeType($filePath);

    return response($file, 200)->header("Content-Type", $fileType);
})->where('filename', '.*');

/* Route::get('/user-file/{type}/{filename}', function ($type, $filename) {
    if (!in_array($type, ['images', 'videos', 'music'])) {
        abort(404);
    }

    $filePath = "usersfile/{$type}/" . $filename;
    if (!Storage::disk('local')->exists($filePath)) {
        abort(404);
    }

    $file = Storage::disk('local')->get($filePath);
    $fileType = Storage::disk('local')->mimeType($filePath);

    return response($file, 200)->header("Content-Type", $fileType);
})->where('filename', '.*'); */

Route::get('/user-file/{type}/{filename}', [FileController::class, 'sendFile'])->where('filename', '.*');
Route::middleware('auth')->group(function () {
    //friend
    Route::get('/profile-friend/{id}', [ProfileFriendController::class, 'index'])->middleware(['auth', 'verified'])->name('profile-friend');
    // file
    // Route::post('/posts', [PostMediaController::class, 'store'])->name('posts');
    Route::post('/user-file', [UserFileController::class, 'store'])->name('user-file');
    // pages
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/user-home', [UserHomeController::class, 'index'])->middleware(['auth', 'verified'])->name('user-home');
    Route::get('/message', [MessageController::class, 'index'])->middleware(['auth', 'verified'])->name('message');
    Route::get('/galery', [GaleryController::class, 'index'])->middleware(['auth', 'verified'])->name('galery');

    Route::get('/friends', [FriendsController::class, 'index'])->middleware(['auth', 'verified'])->name('friends');
    Route::patch('/friends/{id}/follow', FollowController::class)->middleware(['auth', 'verified']);
    Route::patch('/friends/{id}/unfollow', UnFollowController::class)->middleware(['auth', 'verified']);
    Route::resources([
        /*  'photos' => PhotoController::class, */
        'posts' => PostMediaController::class,
        'user-file' => UserFileController::class
    ]);
    Route::post('/delete-user-files', [UserFileController::class, 'delete']); // Для множинних файлів, ідентифікатори передаються у тілі запиту

    Route::get('/work-shop', [WorkShopController::class, 'index'])->middleware(['auth', 'verified'])->name('work-shop');
    //
    Route::patch('/user-about-me', [UserAboutMeController::class, 'update'])->name('user-about-me.update');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
});

require __DIR__ . '/auth.php';

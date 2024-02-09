<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RedirectController extends Controller
{
    public function redirectToExternalSite(Request $request)
    {
        if ($request->has('url')) {
            $url = $request->input('url');
            return redirect()->away($url);
        } else {
            // Якщо URL відсутній, повернення помилки або перенаправлення на дефолтну сторінку
            // Наприклад:
            // return response()->json(['error' => 'URL not provided'], 400);
            // або
            // return redirect()->route('default.route');
        }
    }
}

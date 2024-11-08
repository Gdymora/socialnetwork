<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <!-- Scripts -->
        @routes
        @viteReactRefresh
       {{-- @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"]) --}}
       @vite(['resources/js/app.tsx'])
       @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>

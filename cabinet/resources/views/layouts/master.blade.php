<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <title>@yield('title') - Laravel Admin & Dashboard Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta content="Tailwind Admin & Dashboard Template" name="description" />
    <meta content="" name="Themesbrand" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('build/images/favicon.ico') }}" />
    <!-- css -->
    <!-- Styles -->
    
    {{-- @include('layouts.head-css') --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" /> 
</head>

<body data-mode="light" data-sidebar-size="lg">
    <!-- content -->
    @yield('content')

    @vite(['resources/js/app.js'])
</body>
<footer>
    <div class="container">
        <p>&copy; 2023 Соціальна мережа</p>
    </div>
</footer>

</html>

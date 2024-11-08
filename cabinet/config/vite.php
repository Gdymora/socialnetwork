<?php

return [
    'configs' => [
        'default' => [
            'entrypoints' => [
                'ssr' => 'resources/js/ssr.tsx',
                'paths' => [
                    'resources/css/app.css',
                    'resources/css/style.css',
                    'resources/css/galery.css',
                    'resources/css/profile.css',
                    'resources/css/users.css',
                    'resources/css/workshop.css',
                    'resources/js/app.tsx',
                ],
            ],
            'dev_server' => [
                'enabled' => true,
                'url' => env('VITE_URL', 'http://localhost:5173'),
                'ping_before_using_manifest' => true,
                'ping_url' => null,
                'ping_timeout' => 1,
            ],
        ],
    ],
];
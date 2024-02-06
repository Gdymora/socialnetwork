#!/bin/bash
# start.sh
# Запускаємо Laravel
cd /var/www/socialnetwork/cabinet/
php artisan serve --host=0.0.0.0 --port=8000 &

# Запускаємо NPM Watch
npm run dev
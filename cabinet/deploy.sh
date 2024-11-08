#!/bin/bash

echo "Starting deployment process..."

# Pull latest changes
git pull origin main

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install Node.js dependencies
npm ci

# Type checking
echo "Running TypeScript type checking..."
npx tsc --noEmit

# Build assets
echo "Building assets..."
npm run build

# Clear Laravel caches
php artisan config:clear
php artisan cache:clear
php artisan route:cache
php artisan view:cache

# Optimize Laravel
php artisan optimize

# Run migrations
php artisan migrate --force

# Set correct permissions
echo "Setting permissions..."
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
chmod -R 775 public/build

# Clear opcache if installed
if php -m | grep -q "opcache"; then
    echo "Clearing OPCache..."
    php -r "opcache_reset();"
fi

# Restart services
echo "Restarting services..."
sudo systemctl restart php8.2-fpm
sudo systemctl reload nginx

echo "Deployment completed!"

# chmod +x deploy.sh
# ./deploy.sh
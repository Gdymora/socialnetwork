<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema; 
class AddVisibilityAndStatusToPosts extends Migration
{
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('visibility')->default('public'); // Може бути 'public', 'private', 'friends', тощо
            $table->string('status')->default('active'); // Може бути 'active' або 'blocked'
            $table->json('user_access')->nullable(); // Масив ідентифікаторів користувачів, які мають доступ до поста       
        });
    }

    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('visibility');
            $table->dropColumn('status');
            $table->dropColumn('user_access');
        });
    }
}


<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFriendsTable extends Migration
{
    public function up()
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // Зв'язок з користувачем
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('friend_id'); // Зв'язок з другом (користувачем)
            $table->foreign('friend_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('friends');
    }
}


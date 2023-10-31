<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->timestamps();
            $table->unsignedBigInteger('user_id');  
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('post_id');  
            $table->foreign('post_id')->references('id')->on('posts');
        });
    }

    public function down()
    {
        Schema::dropIfExists('comments');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
            $table->unsignedBigInteger('author_id'); // Зв'язок з автором
            $table->foreign('author_id')->references('id')->on('users');
            $table->integer('likes')->default(0);
            $table->integer('share')->default(0);
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}

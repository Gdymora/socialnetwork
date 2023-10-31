<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdditionalUserData extends Migration
{
    public function up()
    {
        Schema::create('user_additional_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('education')->nullable();
            $table->string('birthplace')->nullable();
            $table->text('hobbies')->nullable();
            $table->text('occupations')->nullable();
            $table->timestamps();
        });
        
        Schema::table('user_additional_data', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_additional_data');
    }
}

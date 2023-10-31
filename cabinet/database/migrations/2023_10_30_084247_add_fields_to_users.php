<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToUsers extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('last_name')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('gender')->nullable();
            $table->string('profile_image_url')->nullable();
            $table->string('status')->default('activated');
            $table->string('role')->default('user');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('last_name');
            $table->dropColumn('birthdate');
            $table->dropColumn('gender');
            $table->dropColumn('profile_image_url');
            $table->dropColumn('status');
            $table->dropColumn('role');
        });
    }
}

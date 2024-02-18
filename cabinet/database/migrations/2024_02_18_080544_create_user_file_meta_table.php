<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_file_meta', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_file_id')->comment('ID медіа з таблиці user_file');
            $table->string('key')->comment('Назва метатега, наприклад, "alt", "title", "duration" тощо');
            $table->text('value')->comment('Значення метатега');
            $table->foreign('user_file_id')->references('id')->on('user_file')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_file_meta');
    }
};

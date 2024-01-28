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
        Schema::create('user_files', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->string('title')->nullable();
            $table->string('description')->nullable();  
            $table->enum('visible', ['public', 'private', 'friends']);
            $table->json('friends')->nullable();       
            $table->enum('type', ['image', 'video', 'music', 'docx', 'pdf', 'other']);
            $table->string('userfilable_type');
            $table->unsignedBigInteger('userfilable_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_files');
    }
};

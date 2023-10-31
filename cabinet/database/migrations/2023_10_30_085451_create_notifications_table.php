<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // Зв'язок з користувачем
            $table->foreign('user_id')->references('id')->on('users');
            $table->text('notification_text'); // Текст сповіщення
            $table->timestamp('created_at'); // Дата створення
            $table->boolean('is_read')->default(false); // Статус сповіщення (прочитано / не прочитано)
        });
    }

    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}


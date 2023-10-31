<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id'); // Зв'язок з відправником (користувачем)
            $table->foreign('sender_id')->references('id')->on('users');
            $table->unsignedBigInteger('receiver_id'); // Зв'язок з отримувачем (користувачем)
            $table->foreign('receiver_id')->references('id')->on('users');
            $table->text('message_text'); // Текст повідомлення
            $table->timestamp('sent_at'); // Дата відправлення
        });
    }

    public function down()
    {
        Schema::dropIfExists('messages');
    }
}


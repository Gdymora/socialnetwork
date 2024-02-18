<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFileMeta extends Model
{
    use HasFactory;

    /**
     * Отримати медіа, до якого належить цей метатег.
     */
    public function userfile()
    {
        return $this->belongsTo(UserFile::class);
    }

}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFile extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'title', 'description', 'visible', 'type', 'userfilable_type', 'userfilable_id'];

    public function userfilable()
    {
        return $this->morphTo();
    }

    /**
     * Отримати метадані для медіа.
     */
    public function meta()
    {
        return $this->hasMany(UserFileMeta::class);
    }
}
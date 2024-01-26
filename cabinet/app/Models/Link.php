<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    protected $fillable = ['title', 'description', 'image', 'url', 'linkable_type', 'linkable_id'];

    public function linkable()
    {
        return $this->morphTo();
    }

}

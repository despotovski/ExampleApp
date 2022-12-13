<?php

namespace App\Domain\Customer\Models;

use App\Domain\Country\Models\Country;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
        'address',
        'postcode',
        'city',
        'state',
        'country_id',
        'phone',
        'email',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}

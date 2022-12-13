<?php

namespace App\Domain\Invoice\Models;

use App\Domain\Customer\Models\Customer;
use App\Domain\Invoice\InvoiceItems;
use App\Domain\Product\Models\Product;
use App\Traits\CarbonDefaultDateFormat;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use CarbonDefaultDateFormat;

    public const  THIRTY_DAYS = 30;
    public const  SIXTY_DAYS = 60;
    public const  NINETY_DAYS = 90;

    protected $fillable = [
        'invoice_number',
        'invoice_date',
        'customer_id',
        'date_of_pay',
        'product_id',
        'type_of_pay',
        'tax_percent',
        'total'
    ];

    protected $dates = [
        'invoice_date',
        'date_of_pay'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function items()
    {
        return $this->hasMany(InvoiceItems::class);
    }
}

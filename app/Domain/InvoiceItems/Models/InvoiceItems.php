<?php

namespace App\Domain\InvoiceItems\Models;

use App\Domain\Invoice\Models\Invoice;
use Illuminate\Database\Eloquent\Model;

class InvoiceItems extends Model
{
    protected $table = 'invoice_items';

    protected $fillable = [
        'invoice_id',
        'name',
        'quantity',
        'price',
        'amount',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}

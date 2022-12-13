<?php

namespace App\Domain\Invoice\Routes;

class InvoiceReactLinks
{
    public static function getRoutes()
    {
        return [
            'invoice' => [
                'index' => route('invoice.index'),
                'get' => route('invoice.get'),
                'create' => route('invoice.create'),
                'store' => route('invoice.store'),
                'show' => route('invoice.show', ['invoice' => '%invoice%']),
                'edit' => route('invoice.edit', ['invoice' => '%invoice%']),
                'update' => route('invoice.update', ['invoice' => '%invoice%']),
                'print' => route('downloadPDF', ['invoice' => '%invoice%'])
            ]
        ];
    }
}

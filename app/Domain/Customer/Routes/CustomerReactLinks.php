<?php

namespace App\Domain\Customer\Routes;

class CustomerReactLinks
{
    public static function getRoutes()
    {
        return [
            'customer' => [
                'index' => route('customer.index'),
                'get' => route('customer.get'),
                'create' => route('customer.create'),
                'store' => route('customer.store'),
                'show' => route('customer.show', ['customer' => '%customer%']),
                'edit' => route('customer.edit', ['customer' => '%customer%']),
                'update' => route('customer.update', ['customer' => '%customer%']),
                'destroy' => route('customer.destroy', ['customer' => '%customer%']),
            ]
        ];
    }
}

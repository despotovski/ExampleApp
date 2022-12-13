<?php

namespace App\Domain\Product\Routes;

class ProductReactLinks
{
    public static function getRoutes()
    {
        return [
            'product' => [
                'index' => route('product.index'),
                'get' => route('product.get'),
                'create' => route('product.create'),
                'store' => route('product.store'),
                'show' => route('product.show', ['product' => '%product%']),
                'edit' => route('product.edit', ['product' => '%product%']),
                'update' => route('product.update', ['product' => '%product%']),
                'destroy' => route('product.destroy', ['product' => '%product%']),
            ]
        ];
    }
}

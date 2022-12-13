<?php

namespace App\Helpers;

use App\Domain\Customer\Routes\CustomerReactLinks;
use App\Domain\Invoice\Routes\InvoiceReactLinks;
use App\Domain\Product\Routes\ProductReactLinks;
use Illuminate\Support\Facades\Cache;

class ReactLinks
{
    public static function getReactLinks()
    {
        return Cache::rememberForever('react-links', function () {
            return array_merge(
                CustomerReactLinks::getRoutes(),
                ProductReactLinks::getRoutes(),
                InvoiceReactLinks::getRoutes()
            );
        });
    }
}

<?php

namespace App\Domain\Product\BLL\Product;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface ProductBLLInterface extends BaseBLLInterface
{
    public function getProducts();

    public function getProductOptions();
}

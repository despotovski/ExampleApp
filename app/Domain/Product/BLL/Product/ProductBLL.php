<?php

namespace App\Domain\Product\BLL\Product;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Product\DAL\Product\ProductDALInterface;

/**
 * @property ProductDALInterface DAL
 */
class ProductBLL extends BaseBLL implements ProductBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(ProductDALInterface $productDAL)
    {
        $this->DAL = $productDAL;
    }

    public function getProducts()
    {
        return $this->DAL->query()
            ->select('products.*');
    }

    public function getProductOptions()
    {
        return $this->DAL->query()
            ->get()
            ->map(function ($option) {
                return [
                    'label' => $option->name . ' ' . $option->price . ' €',
                    'value' => $option->id,
                ];
            });
    }
}

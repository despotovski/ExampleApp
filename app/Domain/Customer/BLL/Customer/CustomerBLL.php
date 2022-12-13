<?php

namespace App\Domain\Customer\BLL\Customer;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Customer\DAL\Customer\CustomerDALInterface;

/**
 * @property CustomerDALInterface DAL
 */
class CustomerBLL extends BaseBLL implements CustomerBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(CustomerDALInterface $customerDAL)
    {
        $this->DAL = $customerDAL;
    }

    public function getCustomers()
    {
        return $this->DAL->query()
            ->with('country')
            ->select('customers.*');
    }

    public function getCustomersOptions()
    {
        return $this->DAL->query()
            ->get()
            ->map(function ($option) {
                return [
                    'label' => $option->name,
                    'value' => $option->id,
                ];
            });
    }

}

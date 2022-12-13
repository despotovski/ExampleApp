<?php

namespace App\Domain\Customer\DAL\Customer;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Customer\Models\Customer;

/**
 * @property Customer model
 */
class CustomerDAL extends BaseDAL implements CustomerDALInterface
{
    public function __construct(Customer $customer)
    {
        $this->model = $customer;
    }
}

<?php

namespace App\Domain\Customer\BLL\Customer;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface CustomerBLLInterface extends BaseBLLInterface
{
    public function getCustomers();

    public function getCustomersOptions();
}

<?php

namespace App\Domain\Country\BLL\Country;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface CountryBLLInterface extends BaseBLLInterface
{
    public function getAllCountries();
}

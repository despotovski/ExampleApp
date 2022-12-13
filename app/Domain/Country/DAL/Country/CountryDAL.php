<?php

namespace App\Domain\Country\DAL\Country;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Country\Models\Country;

/**
 * @property Country model
 */
class CountryDAL extends BaseDAL implements CountryDALInterface
{
    public function __construct(Country $country)
    {
        $this->model = $country;
    }
}

<?php

namespace App\Domain\Country\BLL\Country;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\Country\DAL\Country\CountryDALInterface;

/**
 * @property CountryDALInterface DAL
 */
class CountryBLL extends BaseBLL implements CountryBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(CountryDALInterface $countryDAL)
    {
        $this->DAL = $countryDAL;
    }

    public function getAllCountries()
    {
        return $this->DAL->query()
            ->get()
            ->map(function ($option) {
                return [
                    'label' => $option->title,
                    'value' => $option->id,
                ];
            });
    }
}

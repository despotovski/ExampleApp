<?php

namespace App\Services\Translator\Excel;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Services\Translator\Excel\Sheets\ImportSheet;

class ImportExcel implements WithMultipleSheets
{
    private Collection $locales;

    public function __construct(Collection $locales)
    {
        $this->locales = $locales;
    }

    /**
     * @inheritDoc
     */
    public function sheets(): array
    {
        $sheets = [];

        foreach ($this->locales as $locale) {
            $sheets[$locale] = new ImportSheet($locale);
        }

        return $sheets;
    }
}

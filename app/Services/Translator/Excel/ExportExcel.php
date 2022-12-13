<?php

namespace App\Services\Translator\Excel;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Services\Translator\Excel\Sheets\ExportSheet;

class ExportExcel implements WithMultipleSheets
{
    use Exportable;

    protected Collection $translations;

    public function __construct(Collection $translations)
    {
        $this->translations = $translations;
    }

    /**
     * @inheritDoc
     */
    public function sheets(): array
    {
        $sheets = [];

        foreach ($this->translations as $locale => $translations) {
            $data = [];

            foreach ($translations as $key => $trans) {
                $data[] = [$key, $trans];
            }

            $sheets[] = new ExportSheet($locale, $data);
        }

        return $sheets;
    }
}

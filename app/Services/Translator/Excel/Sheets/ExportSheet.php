<?php

namespace App\Services\Translator\Excel\Sheets;

use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ExportSheet implements WithTitle, WithHeadings, FromArray
{
    private string $locale;
    private array $translations;

    public function __construct($locale, $translations)
    {
        $this->locale = $locale;
        $this->translations = $translations;
    }

    /**
     * @inheritDoc
     */
    public function title(): string
    {
        return $this->locale;
    }

    /**
     * @inheritDoc
     */
    public function array(): array
    {
        return [$this->translations];
    }

    /**
     * @inheritDoc
     */
    public function headings(): array
    {
        return ['Key', 'Translation'];
    }
}

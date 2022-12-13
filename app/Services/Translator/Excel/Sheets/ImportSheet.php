<?php

namespace App\Services\Translator\Excel\Sheets;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportSheet implements ToCollection, WithHeadingRow
{
    private string $locale;

    public function __construct($locale)
    {
        $this->locale = $locale;
    }

    /**
     * @inheritDoc
     */
    public function collection(Collection $collection)
    {
        $data = [];

        $collection->each(function ($item) use (&$data) {
            $key = $item->get('key');
            $text = $item->get('translation');
            Arr::set($data, $key, $text);
        });

        foreach ($data as $file => $values) {
            $contents = "<?php \n\n return " . var_export($values, true) . ";";
            file_put_contents(resource_path('lang/' . $this->locale . '/' . $file . '.php'), $contents);
        }
    }
}

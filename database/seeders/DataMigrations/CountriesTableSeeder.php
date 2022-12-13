<?php
namespace Database\Seeders\DataMigrations;

use App\Domain\Country\Models\Country;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['id' => 1, 'shortcode' => 'MK', 'title' => 'Macedonia'],
            ['id' => 2, 'shortcode' => 'SR', 'title' => 'Serbia'],
            ['id' => 3, 'shortcode' => 'HR', 'title' => 'Croatia'],
            ['id' => 4, 'shortcode' => 'DE', 'title' => 'Germany'],
            ['id' => 5, 'shortcode' => 'NL', 'title' => 'Holand'],
            ['id' => 6, 'shortcode' => 'BG', 'title' => 'Bulgaria'],
            ['id' => 7, 'shortcode' => 'US', 'title' => 'USA'],
        ];
        foreach ($items as $item) {
            Country::create($item);
        }
    }
}

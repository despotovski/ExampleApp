<?php
namespace Database\Seeders;

use Database\Seeders\DataMigrations\CountriesTableSeeder;
use Database\Seeders\DataMigrations\CustomersSeeder;
use Database\Seeders\DataMigrations\ProductSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountriesTableSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(CustomersSeeder::class);
    }
}
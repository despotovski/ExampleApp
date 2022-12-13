<?php
namespace Database\Seeders\DataMigrations;

use App\Domain\Product\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['id' => 1, 'name' => 'Queen - Innuendo Vinyl LP', 'price' => '29.99'],
            ['id' => 2, 'name' => 'Queen - Night at the Opera Vinyl LP', 'price' => '39.99'],
            ['id' => 3, 'name' => 'Queen - Greatest Hits || Vinyl LP', 'price' => '49.99'],
            ['id' => 4, 'name' => 'Queen - Platinum Collection 6 Vinyl', 'price' => '119.99'],
            ['id' => 5, 'name' => 'Queen - Hot Space', 'price' => '39.99'],
        ];
        foreach ($items as $item) {
            Product::create($item);
        }
    }
}

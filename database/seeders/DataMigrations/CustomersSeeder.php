<?php
namespace Database\Seeders\DataMigrations;

use App\Domain\Customer\Models\Customer;
use Illuminate\Database\Seeder;

class CustomersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                'id' => 1,
                'name' => 'John Doe',
                'address' => 'Las Vegas Boulevard',
                'postcode' => '11360',
                'city' => 'Las Vegas',
                'state' => 'Nevada',
                'country_id' => 7,
                'phone' => '267-527-1783',
                'email' => 'johndoe@gmail.com',
            ],
            [
                'id' => 2,
                'name' => 'Viktor Despotovski',
                'address' => 'Ul. Skupi 20/32',
                'postcode' => '1000',
                'city' => 'Skopje',
                'state' => 'Karpos',
                'country_id' => 1,
                'phone' => '587-527-1083',
                'email' => 'despotovskiviktor1@gmail.com',
            ]
        ];
        foreach ($items as $item) {
            Customer::create($item);
        }
    }
}

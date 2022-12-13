<?php

namespace App\Domain\Customer\Controllers;

use App\Domain\Country\BLL\Country\CountryBLLInterface;
use App\Domain\Customer\Requests\CustomerUpdateRequest;
use App\Http\Controllers\Controller;
use App\Domain\Customer\BLL\Customer\CustomerBLLInterface;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Requests\CustomerRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Inertia\ResponseFactory;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property CustomerBLLInterface customerBLL
 * @property CountryBLLInterface $countryBLL
 */
class CustomerController extends Controller
{
    public function __construct(CustomerBLLInterface $customerBLL, CountryBLLInterface $countryBLL)
    {
        $this->customerBLL = $customerBLL;
        $this->countryBLL = $countryBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Customer/Index', []);
    }

    public function get()
    {
        $customers = $this->customerBLL->getCustomers();

        return DataTables::eloquent($customers)
           ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        return inertia('Customer/Create', [
            'options' => [
                'countries' => $this->countryBLL->getAllCountries()
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomerRequest $request
     * @return RedirectResponse
     */
    public function store(CustomerRequest $request)
    {
        $customer = $request->all();
        $this->customerBLL->create($customer);

        session()->flash('success', 'Успешно креиравте купувач');
        return redirect()->route('customer.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Customer $customer
     * @return Response|ResponseFactory
     */
    public function show(Customer $customer)
    {
        return inertia('Customer/Show', [
            'customer' => $customer->load('country'),
            'options' => [
                'countries' => $this->countryBLL->getAllCountries()
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Customer $customer
     * @return Response|ResponseFactory
     */
    public function edit(Customer $customer)
    {
        return inertia('Customer/Edit', [
            'customer' => $customer->load('country'),
            'options' => [
                'countries' => $this->countryBLL->getAllCountries()
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CustomerUpdateRequest $request
     * @param Customer $customer
     * @return RedirectResponse
     */
    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $data = $request->all();
        $this->customerBLL->update($customer, $data);

        session()->flash('success', 'Успешно изменивте купувач');
        return redirect()->route('customer.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Customer $customer
     * @return JsonResponse
     */
    public function destroy(Customer $customer)
    {
        $this->customerBLL->delete($customer);

        return response()->json(['message' => 'Успешно избришавте купувач']);
    }
}

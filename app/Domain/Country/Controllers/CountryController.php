<?php

namespace App\Domain\Country\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Country\BLL\Country\CountryBLLInterface;
use App\Domain\Country\Models\Country;
use App\Domain\Country\Requests\CountryRequest;

/**
 * @property CountryBLLInterface countryBLL
 */
class CountryController extends Controller
{
    public function __construct(CountryBLLInterface $countryBLL)
    {
        $this->countryBLL = $countryBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CountryRequest $request
     */
    public function store(CountryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Country $country
     */
    public function show(Country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Country  $country
     */
    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CountryRequest $request
     * @param  Country  $country
     */
    public function update(CountryRequest $request, Country $country)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Country $country
     */
    public function destroy(Country $country)
    {
        //
    }
}

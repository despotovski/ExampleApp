<?php

namespace App\Domain\InvoiceItems\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\InvoiceItems\BLL\InvoiceItems\InvoiceItemsBLLInterface;
use App\Domain\InvoiceItems\Models\InvoiceItems;
use App\Domain\InvoiceItems\Requests\InvoiceItemsRequest;

/**
 * @property InvoiceItemsBLLInterface invoiceItemsBLL
 */
class InvoiceItemsController extends Controller
{
    public function __construct(InvoiceItemsBLLInterface $invoiceItemsBLL)
    {
        $this->invoiceItemsBLL = $invoiceItemsBLL;
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
     * @param InvoiceItemsRequest $request
     */
    public function store(InvoiceItemsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param InvoiceItems $invoiceItems
     */
    public function show(InvoiceItems $invoiceItems)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  InvoiceItems  $invoiceItems
     */
    public function edit(InvoiceItems $invoiceItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param InvoiceItemsRequest $request
     * @param  InvoiceItems  $invoiceItems
     */
    public function update(InvoiceItemsRequest $request, InvoiceItems $invoiceItems)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param InvoiceItems $invoiceItems
     */
    public function destroy(InvoiceItems $invoiceItems)
    {
        //
    }
}

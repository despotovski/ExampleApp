<?php

namespace App\Domain\Invoice\Controllers;

use App\Domain\Customer\BLL\Customer\CustomerBLLInterface;
use App\Domain\Invoice\BLL\Invoice\InvoiceBLLInterface;
use App\Domain\Invoice\Models\Invoice;
use App\Domain\Invoice\Requests\InvoiceRequest;
use App\Domain\InvoiceItems\BLL\InvoiceItems\InvoiceItemsBLLInterface;
use App\Domain\Product\BLL\Product\ProductBLLInterface;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Inertia\Response;
use Inertia\ResponseFactory;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property InvoiceBLLInterface invoiceBLL
 * @property CustomerBLLInterface $customerBLL
 * @property ProductBLLInterface $productBLL
 * @property InvoiceItemsBLLInterface $invoiceItemsBLL
 */
class InvoiceController extends Controller
{
    public function __construct(
        InvoiceBLLInterface $invoiceBLL,
        CustomerBLLInterface $customerBLL,
        ProductBLLInterface $productBLL,
        InvoiceItemsBLLInterface $invoiceItemsBLL
    ) {
        $this->invoiceBLL = $invoiceBLL;
        $this->customerBLL = $customerBLL;
        $this->productBLL = $productBLL;
        $this->invoiceItemsBLL = $invoiceItemsBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Invoice/Index', []);
    }

    public function get()
    {
        $invoices = $this->invoiceBLL->getInvoices();

        return DataTables::eloquent($invoices)
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        return inertia('Invoice/Create', [
            'options' => [
                'customers' => $this->customerBLL->getCustomersOptions(),
                'products' => $this->productBLL->getProductOptions(),
                'typeOfPay' => $this->invoiceBLL->getTypeOfPayOptions()
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param InvoiceRequest $request
     */
    public function store(InvoiceRequest $request)
    {
        $data = $request->all();
        $quantity = $data['quantity'];

        $dbInvoice = $this->invoiceBLL->query()
            ->latest()
            ->first();

        $invoice = $this->invoiceBLL->create([
            'invoice_number' => $dbInvoice ? '000' . ($dbInvoice->id + 1) : '0001',
            'invoice_date' => Carbon::parse($data['invoice_date'])->toDateString(),
            'customer_id' => $data['customer'],
            'product_id' => $data['product'],
            'type_of_pay' => $data['type_of_pay'],
            'tax_percent' => $data['tax_percent'],
            'date_of_pay' => Carbon::parse($data['date_of_pay'])->toDateString(),
        ]);

        $total = $invoice->product->price * $quantity;

        $this->invoiceBLL->update($invoice, [
            'total' => $total
        ]);

        $this->invoiceItemsBLL->create([
            'invoice_id' => $invoice->id,
            'name' => $invoice->product->name,
            'quantity' => $quantity,
            'price' => $invoice->product->price,
            'amount' => $total,
        ]);

        session()->flash('success', 'Успешно креиравте фактура');
        return redirect()->route('invoice.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Invoice $invoice
     * @return Response|ResponseFactory
     */
    public function show(Invoice $invoice)
    {
        $items = $this->invoiceItemsBLL->getInvoiceItems($invoice->id);

        return inertia('Invoice/Show', [
            'invoice' => $invoice->load(['customer', 'product']),
            'items' => $items
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Invoice $invoice
     */
    public function edit(Invoice $invoice)
    {
        $item = $this->invoiceItemsBLL->query()
            ->where('invoice_id', $invoice->id)
            ->first();

        return inertia('Invoice/Edit', [
            'invoice' => $invoice->load(['customer', 'product']),
            'quantity' => $item->quantity,
            'options' => [
                'customers' => $this->customerBLL->getCustomersOptions(),
                'products' => $this->productBLL->getProductOptions(),
                'typeOfPay' => $this->invoiceBLL->getTypeOfPayOptions()
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param InvoiceRequest $request
     * @param Invoice $invoice
     */
    public function update(InvoiceRequest $request, Invoice $invoice)
    {
        $data = $request->all();
        $quantity = $data['quantity'];

        $this->invoiceBLL->update($invoice, [
            'invoice_date' => Carbon::parse($data['invoice_date'])->toDateString(),
            'customer_id' => $data['customer'],
            'product_id' => $data['product'],
            'type_of_pay' => $data['type_of_pay'],
            'tax_percent' => $data['tax_percent'],
            'date_of_pay' => Carbon::parse($data['date_of_pay'])->toDateString(),
            'total' => intval($data['total'])
        ]);


        $total = $invoice->product->price * $quantity;

        $this->invoiceBLL->update($invoice, [
            'total' => $total
        ]);

        $this->invoiceItemsBLL->create([
            'invoice_id' => $invoice->id,
            'name' => $invoice->product->name,
            'quantity' => $quantity,
            'price' => $invoice->product->price,
            'amount' => $total,
        ]);

        session()->flash('success', 'Успешно изменивте фактура');
        return redirect()->route('invoice.index');
    }
}

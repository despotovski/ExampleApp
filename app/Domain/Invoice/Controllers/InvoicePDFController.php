<?php

namespace App\Domain\Invoice\Controllers;

use App\Domain\Customer\BLL\Customer\CustomerBLLInterface;
use App\Domain\Invoice\BLL\Invoice\InvoiceBLLInterface;
use App\Domain\Invoice\Models\Invoice;
use App\Domain\InvoiceItems\BLL\InvoiceItems\InvoiceItemsBLLInterface;
use App\Domain\Product\BLL\Product\ProductBLLInterface;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

/**
 * @property InvoiceBLLInterface invoiceBLL
 * @property CustomerBLLInterface $customerBLL
 * @property ProductBLLInterface $productBLL
 * @property InvoiceItemsBLLInterface $invoiceItemsBLL
 */
class InvoicePDFController extends Controller
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

    public function printPDF(Invoice $invoice)
    {
        $invoice = $this->invoiceBLL->query()
            ->with(['customer.country', 'product'])
            ->where('id', $invoice->id)
            ->first();

        $item = $this->invoiceItemsBLL->query()
            ->where('invoice_id', $invoice->id)
            ->first();

        $pdf = PDF::loadView('invoice', [
            'invoice' => $invoice,
            'item' => $item
        ]);
        return $pdf->download('фактура_' . $invoice->invoice_number
            . '_' . Carbon::parse($invoice->invoice_date)->toDateString() . '.pdf');
    }
}

<?php

namespace App\Domain\Invoice\BLL\Invoice;

use App\Domain\Invoice\DAL\Invoice\InvoiceDALInterface;
use App\Domain\Invoice\Models\Invoice;
use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;

/**
 * @property InvoiceDALInterface DAL
 */
class InvoiceBLL extends BaseBLL implements InvoiceBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(InvoiceDALInterface $invoiceDAL)
    {
        $this->DAL = $invoiceDAL;
    }

    public function getInvoices()
    {
        return $this->DAL->query()
            ->with(['customer', 'product'])
            ->select('invoices.*');
    }

    public function getTypeOfPayOptions()
    {
        return [
            [
                'label' => '30 дена',
                'value' => Invoice::THIRTY_DAYS
            ],
            [
                'label' => '60 дена',
                'value' => Invoice::SIXTY_DAYS
            ],
            [
                'label' => '90 дена',
                'value' => Invoice::NINETY_DAYS
            ]
        ];
    }
}

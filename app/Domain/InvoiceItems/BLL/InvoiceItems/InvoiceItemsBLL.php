<?php

namespace App\Domain\InvoiceItems\BLL\InvoiceItems;

use App\DomainUtils\BaseBLL\BaseBLL;
use App\DomainUtils\BaseBLL\BaseBLLFileUtils;
use App\Domain\InvoiceItems\DAL\InvoiceItems\InvoiceItemsDALInterface;

/**
 * @property InvoiceItemsDALInterface DAL
 */
class InvoiceItemsBLL extends BaseBLL implements InvoiceItemsBLLInterface
{
    use BaseBLLFileUtils;

    public function __construct(InvoiceItemsDALInterface $invoiceItemsDAL)
    {
        $this->DAL = $invoiceItemsDAL;
    }

    public function getInvoiceItems($invoiceId)
    {
        return $this->DAL->query()
            ->where('invoice_id', $invoiceId)
            ->first()
            ->get();
    }
}

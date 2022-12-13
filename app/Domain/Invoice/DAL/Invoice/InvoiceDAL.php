<?php

namespace App\Domain\Invoice\DAL\Invoice;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Invoice\Models\Invoice;

/**
 * @property Invoice model
 */
class InvoiceDAL extends BaseDAL implements InvoiceDALInterface
{
    public function __construct(Invoice $invoice)
    {
        $this->model = $invoice;
    }
}

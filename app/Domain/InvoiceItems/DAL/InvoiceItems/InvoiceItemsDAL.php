<?php

namespace App\Domain\InvoiceItems\DAL\InvoiceItems;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\InvoiceItems\Models\InvoiceItems;

/**
 * @property InvoiceItems model
 */
class InvoiceItemsDAL extends BaseDAL implements InvoiceItemsDALInterface
{
    public function __construct(InvoiceItems $invoiceItems)
    {
        $this->model = $invoiceItems;
    }
}

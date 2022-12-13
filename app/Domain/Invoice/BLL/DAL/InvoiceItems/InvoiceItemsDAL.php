<?php

namespace App\Domain\Invoice/BLL\DAL\InvoiceItems;

use App\DomainUtils\BaseDAL\BaseDAL;
use App\Domain\Invoice/BLL\Models\InvoiceItems;

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

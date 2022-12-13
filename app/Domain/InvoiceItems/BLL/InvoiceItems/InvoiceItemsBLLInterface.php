<?php

namespace App\Domain\InvoiceItems\BLL\InvoiceItems;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface InvoiceItemsBLLInterface extends BaseBLLInterface
{
    public function getInvoiceItems($invoiceId);
}

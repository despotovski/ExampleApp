<?php

namespace App\Domain\Invoice\BLL\Invoice;

use App\DomainUtils\BaseBLL\BaseBLLInterface;

interface InvoiceBLLInterface extends BaseBLLInterface
{
    public function getTypeOfPayOptions();

    public function getInvoices();
}

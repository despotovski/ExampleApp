<!DOCTYPE html>

<html lang="mk">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>

    <style type="text/css">

    body {
        font-family: "Inter", sans-serif;
    }
    .m-0 {
        margin: 0px;
    }
    .p-0 {
        padding: 0px;
    }
    .pt-5 {
        padding-top: 5px;
    }
    .mt-10 {
        margin-top: 10px;
    }
    .text-center {
        text-align: center !important;
    }
    .w-100 {
        width: 100%;
    }
    .w-50 {
        width: 50%;
    }
    .w-85 {
        width: 85%;
    }
    .w-15 {
        width: 15%;
    }

    .logo img {
        width: 45px;
        height: 45px;
        padding-top: 30px;
    }
    .logo span {
        margin-left: 8px;
        top: 19px;
        position: absolute;
        font-weight: bold;
        font-size: 25px;
    }
    .gray-color {
        color: #5D5D5D;
    }
    .text-bold {
        font-weight: bold;
    }
    .border {
        border: 1px solid black;
    }
    table tr, th, td {
        border: 1px solid #d2d2d2;
        border-collapse: collapse;
        padding: 7px 8px;
    }
    table tr th {
        background: #F4F4F4;
        font-size: 15px;
    }
    table tr td {
        font-size: 13px;
    }
    table {
        border-collapse: collapse;
    }
    .box-text p {
        line-height: 10px;
    }
    .float-left {
        float: left;
    }
    .total-part {
        font-size: 16px;
        line-height: 12px;
    }
    .total-right p {
        padding-right: 20px;
    }

</style>

<body>

<div class="head-title">

    <h1 class="text-center m-0 p-0">Faktura</h1>

</div>

<div class="add-detail mt-10">
    <div class="w-50 float-left mt-10">
        <p class="m-0 pt-5 text-bold w-100">Broj na faktura - <span class="gray-color">{{ $invoice->invoice_number }}</span></p>
        <p class="m-0 pt-5 text-bold w-100">Datum na faktura - <span class="gray-color">{{ \Carbon\Carbon::parse($invoice->invoice_date)->toDateString() }}</span></p>
    </div>
    <div style="clear: both;"></div>
</div>
<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th class="w-50">OD</th>
            <th class="w-50">DO</th>
        </tr>
        <tr>
            <td>
                <div class="box-text">
                    <p>Queen Productions Limited</p>
                    <p>WC2R 0EX</p>
                    <p>7 Savoy Ct,</p>
                    <p>London,</p>
                    <p>United Kingdom</p>
                    <p>Contact : 1234567890</p>
                </div>
            </td>
            <td>
                <div class="box-text">
                    <p>{{ $invoice->customer->name }}</p>
                    <p>{{ $invoice->customer->postcode }}</p>
                    <p>{{ $invoice->customer->address }},</p>
                    <p>{{ $invoice->customer->city }},</p>
                    <p>{{ $invoice->customer->country->title }},</p>
                    <p>Contact : {{ $invoice->customer->phone }}</p>
                    <p>E-mail : {{ $invoice->customer->email }}</p>
                </div>
            </td>
        </tr>
    </table>
</div>

<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th class="w-50">Datum na faktura</th>
            <th class="w-50">Datum na dospevanje</th>
        </tr>
        <tr>
            <td>{{ \Carbon\Carbon::parse($invoice->invoice_date)->toDateString() }}</td>
            <td>{{ \Carbon\Carbon::parse($invoice->date_of_pay)->toDateString() }}</td>
        </tr>
    </table>
</div>

<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th class="w-50">Ime na produkt</th>
            <th class="w-50">Cena</th>
            <th class="w-50">Kolicina</th>
            <th class="w-50">Danok</th>
            <th class="w-50">Za naplata</th>
        </tr>
        <tr align="center">
            <td>{{ $invoice->product->name }}</td>
            <td>{{ $invoice->product->price }}</td>
            <td>{{ $item->quantity }}</td>
            <td>{{ $invoice->tax_percent }}%</td>
            <td>${{ $invoice->product->price * $item->quantity }}</td>
        </tr>
        <tr>
            <td colspan="7">
                <div class="total-part">
                    <div class="total-left w-85 float-left" align="right">
                        <p>Danok ({{ $invoice->tax_percent }}%)</p>
                        <p>Vkupno za naplata</p>
                    </div>
                    <div class="total-right w-15 float-left text-bold" align="right">
                        <p>${{ round(($invoice->total + $invoice->tax_percent) * $invoice->tax_percent) / 100 }}</p>
                        <p>${{round($invoice->product->price * $item->quantity) + round(($invoice->total + $invoice->tax_percent) * $invoice->tax_percent) / 100 }}</p>

                    </div>
                    <div style="clear: both;"></div>
                </div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>
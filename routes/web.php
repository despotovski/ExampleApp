<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ErrorController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return inertia('Customer/Index', []);
});
Route::get('{invoice}/generate', [\App\Domain\Invoice\Controllers\InvoicePDFController::class, 'printPDF'])
    ->name('downloadPDF');

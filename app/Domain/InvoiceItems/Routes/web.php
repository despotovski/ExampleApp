<?php

use Illuminate\Support\Facades\Route;

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

Route::prefix('invoiceItems')
    //->middleware('auth')
    ->group(function () {

        Route::get('/', 'InvoiceItemsController@index')->name('invoiceItems.index');
        Route::get('/create', 'InvoiceItemsController@create')->name('invoiceItems.create');
        Route::post('/', 'InvoiceItemsController@store')->name('invoiceItems.store');
        Route::get('/{invoiceItems}', 'InvoiceItemsController@show')->name('invoiceItems.show');
        Route::get('/{invoiceItems}/edit', 'InvoiceItemsController@edit')->name('invoiceItems.edit');
        Route::put('/{invoiceItems}', 'InvoiceItemsController@update')->name('invoiceItems.update');
        Route::delete('{invoiceItems}', 'InvoiceItemsController@destroy')->name('invoiceItems.destroy');
    });

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

Route::prefix('invoice')
    //->middleware('auth')
    ->group(function () {

        Route::get('/', 'InvoiceController@index')->name('invoice.index');
        Route::get('/get', 'InvoiceController@get')->name('invoice.get');
        Route::get('/create', 'InvoiceController@create')->name('invoice.create');
        Route::post('/', 'InvoiceController@store')->name('invoice.store');
        Route::get('/{invoice}', 'InvoiceController@show')->name('invoice.show');
        Route::get('/{invoice}/edit', 'InvoiceController@edit')->name('invoice.edit');
        Route::post('/{invoice}', 'InvoiceController@update')->name('invoice.update');
        Route::delete('{invoice}', 'InvoiceController@destroy')->name('invoice.destroy');
    });

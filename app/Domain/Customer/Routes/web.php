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

Route::prefix('customer')
    //->middleware('auth')
    ->group(function () {

        Route::get('/', 'CustomerController@index')->name('customer.index');
        Route::get('/get', 'CustomerController@get')->name('customer.get');
        Route::get('/create', 'CustomerController@create')->name('customer.create');
        Route::post('/', 'CustomerController@store')->name('customer.store');
        Route::get('/{customer}/general-info', 'CustomerController@show')->name('customer.show');
        Route::get('/{customer}/edit', 'CustomerController@edit')->name('customer.edit');
        Route::post('/{customer}', 'CustomerController@update')->name('customer.update');
        Route::delete('{customer}', 'CustomerController@destroy')->name('customer.destroy');
    });

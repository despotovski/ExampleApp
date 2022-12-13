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

Route::prefix('country')
    //->middleware('auth')
    ->group(function () {

        Route::get('/', 'CountryController@index')->name('country.index');
        Route::get('/create', 'CountryController@create')->name('country.create');
        Route::post('/', 'CountryController@store')->name('country.store');
        Route::get('/{country}', 'CountryController@show')->name('country.show');
        Route::get('/{country}/edit', 'CountryController@edit')->name('country.edit');
        Route::put('/{country}', 'CountryController@update')->name('country.update');
        Route::delete('{country}', 'CountryController@destroy')->name('country.destroy');
    });

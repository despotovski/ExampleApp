<?php

namespace App\Domain\InvoiceItems\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Domain\InvoiceItems\BLL\InvoiceItems\InvoiceItemsBLL;
use App\Domain\InvoiceItems\BLL\InvoiceItems\InvoiceItemsBLLInterface;
use App\Domain\InvoiceItems\DAL\InvoiceItems\InvoiceItemsDAL;
use App\Domain\InvoiceItems\DAL\InvoiceItems\InvoiceItemsDALInterface;
use App\Domain\InvoiceItems\Policies\InvoiceItemsPolicy;
use App\Domain\InvoiceItems\Models\InvoiceItems;

class InvoiceItemsProvider extends ServiceProvider
{
    protected $namespace = 'App\Domain\InvoiceItems\Controllers';

    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        InvoiceItemsBLLInterface::class => InvoiceItemsBLL::class,
        InvoiceItemsDALInterface::class => InvoiceItemsDAL::class,
    ];

    /** The policy mappings for the domain.
     *
     * @var array
     */
    protected $policies = [
        InvoiceItems::class => InvoiceItemsPolicy::class,
    ];


    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        //
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerEvents();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();
        $this->registerPolicies();
    }

    /**
     * Register the domain's routes.
     *
     * @return void
     */
    public function registerRoutes()
    {
        if (!$this->app->routesAreCached()) {
            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('app/Domain/InvoiceItems/Routes/web.php'));

            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('app/Domain/InvoiceItems/Routes/api.php'));

            $this->app->booted(function () {
                $this->app['router']->getRoutes()->refreshNameLookups();
                $this->app['router']->getRoutes()->refreshActionLookups();
            });
        }
    }

    /**
     * Register the domain's policies.
     *
     * @return void
     */
    public function registerPolicies()
    {
        foreach ($this->policies as $key => $value) {
            Gate::policy($key, $value);
        }
    }

    public function registerEvents()
    {
        $this->booting(function () {
            foreach ($this->listen as $event => $listeners) {
                foreach (array_unique($listeners) as $listener) {
                    Event::listen($event, $listener);
                }
            }
        });
    }
}

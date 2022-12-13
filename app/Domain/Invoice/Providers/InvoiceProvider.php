<?php

namespace App\Domain\Invoice\Providers;

use App\Domain\Invoice\BLL\Invoice\InvoiceBLL;
use App\Domain\Invoice\BLL\Invoice\InvoiceBLLInterface;
use App\Domain\Invoice\DAL\Invoice\InvoiceDAL;
use App\Domain\Invoice\DAL\Invoice\InvoiceDALInterface;
use App\Domain\Invoice\Models\Invoice;
use App\Domain\Invoice\Policies\InvoicePolicy;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class InvoiceProvider extends ServiceProvider
{
    protected $namespace = 'App\Domain\Invoice\Controllers';

    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        InvoiceBLLInterface::class => InvoiceBLL::class,
        InvoiceDALInterface::class => InvoiceDAL::class,
    ];

    /** The policy mappings for the domain.
     *
     * @var array
     */
    protected $policies = [
        Invoice::class => InvoicePolicy::class,
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
                ->group(base_path('app/Domain/Invoice/Routes/web.php'));

            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('app/Domain/Invoice/Routes/api.php'));

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

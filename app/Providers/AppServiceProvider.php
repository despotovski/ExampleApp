<?php

namespace App\Providers;

use App\Services\Stripe\Stripe;
use App\Services\Stripe\StripeInterface;
use Carbon\Carbon;
use App\Services\IPFS\IPFS;
use App\Services\Mailer\MailSender;
use App\Services\Queue\QueueClient;
use Illuminate\Support\Facades\URL;
use App\Services\IPFS\IPFSInterface;
use Illuminate\Support\ServiceProvider;
use App\Services\Blockchain\Blockchain;
use App\Services\GraphQL\SettleMintGraphQL;
use App\Services\Mailer\MailSenderInterface;
use App\Services\Queue\QueueClientInterface;
use App\Services\Translator\TranslatorService;
use App\Services\Blockchain\BlockchainInterface;
use App\Services\GraphQL\SettleMintGraphQLInterface;
use App\Services\Translator\TranslatorServiceInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        TranslatorServiceInterface::class => TranslatorService::class,
        MailSenderInterface::class => MailSender::class,
        QueueClientInterface::class => QueueClient::class,
        SettleMintGraphQLInterface::class => SettleMintGraphQL::class,
        IPFSInterface::class => IPFS::class,
        StripeInterface::class => Stripe::class,
        BlockchainInterface::class => Blockchain::class,
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (!$this->app->isLocal()) {
            URL::forceScheme('https');
        }

        Carbon::setLocale(app()->getLocale());
    }
}

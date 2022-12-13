<?php

return [
    'title' => [
        'hello' => 'Hello',
    ],
    'regards' => [
        'best_regards' => 'See you soon,',
    ],
    'footer' => [
        'team_waw' => 'Team WawStreet.',
    ],
    'confirmation_account_email' => [
        'subject' => 'WawStreet - Verify your email address',
        'paragraph_1' => 'Thank you for signing up with WawStreet. You\'re almost done. Simply click Confirm below to confirm your subscription.',
        'paragraph_2' => 'This link will expire in 48 hours. If you have questions, contact us at ',
        'link' => 'Confirm my account',
    ],
    'validation_email' => [
        'paragraph_1' => 'Welcome to WawStreet',
        'creative_regards' => 'Creative regards,',
        'team_waw' => 'The WawStreet Team',
    ],
    'password_update' => [
        'paragraph_1' => 'We see that your WawStreet account password has been changed.',
        'paragraph_2' => 'We are sending you this email for security reasons.',
        'paragraph_3' => 'If you received this email and have not changed your password, please contact us at ',
        'subject' => 'WawStreet - Your password has been reset',
    ],
    'reset_password_email' => [
        'paragraph_1' => 'You would like to reset the password of your WawStreet account.',
        'paragraph_2' => 'This link will expire in 48 hours. If you did not ask for your password to be changed, please contact us at ',
        'paragraph_3' => 'How to proceed ?',
        'paragraph_4' => 'It couldn\'t be easier, all you have to do is click the link below and create a new password in a snap ! You\'ll then be able to log in to WawStreet.',
        'link' => 'Create a new password',
        'subject' => 'WawStreet - Reset your password',
    ],
    'contact_us_confirmation_email' => [
        'subject' => 'WawStreet - Your message has been correctly sent',
        'paragraph_1' => 'Your message has been sent successfully, thank you for getting in touch ! We\'ll be in contact soon !',
        'first_name' => 'First name : :first_name  ',
        'last_name' => 'Last name : :last_name',
        'type_of_request' => 'Type of request : :type_of_request',
        'email_subject' => 'Subject : :subject',
        'email_message' => 'Message : :email_message',
    ],
    'contact_us_admin_email' => [
        'subject' => 'New message from contact form',
        'paragraph_1' => 'There is a new message for the contact form :',
        'phone_number' => 'Phone Number : :phone_number',
    ],
    'expired_stripe_session' => [
        'customer' => [
            'subject' => 'WawStreet - Your transaction has expired',
            'paragraph_1' => 'This is an automated notification to let you now that the following transaction has expired.',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'Click :link to see its detail',
            'paragraph_2' => 'If you have any questions regarding this transaction, please contact us through the contact form.',
        ],
        'admin' => [
            'subject' => 'Transaction expired',
            'title' => 'A transaction has expired:',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'Click :link to see its detail',
        ],
    ],
    'cancelled_stripe_session' => [
        'customer' => [
            'subject' => 'WawStreet - Your transaction has been cancelled',
            'paragraph_1' => 'This is an automated notification to let you now that the following transaction was cancelled.',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'Click :link to see its detail',
            'paragraph_2' => 'If you have any questions regarding this transaction, please contact us through the contact form.',
        ],
        'admin' => [
            'subject' => 'Transaction canceled',
            'title' => 'A transaction was canceled:',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'Click :link to see its detail',
        ],
    ],
    'successful_stripe_session' => [
        'customer' => [
            'subject' => 'WawStreet - Thank your for your transaction',
            'paragraph_1' => 'Thank you for your recent transaction. We’ll email you an update as soon the NFT(s) you purchased will be transferred on your wallet.',
            'paragraph_2' => 'Here are the details of your transaction:',
            'date' => 'Date : :date',
            'payment_id' => 'Transaction ID : :payment_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'You can find all of your transaction :link.',
            'link_2' => 'If you have any questions regarding the transaction, please contact us through the :link_2.',
            'purchased_nfts' => 'Purchased NFT(s):',
        ],
        'admin' => [
            'subject' => 'Transaction succeed',
            'title' => 'A transaction has succeed:',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'amount' => 'Amount : €:amount',
            'link' => 'Click :link to see its detail',
        ],
        'date' => 'Date:',
        'amount' => 'Amount:',
        'payment_id' => 'Transaction ID:',
        'payment_method' => 'Payment method:',
    ],
    'transaction_failed' => [
        'customer' => [
            'subject' => 'WawStreet - Pending transfer of your NFT',
            'paragraph1' => 'The following NFT is currently being transferred to your wallet. You’ll receive an email as soon as the NFT transfer will succeed.',
            'paragraph2' => 'In the meantime, you can check the status of the transfer of your NFT from your transaction page.',
            'paragraph3' => 'If you have any questions regarding the transfer, please contact us through the :link.',
        ],
        'admin' => [
            'subject' => 'Transfer failed',
            'paragraph1' => 'A NFT transfer has failed and requires a manual action from your side. You can manually trigger the transfer from WawStreet Administration.',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'nft_id' => 'NFT ID : :nft_id',
            'link' => 'Click :link to see its detail',
        ],
    ],
    'transaction_success' => [
        'customer' => [
            'subject' => 'WawStreet - Congratulations for your new NFT',
            'title' => 'Congratulations for your new NFT!',
            'paragraph1' => 'The following NFT you purchased has been successfully transferred into your wallet.',
            'link' => 'You can find all your WawStreet NFTs on Your :link into the website.',
        ],
        'admin' => [
            'subject' => ' Transfer succeed',
            'paragraph1' => 'A NFT transfer has succeed:',
            'date' => 'Date : :date',
            'stripe_id' => 'Stripe ID : :stripe_id',
            'customer' => 'Customer : :customer',
            'nft_id' => 'NFT ID : :nft_id',
            'link' => 'Click :link to see its detail',
        ],
    ],
    'explore_our_collections' => 'Explore our collections on WawStreet!',
];
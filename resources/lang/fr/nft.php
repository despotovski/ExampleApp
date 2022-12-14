<?php

return [
    'title' => 'NFTs frappés',
    'back' => 'RETOUR A LA PAGE D’ACCUEIL',
    'search_by_name_id' => 'Recherche par ID interne ou nom NFT',
    'search_by_item_id' => 'Rechercher par ID de création',
    'search_by_collection' => 'Rechercher par collection',
    'search_by_creator' => 'Rechercher par créateur',
    'search_by_wallet' => 'Rechercher par portefeuille WawStreet',
    'total_nfts' => '{{ nftCount }} NFTs',
    'total_nfts_1' => '{{ nftCount }} NFT',
    'create_nft' => 'Créer le NFT',
    'successfully_created' => 'Le NFT a été créé avec succès',
    'successfully_updated' => 'Le NFT a été mis à jour avec succès',
    'edit_title' => 'Modifier NFT - {{NFTName}} ( {{ nftScarcity }} )',
    'created_on' => 'Créé le {{ creationDate }} par <a href="{{ link }}">{{ userFullName }}</a>',
    'updated_on' => 'Dernière mise à jour le {{ LastUpdatedDate }} par <a href="{{ link }}">{{ userFullName }}</a>',
    'tab_name' => 'Informations Générales',
    'remaining_nft' => 'NFT RESTANT :',
    'general_info' => 'Informations Générales',
    'list_owners' => 'Liste des détenteurs',
    'available_copies' => 'Ce NFT est disponible en {{ copies }} exemplaires',
    'validation' => [
        'not_valid_token_id' => 'Token ID non valide',
    ],
    'type' => [
        'main_item_image' => 'Création principale',
        'platinum' => 'Platinum',
        'gold' => 'Or',
        'silver' => 'Argent',
        'bronze' => 'Bronze',
    ],
    'import_nfts' => 'Importer des NFTs',
    'import_items_nfts' => 'Importer les créations et les NFTs',
    'import_modal' => [
        'title' => 'Importer des NFTs',
        'title_items_nfts' => 'Importer les créations et les NFTs',
        'import_field' => 'Choisissez un fichier ou glissez le document',
        'download_template' => 'Télécharger le modèle',
        'button_import' => 'Importer',
    ],
    'import_validation_message' => 'Seuls les fichiers .xlsx sont autorisés',
    'successfully_imported' => ':count  NFTs ont été importés avec succès',
    'successfully_imported_item_nft' => ':count NFTs ont été importés avec succès et :countItems items ont été créés.',
    'token_ids_duplicate_error' => 'NFTs avec l\'adresse de contact :contractAddress a reproduit les IDs des jetons (:tokenIds)',
    'public' => [
        'technical_information' => 'Informations techniques',
        'owners' => 'Détenteur(s)',
        'price' => 'Prix',
        'next_drop' => 'Prochain drop le {{ dateFrom }}',
        'soon_for_sale' => 'Bientôt en vente',
        'sold_out' => 'ÉPUISÉ',
        'unavailable' => 'Indisponible',
        'nft_copies' => '{{ nftCopies }} NFTs',
        'left' => 'Gauche',
        'right' => 'Droite',
        'from_collection' => 'de la collection {{ collectionName }}',
        'network' => 'Réseau: {{ blockchain }}',
        'contract_address' => 'Adresse de contrat :',
        'token_id' => 'Token ID : ',
        'nft_number_of_copies' => 'Déjà acquis {{ ownerNumberCopies }} !',
        'token_standard' => 'Jeton Standard: {{ tokenStandard }}',
        'royalty_fee' => 'Droit de suite: {{ royaltyFee }}',
    ],
];
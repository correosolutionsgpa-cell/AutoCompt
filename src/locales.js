const FR = {
  nav: {
    features: "Fonctionnalités",
    pricing: "Tarifs et Forfaits",
    deepDive: "Avantages Clés",
    faq: "FAQ",
    simulators: "Simulateurs Live",
    login: "Se connecter à mon espace",
    signup: "Accéder à l'application",
  },
  hero: {
    badge: "Offre Spéciale : Portes Ouvertes",
    title: "Le logiciel de comptabilité immobilier 100% québécois, conçu pour tous les propriétaires et syndicats.",
    subtitle: "Tenue de livres automatisée : Économisez jusqu'à 80% sur vos frais comptables et libérez des dizaines d'heures par mois. AutoCompt est la solution immobilière de référence au Québec, conçue pour les travailleurs autonomes, les propriétaires de plex (en nom personnel ou entreprise) et les syndicats de copropriété de toutes tailles.",
    ctaPrimary: "Optimiser ma comptabilité gratuitement",
    ctaSecondary: "Tester le simulateur live",
    info: "Aucune carte de crédit requise. Démarrez votre essai gratuit de 30 jours.",
  },
  profiles: {
    title: "Un profil pour chaque réalité immobilière au Québec",
    subtitle: "AutoCompt n'est pas un outil générique — c'est six expériences distinctes, chacune conçue pour un métier précis.",
    prospecteur: {
      title: "Prospecteur immobilier",
      desc: "Vous analysez des propriétés avant d'investir ? Suivez votre kilométrage déductible et classez vos dépenses de prospection avant même votre premier achat.",
    },
    investisseur: {
      title: "Investisseur immobilier",
      desc: "Gérez vos immeubles locatifs, vos rapports fiscaux (T776, TP-128, amortissement DPA) et préparez votre Relevé 31. Location courte durée ? Le module Meublé / Airbnb calcule automatiquement la taxe de séjour et suit votre inscription CITQ.",
    },
    flippeur: {
      title: "Flippeur immobilier",
      desc: "Calculez votre valeur après travaux (ARV), votre budget de rénovation détaillé et la répartition entre partenaires — avant de faire une offre.",
    },
    gestionnaire: {
      title: "Gestionnaire immobilier",
      desc: "Un vrai compte en fidéicommis conforme à la Loi sur le courtage immobilier du Québec. Suivez vos clients propriétaires, générez leur Mandat de Gestion, et laissez-les consulter leurs relevés depuis leur propre compte AutoCompt sécurisé.",
    },
    syndicat: {
      title: "Syndicat de copropriété",
      desc: "Gérez les cotisations de chaque unité, générez vos rapports et convocations assistés par IA, et gardez votre Carnet d'entretien conforme à la Loi 16. Chaque copropriétaire peut avoir son propre accès en lecture seule.",
    },
    comptable: {
      title: "Comptable",
      desc: "Un portefeuille multi-clients complet : Journal Général, Grand Livre, Balance, rapport TPS/TVQ, GIFI et export direct vers Sage 50, pour chacun de vos clients immobiliers.",
    },
  },
  features: {
    title: "Comptabilité immobilière pour tout le Québec",
    subtitle: "Tenue de livres automatisée : Économisez jusqu'à 80% sur vos frais comptables et libérez des dizaines d'heures par mois.",
    scanner: {
      title: "Numériseur de reçus intelligent",
      desc: "Photographiez vos reçus. Notre logiciel de comptabilité immobilier extrait automatiquement le marchand, la date, le montant et isole la TPS/TVQ en moins de 3 secondes.",
    },
    taxes: {
      title: "Calculatrice automatique TPS/TVQ",
      desc: "Gérez vos déclarations de taxes sans effort. Cette application comptable pour travailleurs autonomes de l'immobilier isole les taxes provinciales et fédérales automatiquement.",
    },
    vault: {
      title: "Coffre-fort DocuLegal",
      desc: "Conservez vos promesses d'achat, reçus et contrats dans un espace chiffré hautement sécurisé, garantissant une gestion simplifiée pour syndicat de copropriété et propriétaires.",
    },
  },
  pricing: {
    title: "Une tarification claire, adaptée à vos besoins",
    subtitle: "Sélectionnez le forfait idéal pour propulser votre gestion immobilière au Québec.",
    monthly: "Mensuel",
    annual: "Annuel",
    save: "Économisez 25% !",
    ownersToggle: "Propriétaires & Autonomes",
    syndicatesToggle: "Syndicats de Copropriété",
    popular: "Plus Populaire",
    cta: "Réserver mon accès gratuit (Limite de 20 places)",
    promoLabel: "Code promo",
    promoApply: "Appliquer",
    promoSuccess: "✓ Code appliqué !",
    promoInvalid: "✗ Code invalide",
    betaInfo: "Programme Bêta Exclusif : Limité aux 20 premiers inscrits. Remplissez le formulaire de réservation; votre code d'accès gratuit vous sera envoyé par courriel une fois validé.",
    betaPromoTag: "Offre Bêta : Gratuit pour les 20 premiers",
    billingPeriod: {
      monthly: "/ mois",
      annual: "/ mois",
    },
    proprietaires: [
      {
        name: "Portes Ouvertes",
        priceMonthly: 19.99,
        priceAnnual: 14.99,
        priceYearly: 179.91,
        badge: "1 à 4 portes",
        desc: "Spécialement conçu pour les Propriétaires de Plex (jusqu'à 4 portes) et Travailleurs autonomes. Sofi, notre assistance intelligente, disponible 24/7.",
        promo: "Promo: 5.99$ pour 3 mois",
        features: [
          "Tenue de livres automatisée",
          "Sofi (Support IA 24/7)",
          "Scan IA",
          "Espace sécurisé (Stockage chiffré)",
          "Exportation Excel/CSV",
          "Suivi de kilométrage intelligent (gestion de 10 adresses simultanées) – Idéal pour vos routes de prospection et optimiser vos déductions fiscales.",
          "Générez vos factures numériques personnalisées avec votre propre logo – Donnez une image de marque irréprochable à votre entreprise."
        ]
      },
      {
        name: "Pro",
        priceMonthly: 34.99,
        priceAnnual: 26.24,
        priceYearly: 314.91,
        badge: "Jusqu'à 15 portes",
        desc: "Une solution complète pour vos investissements. Sofi, notre assistance intelligente, disponible 24/7.",
        isPopular: true,
        features: [
          "Tenue de livres automatisée",
          "Tout du forfait Portes Ouvertes",
          "DocuLegal inclus : Signature numérique de contrats privés & archivage automatisé.",
          "Rapports fiscaux avancés",
          "1 abonné",
          "1 entreprise"
        ]
      },
      {
        name: "Multi-Entreprise",
        priceMonthly: 49.99,
        priceAnnual: 37.49,
        priceYearly: 449.91,
        badge: "Croissance optimale",
        desc: "Croissance optimale et partenariats. Sofi, notre assistance intelligente, disponible 24/7.",
        features: [
          "Tenue de livres automatisée",
          "Tout du forfait Pro",
          "Jusqu'à 2 entreprises",
          "1 invité",
          "Partage des bénéfices et dépenses",
          "Rapports personnalisables"
        ]
      }
    ],
    syndicats: [
      {
        name: "Syndicat Essentiel",
        priceMonthly: 29.99,
        priceAnnual: 22.49,
        priceYearly: 269.91,
        badge: "Petites copropriétés",
        desc: "Pour les petits et moyens syndicats de copropriété. Sofi, notre assistance intelligente, disponible 24/7.",
        features: [
          "Tenue de livres automatisée : Suivi rigoureux des dépenses et revenus du syndicat.",
          "Suivi des Fonds Obligatoires : Visualisation claire et séparée du Fonds de prévoyance et Fonds d'autoassurance sur le Dashboard.",
          "Registre légal (DocuLegal) : Archivage automatisé des procès-verbaux, règlements et états financiers dans des dossiers intelligents par année, accessible en tout temps depuis votre espace sécurisé.",
          "Gouvernance et suivi de CA : Outils collaboratifs de gestion pour le conseil d'administration (1 administrateur complet, accès limité copropriétaires)."
        ]
      },
      {
        name: "Syndicat Gestion Complète",
        priceMonthly: 59.99,
        priceAnnual: 44.99,
        priceYearly: 539.91,
        badge: "Grands syndicats",
        desc: "Gouvernance et maintenance complètes du syndicat. Sofi, notre assistance intelligente, disponible 24/7.",
        isPopular: true,
        features: [
          "Tout du forfait Essentiel",
          "Carnet d'entretien numérique (Conforme Loi 16) : Inventaire des actifs complexes (toiture, ascenseurs, piscine, gym) avec alertes intelligentes de maintenance gérées par Sofi.",
          "Suivi des fournisseurs spécialisés : Centralisation des contrats de maintenance et des factures de prestataires qualifiés.",
          "Générateur de l'Attestation du syndicat : Exportation en un clic du certificat officiel requis par les notaires pour les transactions de vente.",
          "Transparence totale et illimitée : Rapports financiers avancés pour le CA et partage sécurisé."
        ]
      }
    ]
  },
  deepdive: {
    title: "Une solution immobilière provinciale de nouvelle generación",
    subtitle: "Découvrez comment notre technologie optimise la comptabilité des investisseurs, travailleurs autonomes et syndicats au Québec.",
    magic: {
      title: "Accès sécurisé par compte pour vos clients propriétaires",
      desc: "Invitez un client propriétaire par courriel : il se connecte avec sa propre adresse et accède en permanence, depuis son propre compte AutoCompt, à ses relevés scellés — jamais un lien temporaire, un vrai accès qu'il contrôle, sans jamais voir vos données de gestion internes.",
    },
    drive: {
      title: "Intégration Cloud flexible",
      desc: "Conservez le contrôle total de vos données. Ce logiciel de comptabilité immobilier est compatible avec votre espace de stockage cloud (Google Drive, OneDrive, Dropbox, etc.) pour stocker vos reçus et factures au Québec. Pas de verrouillage de données, vos documents restent à vous pour toujours.",
    },
    doculegal: {
      title: "DocuLegal : Votre centre de commande et de signature numérique.",
      desc: "Centralisez, sécurisez et signez numériquement vos documents immobiliers privés en un seul endroit. DocuLegal vous permet de signer vos promesses d'achat et vos contrats de gré à gré en toute légalité, tout en structurant automatiquement vos documents (promesses d'achat, reçus de Relevé 31, factures) dans des dossiers intelligents organisés par adresse et par date directement dans votre espace Cloud sécurisé.",
    }
  },
  simulators: {
    title: "Essayez notre logiciel de comptabilité immobilier en direct",
    subtitle: "Expérimentez notre application comptable pour travailleurs autonomes et découvrez la gestion simplifiée pour syndicat de copropriété grâce à nos simulateurs interactifs.",
    ocr: {
      title: "Simulateur de numérisation de reçu par IA",
      btn: "Lancer la numérisation",
      scanning: "Extraction des données par l'IA en cours...",
      merchant: "Marchand extrait",
      date: "Date de transaction",
      subtotal: "Sous-total net",
      tps: "TPS calculée (5%)",
      tvq: "TVQ calculée (9.975%)",
      total: "Total extrait",
      success: "Extraction réussie ! Taxes québécoises (TPS/TVQ) isolées avec succès.",
    },
    split: {
      title: "Calculateur de répartition entre édifices",
      desc: "Simulez la répartition d'une facture unique (ex : assurance, entretien) entre plusieurs édifices que vous gérez, avec calcul automatique de la part de taxes de chacun.",
      billAmount: "Montant de la facture ($)",
      partnerShare: "Répartition entre édifices",
      yours: "Édifice A",
      partners: "Édifice B",
      tpsReclaim: "Part de TPS incluse",
      tvqReclaim: "Part de TVQ incluse",
      netExpense: "Total avant taxes",
    },
    magic: {
      title: "Simulateur de confirmation du Relevé 31",
      desc: "AutoCompt génère une confirmation d'envoi du Relevé 31 que vous pouvez faire signer électroniquement par le locataire, avec preuve légale horodatée. (Le Relevé 31 officiel se produit et se transmet directement sur le site de Revenu Québec — AutoCompt n'envoie pas le document fiscal lui-même).",
      emailLabel: "Courriel du locataire",
      placeholder: "locataire@monimmeuble.ca",
      btn: "Simuler la demande de signature",
      generating: "Préparation de la demande de signature en cours...",
      success: "Demande de signature envoyée ! Une preuve horodatée sera générée une fois signée par le locataire.",
      previewLabel: "Lien de signature électronique envoyé :",
      actionBtn: "Copier le lien de signature",
      copied: "Lien copié !",
    },
  },
  faq: {
    title: "Questions fréquentes sur notre logiciel de comptabilité immobilier",
    subtitle: "Découvrez comment optimiser votre comptabilité immobilière partout au Québec.",
    q1: "Comment fonctionne la détection automatique de la TPS et de la TVQ ?",
    a1: "Notre IA de lecture optique (OCR) est spécialement configurée pour le marché québécois. Elle détecte automatiquement les numéros d'enregistrement de TPS et TVQ, calcule les taxes de vente exactes et classe vos reçus sans aucune saisie manuelle.",
    q2: "Puis-je l'utiliser AutoCompt si je travaille déjà avec un comptable ?",
    a2: "Absolument. AutoCompt agit comme une application comptable pour travailleurs autonomes et gestionnaires qui simplifie la collecte de données. Vous pouvez exporter vos rapports en format Excel/CSV ou donner un accès direct à votre comptable pour faciliter les déclarations fiscales.",
    q3: "Mes copropriétaires ou clients propriétaires peuvent-ils voir les données des autres ?",
    a3: "Non, jamais. Chaque copropriétaire invité n'a accès qu'à sa propre unité et, en lecture seule, aux informations globales du syndicat (transparence financière, communications). Chaque client propriétaire d'un gestionnaire ne voit que ses propres relevés scellés, jamais les données des autres clients ni celles de gestion interne.",
    q4: "Comment AutoCompt m'aide-t-il avec le Fonds de prévoyance ?",
    a4: "AutoCompt intègre un module de planification financière conforme aux exigences québécoises (Loi 16). Notre solution immobilière provinciale vous aide à planifier les cotisations du fonds de prévoyance en fonction de l'évaluation physique de votre immeuble.",
  },
  footer: {
    tagline: "AutoCompt : le logiciel de comptabilité immobilier numéro 1 au Québec. Notre solution immobilière provinciale aide les investisseurs, travailleurs autonomes et syndicats à automatiser leur gestion financière.",
    rights: "© 2026 AutoCompt. Tous droits réservés.",
    madeIn: "Conçu avec fierté au Québec.",
    legalTitle: "Légal",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    contact: "Nous joindre",
    legalNotice: "AutoCompt est un outil technologique d'organisation. Cette plateforme ne remplace ni votre comptable, ni votre ingénieur. Elle facilite la centralisation de vos documents pour une gestion professionnelle.",
  },
  support: {
    title: "Sofi, notre assistance intelligente, disponible 24/7.",
    card1Title: "Disponibilité Totale",
    card1Desc: "Notre assistance IA est disponible 24h/24, 7j/7.",
    card2Title: "Expertise Immobilière",
    card2Desc: "Entraînée spécifiquement sur les normes comptables québécoises.",
    card3Title: "Réponse Instantanée",
    card3Desc: "Obtenez des réponses précises en quelques secondes."
  }
};

const EN = {
  nav: {
    features: "Features",
    pricing: "Pricing & Plans",
    deepDive: "Key Benefits",
    faq: "FAQ",
    simulators: "Live Simulators",
    login: "Log in to my space",
    signup: "Access the application",
  },
  hero: {
    badge: "Special Offer: Open House",
    title: "The 100% Quebec real estate accounting software, designed for all owners and syndicates.",
    subtitle: "Automated bookkeeping: Save up to 80% on your accounting fees and free up dozens of hours per month. AutoCompt is the leading real estate solution in Quebec, designed for self-employed workers, plex owners (personally or corporately), and co-ownership syndicates of all sizes.",
    ctaPrimary: "Optimize my accounting for free",
    ctaSecondary: "Test live simulator",
    info: "No credit card required. Start your 30-day free trial.",
  },
  profiles: {
    title: "A profile for every real estate reality in Quebec",
    subtitle: "AutoCompt isn't a generic tool — it's six distinct experiences, each designed for a specific profession.",
    prospecteur: {
      title: "Real Estate Prospector",
      desc: "Analyzing properties before investing? Track your deductible mileage and classify your prospecting expenses before your very first purchase.",
    },
    investisseur: {
      title: "Real Estate Investor",
      desc: "Manage your rental properties, your tax reports (T776, TP-128, CCA depreciation) and prepare your Relevé 31. Short-term rentals? The Furnished / Airbnb module automatically calculates the lodging tax and tracks your CITQ registration.",
    },
    flippeur: {
      title: "House Flipper",
      desc: "Calculate your after-repair value (ARV), your detailed renovation budget, and the split between partners — before making an offer.",
    },
    gestionnaire: {
      title: "Property Manager",
      desc: "A real trust account compliant with Quebec's Real Estate Brokerage Act. Track your property-owner clients, generate their Management Mandate, and let them consult their statements from their own secure AutoCompt account.",
    },
    syndicat: {
      title: "Condo Syndicate",
      desc: "Manage each unit's fees, generate AI-assisted reports and meeting notices, and keep your maintenance logbook compliant with Bill 16. Each co-owner can have their own read-only access.",
    },
    comptable: {
      title: "Accountant",
      desc: "A complete multi-client portfolio: General Journal, General Ledger, Trial Balance, GST/QST report, GIFI, and direct export to Sage 50, for each of your real estate clients.",
    },
  },
  features: {
    title: "Real Estate Bookkeeping for all of Quebec",
    subtitle: "Automated bookkeeping: Save up to 80% on your accounting fees and free up dozens of hours per month.",
    scanner: {
      title: "Smart Receipt Scanner",
      desc: "Photograph your receipts. Our real estate accounting software automatically extracts the merchant, date, amount and isolates the GST/QST in less than 3 seconds.",
    },
    taxes: {
      title: "Automatic GST/QST Calculator",
      desc: "Manage your tax returns effortlessly. This accounting application for self-employed real estate professionals automatically isolates provincial and federal taxes.",
    },
    vault: {
      title: "DocuLegal Vault",
      desc: "Store your purchase offers, receipts, and contracts in a highly secure encrypted space, ensuring simplified management for co-ownership syndicates and owners.",
    },
  },
  pricing: {
    title: "Clear pricing, adapted to your needs",
    subtitle: "Select the ideal package to power your real estate management in Quebec.",
    monthly: "Monthly",
    annual: "Annual",
    save: "Save 25% !",
    ownersToggle: "Owners & Self-employed",
    syndicatesToggle: "Condo Syndicates",
    popular: "Most Popular",
    cta: "Reserve my free access (Limit: 20 spots)",
    promoLabel: "Promo code",
    promoApply: "Apply",
    promoSuccess: "✓ Code applied!",
    promoInvalid: "✗ Invalid code",
    betaInfo: "Exclusive Beta Program: Limited to the first 20 signups. Fill out the reservation form; your free access code will be sent to you by email once validated.",
    betaPromoTag: "Beta Offer: Free for the first 20",
    billingPeriod: {
      monthly: "/ month",
      annual: "/ month",
    },
    proprietaires: [
      {
        name: "Open Doors",
        priceMonthly: 19.99,
        priceAnnual: 14.99,
        priceYearly: 179.91,
        badge: "1 to 4 units",
        desc: "Specially designed for Plex Owners (up to 4 units) and Self-employed workers. Sofi, our intelligent assistant, available 24/7.",
        promo: "Promo: $5.99 for 3 months",
        features: [
          "Automated bookkeeping",
          "Sofi (24/7 AI Support)",
          "AI Scan",
          "Secure Space (Encrypted Storage)",
          "Excel/CSV Export",
          "Smart mileage tracking (management of 10 simultaneous addresses) – Ideal for your prospecting routes and optimizing your tax deductions.",
          "Generate your personalized digital invoices with your own logo – Give your business an impeccable brand image."
        ]
      },
      {
        name: "Pro",
        priceMonthly: 34.99,
        priceAnnual: 26.24,
        priceYearly: 314.91,
        badge: "Up to 15 units",
        desc: "A complete solution for your investments. Sofi, our intelligent assistant, available 24/7.",
        isPopular: true,
        features: [
          "Automated bookkeeping",
          "Everything in the Open Doors plan",
          "DocuLegal included: Digital signature for private contracts & automated archiving.",
          "Advanced tax reports",
          "1 subscriber",
          "1 business"
        ]
      },
      {
        name: "Multi-Business",
        priceMonthly: 49.99,
        priceAnnual: 37.49,
        priceYearly: 449.91,
        badge: "Optimal growth",
        desc: "Optimal growth and partnerships. Sofi, our intelligent assistant, available 24/7.",
        features: [
          "Automated bookkeeping",
          "Everything in the Pro plan",
          "Up to 2 businesses",
          "1 guest",
          "Profit and expense sharing",
          "Customizable reports"
        ]
      }
    ],
    syndicats: [
      {
        name: "Syndicate Essential",
        priceMonthly: 29.99,
        priceAnnual: 22.49,
        priceYearly: 269.91,
        badge: "Small co-ownerships",
        desc: "For small and medium co-ownership syndicates. Sofi, our intelligent assistant, available 24/7.",
        features: [
          "Automated bookkeeping: Rigorous tracking of the syndicate's expenses and income.",
          "Tracking of Mandatory Funds: Clear and separate visualization of the Contingency Fund and Self-Insurance Fund on the Dashboard.",
          "Legal Register (DocuLegal): Automated archiving of minutes, bylaws, and financial statements in smart folders by year, accessible anytime from your secure space.",
          "Board Governance & Tracking: Collaborative tools for the Board of Directors (1 full administrator, limited co-owner access)."
        ]
      },
      {
        name: "Syndicate Complete Management",
        priceMonthly: 59.99,
        priceAnnual: 44.99,
        priceYearly: 539.91,
        badge: "Large syndicates",
        desc: "Complete governance and maintenance for syndicates. Sofi, our intelligent assistant, available 24/7.",
        isPopular: true,
        features: [
          "Everything in the Essential plan",
          "Digital Maintenance Logbook (Bill 16 Compliant): Inventory of complex assets (roofing, elevators, pool, gym) with smart maintenance alerts managed by Sofi.",
          "Specialized Supplier Tracking: Centralization of maintenance contracts and invoices from qualified contractors.",
          "Syndicate Certificate Generator: One-click export of the official certificate required by notaries for sales transactions.",
          "Total & Unlimited Transparency: Advanced financial reports for the Board and secure sharing."
        ]
      }
    ]
  },
  deepdive: {
    title: "A next-generation provincial real estate solution",
    subtitle: "Discover how our technology optimizes bookkeeping for investors, self-employed workers, and syndicates in Quebec.",
    magic: {
      title: "Secure account-based access for your property-owner clients",
      desc: "Invite a property-owner client by email: they log in with their own address and get permanent access, from their own AutoCompt account, to their sealed statements — never a temporary link, real access they control, without ever seeing your internal management data.",
    },
    drive: {
      title: "Flexible Cloud Integration",
      desc: "Keep full control of your data. This real estate accounting software is compatible with your cloud storage space (Google Drive, OneDrive, Dropbox, etc.) to store your receipts and invoices in Quebec. No data lock-in, your files remain yours forever.",
    },
    doculegal: {
      title: "DocuLegal: Your command and digital signature center.",
      desc: "Centralize, secure, and digitally sign your private real estate documents in one place. DocuLegal allows you to legally sign your purchase offers and private contracts, while automatically organizing your documents (purchase offers, Relevé 31 receipts, invoices) into smart folders structured by address and date directly in your secure Cloud space.",
    }
  },
  simulators: {
    title: "Try our real estate accounting software live",
    subtitle: "Experience our accounting app for self-employed workers and discover simplified co-ownership syndicate management with our interactive simulators.",
    ocr: {
      title: "AI Receipt Scanning Simulator",
      btn: "Start Scanning",
      scanning: "AI OCR data extraction in progress...",
      merchant: "Extracted merchant",
      date: "Transaction date",
      subtotal: "Net subtotal",
      tps: "Calculated GST (5%)",
      tvq: "Calculated QST (9.975%)",
      total: "Extracted total",
      success: "Extraction successful! Quebec taxes (GST/QST) isolated.",
    },
    split: {
      title: "Multi-Building Expense Split Calculator",
      desc: "Simulate splitting a single invoice (e.g. insurance, maintenance) across several buildings you manage, with automatic calculation of each one's tax share.",
      billAmount: "Invoice Amount ($)",
      partnerShare: "Split between buildings",
      yours: "Building A",
      partners: "Building B",
      tpsReclaim: "GST portion included",
      tvqReclaim: "QST portion included",
      netExpense: "Total before taxes",
    },
    magic: {
      title: "Relevé 31 Confirmation Simulator",
      desc: "AutoCompt generates a Relevé 31 sending confirmation that you can have the tenant sign electronically, with timestamped legal proof. (The official Relevé 31 is produced and delivered directly on the Revenu Québec website — AutoCompt does not send the tax document itself).",
      emailLabel: "Tenant Email",
      placeholder: "tenant@myproperty.ca",
      btn: "Simulate the signature request",
      generating: "Preparing the signature request...",
      success: "Signature request sent! A timestamped proof will be generated once signed by the tenant.",
      previewLabel: "Electronic signature link sent:",
      actionBtn: "Copy signature link",
      copied: "Link copied!",
    },
  },
  faq: {
    title: "Frequently asked questions about our real estate accounting software",
    subtitle: "Find out how to optimize your real estate bookkeeping anywhere in Quebec.",
    q1: "How does the automatic detection of GST and QST work?",
    a1: "Our OCR AI is configured specifically for the Quebec market. It automatically detects GST and QST registration numbers, calculates the exact sales taxes, and logs your receipts without any manual data entry.",
    q2: "Can I use AutoCompt if I already work with an accountant?",
    a2: "Absolutely. AutoCompt acts as a collection app for self-employed workers and managers to simplify data gathering. You can export reports in Excel/CSV formats or give direct access to your accountant to facilitate tax filing.",
    q3: "Can my co-owners or property-owner clients see each other's data?",
    a3: "No, never. Each invited co-owner only has access to their own unit and, read-only, to the syndicate's overall information (financial transparency, communications). Each of a manager's property-owner clients only sees their own sealed statements, never other clients' data or internal management data.",
    q4: "How does AutoCompt help me with the contingency fund?",
    a4: "AutoCompt integrates a financial planning module compliant with Quebec requirements (Bill 16). Our provincial real estate solution helps you plan contingency fund contributions based on the physical evaluation of your building.",
  },
  footer: {
    tagline: "AutoCompt: the number 1 real estate accounting software in Quebec. Our provincial real estate solution helps investors, self-employed workers, and syndicates automate their financial management.",
    rights: "© 2026 AutoCompt. All rights reserved.",
    madeIn: "Proudly designed in Quebec.",
    legalTitle: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact Us",
    legalNotice: "AutoCompt is a technological organization tool. This platform does not replace your accountant or your engineer. It facilitates the centralization of your documents for professional management.",
  },
  support: {
    title: "Sofi, our smart support, available 24/7.",
    card1Title: "Total Availability",
    card1Desc: "Our AI support is available 24/7.",
    card2Title: "Real Estate Expertise",
    card2Desc: "Specifically trained on Quebec accounting standards.",
    card3Title: "Instant Reply",
    card3Desc: "Get precise answers in seconds."
  }
};

const ES = {
  nav: {
    features: "Características",
    pricing: "Tarifas y Planes",
    deepDive: "Ventajas Clave",
    faq: "Preguntas Frecuentes",
    simulators: "Simuladores en Vivo",
    login: "Iniciar sesión en mi espacio",
    signup: "Acceder a la aplicación",
  },
  hero: {
    badge: "Oferta Especial: Puertas Abiertas",
    title: "El software de contabilidad inmobiliaria 100% quebequense, diseñado para todos los propietarios y sindicatos.",
    subtitle: "Contabilidad automatizada: Ahorre hasta un 80% en sus gastos contables y libere decenas de horas al mes. AutoCompt es la solución inmobiliaria de referencia en Quebec, diseñada para trabajadores autónomos, propietarios de plex (a título personal o por empresa) y sindicatos de copropiedad de todos los tamaños.",
    ctaPrimary: "Optimizar mi contabilidad gratis",
    ctaSecondary: "Probar el simulador en vivo",
    info: "No se requiere tarjeta de crédito. Comience su prueba gratuita de 30 días.",
  },
  profiles: {
    title: "Un perfil para cada realidad inmobiliaria en Quebec",
    subtitle: "AutoCompt no es una herramienta genérica — son seis experiencias distintas, cada una diseñada para un oficio específico.",
    prospecteur: {
      title: "Prospector inmobiliario",
      desc: "¿Analiza propiedades antes de invertir? Registre su kilometraje deducible y clasifique sus gastos de prospección antes incluso de su primera compra.",
    },
    investisseur: {
      title: "Inversionista inmobiliario",
      desc: "Gestione sus inmuebles de alquiler, sus informes fiscales (T776, TP-128, amortización DPA) y prepare su Relevé 31. ¿Alquiler de corta duración? El módulo Amueblado / Airbnb calcula automáticamente el impuesto de estadía y da seguimiento a su inscripción CITQ.",
    },
    flippeur: {
      title: "Flippeur inmobiliario",
      desc: "Calcule su valor después de reformas (ARV), su presupuesto de renovación detallado y el reparto entre socios — antes de hacer una oferta.",
    },
    gestionnaire: {
      title: "Gestor inmobiliario",
      desc: "Una cuenta en fideicomiso real, conforme a la Ley de corretaje inmobiliario de Quebec. Dé seguimiento a sus clientes propietarios, genere su Mandato de Gestión, y déjelos consultar sus estados de cuenta desde su propia cuenta segura de AutoCompt.",
    },
    syndicat: {
      title: "Sindicato de copropiedad",
      desc: "Gestione las cuotas de cada unidad, genere sus informes y convocatorias asistidos por IA, y mantenga su bitácora de mantenimiento conforme a la Ley 16. Cada copropietario puede tener su propio acceso de solo lectura.",
    },
    comptable: {
      title: "Contador",
      desc: "Un portafolio multi-cliente completo: Diario General, Libro Mayor, Balance, informe de TPS/TVQ, GIFI y exportación directa a Sage 50, para cada uno de sus clientes inmobiliarios.",
    },
  },
  features: {
    title: "Contabilidad inmobiliaria para todo Quebec",
    subtitle: "Contabilidad automatizada: Ahorre hasta un 80% en sus gastos contables y libere decenas de horas al mes.",
    scanner: {
      title: "Escáner de recibos inteligente",
      desc: "Tome fotos de sus recibos. Nuestro software de contabilidad inmobiliaria extrae automáticamente el comercio, la fecha, el importe y separa la TPS/TVQ en menos de 3 segundos.",
    },
    taxes: {
      title: "Cálculo automático de TPS/TVQ",
      desc: "Gestione sus declaraciones de impuestos sin esfuerzo. Esta aplicación contable para trabajadores autónomos del sector inmobiliario separa los impuestos provinciales y federales automáticamente.",
    },
    vault: {
      title: "Bóveda DocuLegal",
      desc: "Conserve sus promesas de compra, recibos y contratos en un espacio cifrado altamente seguro, garantizando una gestión simplificada para sindicatos de copropiedad y propietarios.",
    },
  },
  pricing: {
    title: "Tarifas claras, adaptadas a sus necesidades",
    subtitle: "Seleccione el plan ideal para potenciar su gestión inmobiliaria en Quebec.",
    monthly: "Mensual",
    annual: "Anual",
    save: "¡Ahorre un 25% !",
    ownersToggle: "Propietarios y Autónomos",
    syndicatesToggle: "Sindicatos de Copropiedad",
    popular: "Más Popular",
    cta: "Reservar mi acceso gratis (Límite: 20 cupos)",
    promoLabel: "Código promo",
    promoApply: "Aplicar",
    promoSuccess: "✓ ¡Código aplicado!",
    promoInvalid: "✗ Código inválido",
    betaInfo: "Programa Beta Exclusivo: Limitado a los primeros 20 registrados. Complete el formulario de reserva; su código de acceso gratuito le será enviado por correo electrónico una vez validado.",
    betaPromoTag: "Oferta Beta: Gratis para los primeros 20",
    billingPeriod: {
      monthly: "/ mes",
      annual: "/ mes",
    },
    proprietaires: [
      {
        name: "Puertas Abiertas",
        priceMonthly: 19.99,
        priceAnnual: 14.99,
        priceYearly: 179.91,
        badge: "1 a 4 puertas",
        desc: "Especialmente diseñado para Propietarios de Plex (hasta 4 puertas) y Trabajadores autónomos. Sofi, nuestra asistente inteligente, disponible 24/7.",
        promo: "Promo: 5.99$ por 3 meses",
        features: [
          "Contabilidad automatizada",
          "Sofi (Soporte IA 24/7)",
          "Escaneo por IA",
          "Espacio seguro (Almacenamiento cifrado)",
          "Exportación Excel/CSV",
          "Seguimiento de kilometraje inteligente (gestión de 10 direcciones simultáneas) – Ideal para sus rutas de prospección y optimización de deducciones fiscales.",
          "Genere sus facturas digitales personalizadas con su propio logotipo – Dé a su negocio una imagen de marca impecable."
        ]
      },
      {
        name: "Pro",
        priceMonthly: 34.99,
        priceAnnual: 26.24,
        priceYearly: 314.91,
        badge: "Hasta 15 puertas",
        desc: "Una solution completa para sus inversiones. Sofi, nuestra asistente inteligente, disponible 24/7.",
        isPopular: true,
        features: [
          "Contabilidad automatizada",
          "Todo en el plan Puertas Abiertas",
          "DocuLegal incluido: Firma digital para contratos privados y archivo automatizado.",
          "Informes fiscales avanzados",
          "1 abonado",
          "1 empresa"
        ]
      },
      {
        name: "Multi-Empresa",
        priceMonthly: 49.99,
        priceAnnual: 37.49,
        priceYearly: 449.91,
        badge: "Crecimiento óptimo",
        desc: "Crecimiento óptimo y asociaciones. Sofi, nuestra asistente inteligente, disponible 24/7.",
        features: [
          "Contabilidad automatizada",
          "Todo en el plan Pro",
          "Hasta 2 empresas",
          "1 invitado",
          "Reparto de beneficios y gastos",
          "Informes personalizables"
        ]
      }
    ],
    syndicats: [
      {
        name: "Sindicato Esencial",
        priceMonthly: 29.99,
        priceAnnual: 22.49,
        priceYearly: 269.91,
        badge: "Pequeñas copropiedades",
        desc: "Para pequeños y medianos syndicatos de copropiedad. Sofi, nuestra asistente inteligente, disponible 24/7.",
        features: [
          "Contabilidad automatizada: Seguimiento riguroso de los gastos e ingresos del sindicato.",
          "Seguimiento de Fondos Obligatorios: Visualización clara y separada del Fondo de previsión y Fondo de autoseguro en el Dashboard.",
          "Registro legal (DocuLegal): Archivo automatizado de actas, reglamentos y estados financieros en carpetas inteligentes por año, accesible en todo momento desde su espacio seguro.",
          "Gobernanza y seguimiento de la junta: Herramientas colaborativas de gestión para el consejo de administración (1 administrador completo, acceso limitado para copropietarios)."
        ]
      },
      {
        name: "Sindicato Gestion Completa",
        priceMonthly: 59.99,
        priceAnnual: 44.99,
        priceYearly: 539.91,
        badge: "Grandes sindicatos",
        desc: "Gobernanza y mantenimiento completo del sindicato. Sofi, nuestra asistente inteligente, disponible 24/7.",
        isPopular: true,
        features: [
          "Todo en el plan Esencial",
          "Libro de mantenimiento digital (Conforme a la Ley 16): Inventario de activos complejos (techo, ascensores, piscina, gimnasio) con alertas inteligentes de mantenimiento gestionadas por Sofi.",
          "Seguimiento de proveedores especializados: Centralización de contratos de mantenimiento y facturas de contratistas calificados.",
          "Generador de Certificado del sindicato: Exportación en un clic del certificado oficial requerido por notarios para transacciones de venta.",
          "Transparencia total e ilimitada: Informes financieros avanzados para el consejo y uso compartido seguro."
        ]
      }
    ]
  },
  deepdive: {
    title: "Una solución inmobiliaria provincial de nueva generación",
    subtitle: "Descubra cómo nuestra tecnología optimiza la contabilidad de inversores, trabajadores autónomos y sindicatos en Quebec.",
    magic: {
      title: "Acceso seguro por cuenta para sus clientes propietarios",
      desc: "Invite a un cliente propietario por correo: se conecta con su propia dirección y accede de forma permanente, desde su propia cuenta de AutoCompt, a sus estados de cuenta sellados — nunca un enlace temporal, un acceso real que él controla, sin ver jamás sus datos internos de gestión.",
    },
    drive: {
      title: "Integración Cloud flexible",
      desc: "Conserve el control total de sus datos. Este software de contabilidad inmobiliaria es compatible con su espacio de almacenamiento en la nube (Google Drive, OneDrive, Dropbox, etc.) para almacenar sus recibos y facturas en Quebec. Sin bloqueo de datos, sus archivos siguen siendo suyos para siempre.",
    },
    doculegal: {
      title: "DocuLegal: Su centro de control y firma digital.",
      desc: "Centralice, proteja y firme digitalmente sus documentos inmobiliarios privados en un solo lugar. DocuLegal le permite firmar sus promesas de compra y contratos privados con total validez legal, mientras organiza automáticamente sus documentos (promesas de compra, recibos de Relevé 31, facturas) en carpetas inteligentes estructuradas por dirección y fecha directamente en su espacio seguro en la nube.",
    }
  },
  simulators: {
    title: "Pruebe nuestro software de contabilidad inmobiliaria en vivo",
    subtitle: "Experimente nuestra aplicación contable para trabajadores autónomos y descubra la gestión simplificada para sindicatos de copropiedad con nuestros simuladores interactivos.",
    ocr: {
      title: "Simulador de lectura de recibos por IA",
      btn: "Iniciar el escaneado",
      scanning: "Extracción de datos por IA en curso...",
      merchant: "Comercio extraído",
      date: "Fecha de transacción",
      subtotal: "Subtotal neto",
      tps: "TPS calculada (5%)",
      tvq: "TVQ calculada (9.975%)",
      total: "Total extraído",
      success: "¡Extracción exitosa! Impuestos quebequenses (TPS/TVQ) separados con éxito.",
    },
    split: {
      title: "Calculadora de reparto entre edificios",
      desc: "Simule el reparto de una sola factura (ej. seguro, mantenimiento) entre varios edificios que usted gestiona, con cálculo automático de la parte de impuestos de cada uno.",
      billAmount: "Monto de la factura ($)",
      partnerShare: "Reparto entre edificios",
      yours: "Edificio A",
      partners: "Edificio B",
      tpsReclaim: "Parte de TPS incluida",
      tvqReclaim: "Parte de TVQ incluida",
      netExpense: "Total antes de impuestos",
    },
    magic: {
      title: "Simulador de confirmación del Relevé 31",
      desc: "AutoCompt genera una confirmación de envío del Relevé 31 que puede hacer firmar electrónicamente al inquilino, con prueba legal con fecha y hora. (El Relevé 31 oficial se produce y se entrega directamente en el sitio web de Revenu Québec — AutoCompt no envía el documento fiscal en sí).",
      emailLabel: "Correo del inquilino",
      placeholder: "inquilino@miinmueble.ca",
      btn: "Simular la solicitud de firma",
      generating: "Preparando la solicitud de firma...",
      success: "¡Solicitud de firma enviada! Se generará una prueba con fecha y hora una vez firmada por el inquilino.",
      previewLabel: "Enlace de firma electrónica enviado:",
      actionBtn: "Copiar enlace de firma",
      copied: "¡Enlace copiado!",
    },
  },
  faq: {
    title: "Preguntas frecuentes sobre nuestro software de contabilidad inmobiliaria",
    subtitle: "Descubra cómo optimizar su contabilidad inmobiliaria en cualquier parte de Quebec.",
    q1: "¿Cómo funciona la detección automática de TPS y TVQ?",
    a1: "Nuestra IA de reconocimiento óptico (OCR) está configurada específicamente para el mercado de Quebec. Detecta automáticamente los números de registro de TPS y TVQ, calcula los impuestos de venta exactos y clasifica sus recibos sin ingreso manual.",
    q2: "¿Puedo usar AutoCompt si ya trabajo con un contador?",
    a2: "Absolutamente. AutoCompt funciona como una herramienta de recopilación para trabajadores autónomos y gestores que simplifica la recopilación de datos. Puede exportar informes en formatos Excel/CSV o dar acceso directo a su contador para facilitar la declaración de impuestos.",
    q3: "¿Mis copropietarios o clientes propietarios pueden ver los datos de los demás?",
    a3: "No, nunca. Cada copropietario invitado solo tiene acceso a su propia unidad y, en modo lectura, a la información global del sindicato (transparencia financiera, comunicaciones). Cada cliente propietario de un gestor solo ve sus propios estados de cuenta sellados, nunca los datos de otros clientes ni los de gestión interna.",
    q4: "¿Cómo me ayuda AutoCompt con el fondo de previsión?",
    a4: "AutoCompt integra un módulo de planificación financiera que cumple con las regulaciones de Quebec (Loi 16). Nuestra solución inmobiliaria provincial le ayuda a planificar las contribuciones al fondo de previsión en función de la evaluación física de su edificio.",
  },
  footer: {
    tagline: "AutoCompt: el software de contabilidad inmobiliaria número 1 en Quebec. Nuestra solución inmobiliaria provincial ayuda a inversores, trabajadores autónomos y sindicatos a automatizar su gestión financiera.",
    rights: "© 2026 AutoCompt. Todos los derechos reservados.",
    madeIn: "Diseñado con orgullo en Quebec.",
    legalTitle: "Legal",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
    contact: "Contáctenos",
    legalNotice: "AutoCompt es una herramienta tecnológica de organización. Esta plataforma no reemplaza a su contador ni a su ingeniero. Facilita la centralización de sus documentos para una gestión profesional.",
  },
  support: {
    title: "Sofi, nuestro soporte inteligente, disponible 24/7.",
    card1Title: "Disponibilidad Total",
    card1Desc: "Nuestro soporte de IA está disponible 24/7.",
    card2Title: "Experiencia Inmobiliaria",
    card2Desc: "Entrenado específicamente en estándares contables de Quebec.",
    card3Title: "Respuesta Instantánea",
    card3Desc: "Obtenga respuestas precisas en segundos."
  }
};

export const locales = {
  FR: FR,
  EN: EN,
  ES: ES,
};

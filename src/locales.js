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
    info: "Aucune carte de crédit requise. Démarrez votre essai gratuit de 14 jours.",
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
    cta: "Rejoindre la liste d'attente",
    promoLabel: "Code promo",
    promoApply: "Appliquer",
    promoSuccess: "✓ Code appliqué !",
    promoInvalid: "✗ Code invalide",
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
          "Registre légal (DocuLegal) : Archivage automatisé des procès-verbaux, règlements et états financiers dans des dossiers intelligents par année, accessible via Liens Magiques.",
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
    title: "Une solution immobilière provinciale de nouvelle génération",
    subtitle: "Découvrez comment notre technologie optimise la comptabilité des investisseurs, travailleurs autonomes et syndicats au Québec.",
    magic: {
      title: "Simplification fiscale : Génération du Relevé 31",
      desc: "Simplifiez vos envois fiscaux et la gestion de vos immeubles partout au Québec. \n\nOptimisez votre transparence grâce à nos Liens Magiques chiffrés : les administrateurs de syndicats peuvent partager instantanément les états financiers et mouvements administratifs avec les copropriétaires, sans gestion de mots de passe complexe.\n\nPour les propriétaires de Plex, profitez d'un accès dual collaboratif : partagez vos informations avec vos partenaires en temps réel via votre espace Cloud sécurisé. Vos documents sont centralisés, automatiquement organisés par date et par dossier, et accessibles à tout moment. L'automatisation intelligente d'AutoCompt transforme votre gestion administrative en un processus fluide et parfaitement structuré.",
    },
    drive: {
      title: "Intégration Cloud flexible",
      desc: "Conservez le contrôle total de vos données. Ce logiciel de comptabilité immobilier est compatible avec votre espace de stockage cloud (Google Drive, OneDrive, Dropbox, etc.) pour stocker vos reçus et factures au Québec. Pas de verrouillage de données, vos documents restent à vous pour toujours.",
    },
    doculegal: {
      title: "DocuLegal : Votre centre de commande et de signature numérique.",
      desc: "Centralisez, sécurisez et signez numériquement vos documents immobiliers privés en un seul endroit. DocuLegal vous permet de signer vos promesses d'achat et vos contrats de gré à gré en toute légalité, tout en structurant automatiquement vos documents, Relevés 31 et factures dans des dossiers intelligents organisés par adresse et par date directement dans votre espace Cloud sécurisé.",
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
      title: "Calculateur de répartition de dépenses de Plex",
      desc: "Simulez le calcul des taxes et la répartition nette entre partenaires pour vos plex partout au Québec.",
      billAmount: "Montant de la facture ($)",
      partnerShare: "Répartition des parts",
      yours: "Votre part",
      partners: "Part du partenaire",
      tpsReclaim: "Remboursement de TPS estimé",
      tvqReclaim: "Remboursement de TVQ estimé",
      netExpense: "Coût net après remboursement de taxes",
    },
    magic: {
      title: "Générateur de Relevé 31 par IA",
      desc: "Visualisez la génération automatique du Relevé 31 pour Revenu Québec. Saisissez le courriel du locataire pour simuler la création de son relevé fiscal et l'envoi de son lien d'accès sécurisé.",
      emailLabel: "Courriel du locataire",
      placeholder: "locataire@monimmeuble.ca",
      btn: "Générer et envoyer le Relevé 31",
      generating: "Génération automatique du Relevé 31 en cours...",
      success: "Relevé 31 généré avec succès ! Transmis via un lien sécurisé.",
      previewLabel: "Lien sécurisé du Relevé 31 généré :",
      actionBtn: "Copier le lien du Relevé 31",
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
    q3: "Les Liens Magiques sont-ils sécurisés ?",
    a3: "Oui, absolument. Ils remplacent les mots de passe vulnérables par des jetons cryptographiques à usage unique valides pendant 15 minutes. C'est la solution idéale pour assurer une gestion simplifiée pour syndicat de copropriété en garantissant la confidentialité des données.",
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
    info: "No credit card required. Start your 14-day free trial.",
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
    cta: "Join the waitlist",
    promoLabel: "Promo code",
    promoApply: "Apply",
    promoSuccess: "✓ Code applied!",
    promoInvalid: "✗ Invalid code",
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
          "Legal Register (DocuLegal): Automated archiving of minutes, bylaws, and financial statements in smart folders by year, accessible via Magic Links.",
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
      title: "Tax simplification: Generation of Relevé 31",
      desc: "Simplify your tax mailings and property management across Quebec. \n\nOptimize your transparency with our encrypted Magic Links: syndicate administrators can instantly share financial statements and administrative reports with co-owners, without complex password management.\n\nFor Plex owners, enjoy a collaborative dual access: share your information with your partners in real time via your secure Cloud space. Your documents are centralized, automatically organized by date and folder, and accessible at any time. AutoCompt's smart automation transforms your administrative management into a smooth and perfectly structured process.",
    },
    drive: {
      title: "Flexible Cloud Integration",
      desc: "Keep full control of your data. This real estate accounting software is compatible with your cloud storage space (Google Drive, OneDrive, Dropbox, etc.) to store your receipts and invoices in Quebec. No data lock-in, your files remain yours forever.",
    },
    doculegal: {
      title: "DocuLegal: Your command and digital signature center.",
      desc: "Centralize, secure, and digitally sign your private real estate documents in one place. DocuLegal allows you to legally sign your purchase offers and private contracts, while automatically organizing your documents, Relevés 31, and invoices into smart folders structured by address and date directly in your secure Cloud space.",
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
      title: "Plex Expense Split Calculator",
      desc: "Simulate tax calculations and net splits among partners for your plexes anywhere in Quebec.",
      billAmount: "Invoice Amount ($)",
      partnerShare: "Share distribution",
      yours: "Your share",
      partners: "Partner's share",
      tpsReclaim: "Estimated GST rebate",
      tvqReclaim: "Estimated QST rebate",
      netExpense: "Net cost after tax rebates",
    },
    magic: {
      title: "AI Relevé 31 Generator",
      desc: "Visualize the automatic generation of Relevé 31 for Revenu Québec. Enter the tenant's email to simulate creating their tax form and sending their secure access link.",
      emailLabel: "Tenant Email",
      placeholder: "tenant@myproperty.ca",
      btn: "Generate and send Relevé 31",
      generating: "Generating automatic Relevé 31...",
      success: "Relevé 31 generated successfully! Sent via secure link.",
      previewLabel: "Generated secure Relevé 31 link:",
      actionBtn: "Copy Relevé 31 link",
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
    q3: "Are Magic Links secure?",
    a3: "Yes, absolutely. They replace vulnerable passwords with secure, single-use cryptographic tokens valid for 15 minutes. It is the ideal solution to ensure simplified management for co-ownership syndicates while guaranteeing data confidentiality.",
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
    info: "No se requiere tarjeta de crédito. Comience su prueba gratuita de 14 días.",
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
    cta: "Unirse a la lista de espera",
    promoLabel: "Código promo",
    promoApply: "Aplicar",
    promoSuccess: "✓ ¡Código aplicado!",
    promoInvalid: "✗ Código inválido",
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
          "Registro legal (DocuLegal): Archivo automatizado de actas, reglamentos y estados financieros en carpetas inteligentes por año, accesible mediante Enlaces Mágicos.",
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
      title: "Simplificación fiscal: Generación del Relevé 31",
      desc: "Simplifique sus envíos fiscales y la gestión de sus inmuebles en todo Quebec. \n\nOptimice su transparencia gracias a nuestros Enlaces Mágicos cifrados: los administradores de sindicatos pueden compartir instantáneamente los estados financieros y movimientos administrativos con los copropietarios, sin una compleja gestión de contraseñas.\n\nPara los propietarios de Plex, disfruten de un acceso dual colaborativo: compartan sus informaciones con sus socios en tiempo real a través de su espacio Cloud seguro. Sus documentos están centralizados, automáticamente organizados por fecha y carpeta, y accesibles en cualquier momento. La automatización inteligente de AutoCompt transforma su gestión administrativa en un proceso fluido y perfectamente estructurado.",
    },
    drive: {
      title: "Integración Cloud flexible",
      desc: "Conserve el control total de sus datos. Este software de contabilidad inmobiliaria es compatible con su espacio de almacenamiento en la nube (Google Drive, OneDrive, Dropbox, etc.) para almacenar sus recibos y facturas en Quebec. Sin bloqueo de datos, sus archivos siguen siendo suyos para siempre.",
    },
    doculegal: {
      title: "DocuLegal: Su centro de control y firma digital.",
      desc: "Centralice, proteja y firme digitalmente sus documentos inmobiliarios privados en un solo lugar. DocuLegal le permite firmar sus promesas de compra y contratos privados con total validez legal, mientras organiza automáticamente sus documentos, Relevés 31 y facturas en carpetas inteligentes estructuradas por dirección y fecha directamente en su espacio seguro en la nube.",
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
      title: "Calculadora de reparto de gastos de Plex",
      desc: "Simule el cálculo de impuestos y el reparto neto entre socios para sus plexes en cualquier lugar de Quebec.",
      billAmount: "Monto de la factura ($)",
      partnerShare: "Reparto de participación",
      yours: "Su parte",
      partners: "Parte del socio",
      tpsReclaim: "Reembolso estimado de TPS",
      tvqReclaim: "Reembolso estimado de TVQ",
      netExpense: "Costo neto tras reembolso de impuestos",
    },
    magic: {
      title: "Generador de Relevé 31 por IA",
      desc: "Visualice la generación automática del Relevé 31 para Revenu Québec. Ingrese el correo del inquilino para simular la creación de su formulario fiscal y el envío de su enlace de acceso seguro.",
      emailLabel: "Correo del inquilino",
      placeholder: "inquilino@miinmueble.ca",
      btn: "Generar y enviar el Relevé 31",
      generating: "Generación automática del Relevé 31 en curso...",
      success: "¡Relevé 31 generado con éxito! Enviado a través de enlace seguro.",
      previewLabel: "Enlace seguro de Relevé 31 generado:",
      actionBtn: "Copiar enlace de Relevé 31",
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
    q3: "¿Son seguros los Enlaces Mágicos?",
    a3: "Sí, por supuesto. Reemplazan contraseñas vulnerables con tokens criptográficos de un solo uso válidos por 15 minutos. Es la solución ideal para asegurar una gestión simplificada de copropiedades garantizando la confidencialidad de los datos.",
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

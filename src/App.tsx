import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Camera,
  MapPin,
  Users,
  FileText,
  Check,
  ArrowRight,
  QrCode,
  ShieldCheck,
  Briefcase,
  Building2,
  Plus,
  Building
} from 'lucide-react';
import AuthView from './AuthView';

export default function App() {
  const [view, setView] = useState<'landing' | 'auth'>('landing');

  if (view === 'auth') {
    return <AuthView onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onAuthClick={() => setView('auth')} />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* Tarifs masqués */}
        {/* <PricingSection onAuthClick={() => setView('auth')} /> */}
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-2 shadow-sm">
        <Sparkles className="h-7 w-7 text-emerald-500" strokeWidth={1.5} />
      </div>
      <span className="font-display text-2xl font-bold tracking-tight text-stone-900">
        AutoCompt
      </span>
    </div>
  );
}

function Navbar({ onAuthClick }: { onAuthClick?: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/70 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex font-medium text-stone-600">
          <a href="#features" className="hover:text-emerald-600 transition-colors">Fonctionnalités</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">À propos</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={onAuthClick} className="hidden font-medium text-stone-600 hover:text-emerald-600 transition-colors md:block">
            Connexion
          </button>
          <button onClick={onAuthClick} className="rounded-full bg-emerald-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md">
            Commencer
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 mb-8">
            Offre de lancement en cours
          </span>
          <h1 className="font-display text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            L'application comptable pour <span className="text-emerald-600">l'immobilier d'aujourd'hui</span>.
          </h1>
          <p className="mt-8 text-lg text-stone-600 max-w-2xl mx-auto md:text-xl leading-relaxed">
            Pour les courtiers autonomes, propriétaires de plex, investisseurs, et les syndicats de copropriété. Notre mission est la <strong>transparence totale</strong> pour les CA et copropriétaires : suivez les soumissions, états de travaux, montants dus, et la comptabilité au millimètre.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white shadow-md transition-all hover:bg-stone-800 hover:shadow-lg w-full sm:w-auto text-lg">
              Voir la promotion
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-stone-700 shadow-sm ring-1 ring-inset ring-stone-200 transition-all hover:bg-stone-50 hover:shadow w-full sm:w-auto text-lg">
              Découvrir les fonctionnalités
            </button>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <QrCode className="h-8 w-8 text-stone-400" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium text-stone-500">
              Scannez pour installer l'application mobile
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Scanner de reçus IA",
      description: "Numérisation intelligente de vos factures et extraction robuste des taxes.",
      icon: <Camera className="h-6 w-6 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Registre kilométrique GPS",
      description: "Suivez vos déplacements professionnels et compilez vos déductions d'impôt.",
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Gestion des locataires",
      description: "Tableau de bord unifié pour suivre loyers, renouvellements et relances.",
      icon: <Users className="h-6 w-6 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Transparence Syndicale",
      description: "Notre devise : la transparence totale. États des travaux, soumissions et fonds partagés avec tous les copropriétaires.",
      icon: <Building className="h-6 w-6 text-emerald-600" />,
      color: "bg-emerald-50"
    }
  ];

  return (
    <section id="features" className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            L'ADN de votre gestion immobilière
          </h2>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
            Des outils puissants et parfaitement intégrés, conçus pour simplifier votre vie 
            de propriétaire immobilier au Québec.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-md"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feat.color}`}>
                {feat.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-4">
                {feat.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onAuthClick }: { onAuthClick?: () => void }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [clientType, setClientType] = useState<'proprietaire' | 'syndicat'>('syndicat');

  const proprietairePlans = [
    {
      name: "FORFAIT PORTES OUVERTES",
      icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
      price: isAnnual ? "14.99" : "5.99",
      originalPrice: isAnnual ? "19.99" : null,
      annualText: isAnnual ? "179.91$ / AN (BASÉ SUR TARIF RÉGULIER)" : "(PROMO 3 MOIS, RÉGULIER 19.99$ APRÈS)",
      description: "Spécialement conçu pour les Propriétaires de Plex (jusqu'à 4 portes) et Travailleurs autonomes.",
      features: [
        { text: "Tenue de livres automatisée", type: "check" },
        { text: "Scan IA pour factures", type: "check" },
        { text: "Suivi de kilométrage (10 adresses)", type: "check" },
        { text: "Espace sécurisé (Stockage chiffré et protection bancaire)", type: "check" },
        { text: "Exportation comptable (Excel/CSV)", type: "check" },
        { text: "Support IA 24/7", type: "check" }
      ],
      bottomBadge: "JUSQU'À 4 PORTES",
      variant: "outline",
      badge: "RECOMMANDÉ",
      cta: "Choisir ce plan"
    },
    {
      name: "FORFAIT PRO",
      icon: <Briefcase className="h-6 w-6" strokeWidth={1.5} />,
      price: isAnnual ? "26.24" : "34.99",
      originalPrice: isAnnual ? "34.99" : null,
      annualText: isAnnual ? "314.91$ / AN (-25%)" : null,
      description: "Une solution complète pour vos investissements.",
      features: [
        { text: "Jusqu'à 1 entreprise", type: "check" },
        { text: "1 abonné inclus", type: "check" },
        { text: "DocuLegal inclus (Illimité)", type: "check" },
        { text: "Archivage et factures illimités", type: "check" },
        { text: "Rapports fiscaux avancés", type: "check" },
        { text: "Tout du forfait Portes Ouvertes", type: "plus" }
      ],
      bottomBadge: "JUSQU'À 15 PORTES (MAX GLOBAL)",
      variant: "dark",
      cta: "S'abonner"
    },
    {
      name: "MULTI-ENTREPRISE",
      icon: <Building2 className="h-6 w-6" strokeWidth={1.5} />,
      price: isAnnual ? "37.49" : "49.99",
      originalPrice: isAnnual ? "49.99" : null,
      annualText: null,
      description: "Croissance optimale et partenariats.",
      features: [
        { text: "Jusqu'à 2 entreprises", type: "check" },
        { text: "1 abonné + 1 invité inclus", type: "check" },
        { text: "Partage des bénéfices et dépenses", type: "check" },
        { text: "Rapports personnalisables", type: "check" },
        { text: "Tout du forfait Pro", type: "plus" }
      ],
      bottomBadge: "JUSQU'À 15 PORTES (MAX GLOBAL)",
      variant: "default",
      cta: "S'abonner"
    }
  ];

  const syndicatPlans = [
    {
      name: "SYNDICAT ESSENTIEL",
      icon: <Building className="h-6 w-6" strokeWidth={1.5} />,
      price: isAnnual ? "22.49" : "29.99",
      originalPrice: isAnnual ? "29.99" : null,
      annualText: isAnnual ? "269.91$ / AN (-25%)" : null,
      description: "Pour les petits immeubles sans équipements complexes.",
      features: [
        { text: "Gouvernance et suivi de CA", type: "check" },
        { text: "Registre des Actifs basiques", type: "check" },
        { text: "Communication basique avec copropriétaires", type: "check" },
        { text: "1 administrateur avec droits complets", type: "check" },
        { text: "Accès limité aux membres simples", type: "check" }
      ],
      bottomBadge: null,
      variant: "default",
      badge: null,
      cta: "CONTINUER L'INSCRIPTION"
    },
    {
      name: "SYNDICAT GESTION COMPLÈTE",
      icon: <Building2 className="h-6 w-6" strokeWidth={1.5} />,
      price: isAnnual ? "44.99" : "59.99",
      originalPrice: isAnnual ? "59.99" : null,
      annualText: isAnnual ? "539.91$ / AN (-25%)" : null,
      description: "Pour les immeubles avec piscines, concierges ou équipements complexes.",
      features: [
        { text: "Maintenance préventive des actifs complexes", type: "check" },
        { text: "Suivi des fournisseurs spécialisés", type: "check" },
        { text: "Rapports financiers avancés pour le CA", type: "check" },
        { text: "Modules Piscine, Gym, Ascenseurs activés", type: "check" },
        { text: "Transparence totale et illimitée", type: "check" },
        { text: "Tout du forfait Essentiel", type: "plus" }
      ],
      bottomBadge: null,
      variant: "dark",
      badge: "RECOMMANDÉ",
      cta: "CHOISIR CE PLAN"
    }
  ];

  const plans = clientType === 'proprietaire' ? proprietairePlans : syndicatPlans;

  return (
    <section id="pricing" className="px-6 py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Tarification transparente
          </h2>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
            Pas de frais cachés. Choisissez le plan idéal pour votre croissance.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <div className="inline-flex rounded-full bg-slate-200/60 p-1 shadow-inner">
              <button 
                onClick={() => setClientType('proprietaire')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${clientType === 'proprietaire' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                Autonomes & Propriétaires de Plex
              </button>
              <button 
                onClick={() => setClientType('syndicat')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${clientType === 'syndicat' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                Syndicats de Copropriété
              </button>
            </div>

            <div className="inline-flex items-center rounded-full bg-slate-100 p-1.5 shadow-inner">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  !isAnnual
                    ? 'bg-white text-stone-900 shadow-sm ring-1 ring-slate-200/50'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  isAnnual
                    ? 'bg-white text-stone-900 shadow-sm ring-1 ring-slate-200/50'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Annuel
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                  Économisez 25% !
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-lg mb-12 flex items-center justify-center gap-3">
          <input 
            type="text" 
            placeholder="Avez-vous un code promo ?" 
            className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm" 
          />
          <button className="rounded-full border border-emerald-600 bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 uppercase tracking-wide">
            APPLIQUER
          </button>
        </div>

        <div className={`grid gap-6 mx-auto items-stretch ${clientType === 'proprietaire' ? 'md:grid-cols-3 max-w-6xl' : 'md:grid-cols-2 max-w-4xl'}`}>
          {plans.map((plan, idx) => {
            const isDark = plan.variant === 'dark';
            const isOutline = plan.variant === 'outline';
            
            return (
            <div
              key={idx}
              className={`relative flex flex-col rounded-[32px] ${
                isDark 
                  ? 'bg-stone-900 text-white shadow-xl scale-100 lg:scale-105 z-10 border-none' 
                  : isOutline
                  ? 'bg-white shadow-xl scale-100 border-2 border-emerald-500' 
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              } p-8 transition-all`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-max">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide shadow-sm ${
                    isDark ? 'bg-emerald-500 text-white' : 
                    'bg-emerald-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-6 mt-4 flex items-center justify-between gap-4">
                <h3 className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-tight ${
                  isDark ? 'text-white' : 
                  isOutline ? 'text-emerald-700' : 
                  'text-stone-800'
                }`}>{plan.name}</h3>
                <div className={`${
                  isDark ? 'text-emerald-400' : 
                  isOutline ? 'text-emerald-700' : 
                  'text-stone-400'
                }`}>
                  {plan.icon}
                </div>
              </div>

              <p className={`mb-8 text-sm min-h-[40px] ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-4 flex flex-col items-start min-h-[90px]">
                <div className="flex items-baseline gap-2">
                  {plan.originalPrice && (
                    <span className={`text-2xl font-bold tracking-tight line-through ${isDark ? 'text-stone-600' : 'text-stone-300'}`}>${plan.originalPrice}</span>
                  )}
                  <span className={`text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-stone-800'}`}>{plan.price}$</span>
                  <span className={`text-sm font-medium ${isDark ? 'text-stone-500' : 'text-stone-500'}`}>/ mois</span>
                </div>
                {plan.annualText && (
                  <span className={`text-[11px] font-bold mt-1 uppercase tracking-wider ${
                    isDark ? 'text-emerald-400' : 
                    isOutline ? 'text-emerald-600' : 
                    'text-stone-500'
                  }`}>
                    {plan.annualText}
                  </span>
                )}
              </div>
              
              <ul className="mb-10 flex flex-col gap-4 flex-1 mt-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.type === 'check' ? (
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isDark ? 'bg-stone-800 text-emerald-400 border-emerald-400/20' : 
                        isOutline ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 
                        'bg-stone-100 text-stone-600 border-stone-200'
                      }`}>
                        <Check className="h-3 w-3 stroke-[3px]" />
                      </div>
                    ) : (
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center ${
                        isDark ? 'text-emerald-400' : 
                        isOutline ? 'text-emerald-500' : 
                        'text-stone-400'
                      }`}>
                        <Plus className="h-4 w-4 stroke-[3px]" />
                      </div>
                    )}
                    <span className={`text-sm leading-tight font-medium ${feature.type === 'plus' ? (isDark ? 'italic text-stone-500' : 'italic text-stone-500') : (isDark ? 'text-stone-300' : 'text-stone-700')}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              {plan.bottomBadge && (
                <div className="mb-6 flex justify-center">
                  <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                    isDark ? 'bg-stone-800 text-emerald-400' : 
                    isOutline ? 'bg-emerald-50 text-emerald-700' : 
                    'bg-stone-100 text-stone-700'
                  }`}>
                    {plan.bottomBadge}
                  </span>
                </div>
              )}

              <a 
                href="#"
                className={`mt-auto flex w-full justify-center items-center rounded-full py-4 font-bold text-sm transition-all shadow-sm ${
                  isDark 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-md' 
                    : isOutline
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} AutoCompt Inc. Conçu au Québec. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-sm font-medium text-stone-500">
          <a href="#" className="hover:text-stone-900 transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Termes</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}


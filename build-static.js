const fs = require('fs');
const path = require('path');

// 1. Load and parse locales.js
const localesFileContent = fs.readFileSync(path.join(__dirname, 'src/locales.js'), 'utf8');
// Convert ES Module export to CommonJS for Node execution
const commonJSLocalesContent = localesFileContent
  .replace(/export const locales =/g, 'module.exports =')
  .replace(/const FR =/g, 'const FR =')
  .replace(/const EN =/g, 'const EN =')
  .replace(/const ES =/g, 'const ES =');

// Temporary file for requiring
const tempLocalesPath = path.join(__dirname, 'temp-locales.js');
fs.writeFileSync(tempLocalesPath, commonJSLocalesContent, 'utf8');
const locales = require(tempLocalesPath);
fs.unlinkSync(tempLocalesPath);

const t = locales.FR; // Pre-render French as default

// Helper to generate features list HTML for pricing cards
function getFeaturesListHTML(features) {
  return features.map(f => `
    <li class="flex items-start gap-2.5 text-xs">
      <i data-lucide="check-circle-2" class="w-4 h-4 shrink-0 mt-0.5 text-emerald-500"></i>
      <span>${f}</span>
    </li>
  `).join('');
}

// 2. Define the static HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <!-- Vrai logo AutoCompt (512x512, fond noir plein, aucune marge transparente)
       — remplace un petit contour de maison en SVG qui n'avait aucun rapport
       avec la marque et qui apparaissait minuscule dans les résultats Google. -->
  <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AutoCompt | Logiciel de comptabilité & gestion immobilière Québec</title>
  <meta name="description" content="AutoCompt: La solution de gestion comptable et immobilière de référence au Québec. Conçue pour les propriétaires de Plex, gestionnaires et syndicats de copropriété.">
  <meta name="keywords" content="AutoCompt, Gestion immobilière, Quebec, logiciel de comptabilité immobilier Québec, gestion syndicat de copropriété, travailleur autonome, impôts fonciers, Plex, triplex, déclaration fiscale, Loi 25">
  
  <!-- Open Graph -->
  <meta property="og:title" content="AutoCompt | Logiciel de comptabilité immobilier Québec">
  <meta property="og:description" content="AutoCompt: La solution immobilière de référence au Québec. Le logiciel de comptabilité conçu pour les travailleurs autonomes, propriétaires de plex et syndicats.">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="AutoCompt">

  <!-- Google Font: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          borderRadius: {
            '3xl': '24px',
            '4xl': '32px',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons Library CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* Glassmorphism custom classes */
    .glassmorphism {
      background: rgba(24, 24, 27, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .glassmorphism-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    /* Glow custom borders and dropshadows */
    .glow-emerald {
      box-shadow: 0 0 40px -10px rgba(16, 185, 129, 0.15);
    }
    .glow-rose {
      box-shadow: 0 0 40px -10px rgba(244, 63, 94, 0.15);
    }
    .glow-primary {
      box-shadow: 0 0 50px -12px rgba(99, 102, 241, 0.2);
    }
    /* Scanner bar animation */
    @keyframes scanAnimation {
      0% { top: 0%; }
      50% { top: 100%; }
      100% { top: 0%; }
    }
    .animate-scan {
      animation: scanAnimation 3.5s ease-in-out infinite;
    }
    @keyframes fadeInAnimation {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeInAnimation 0.4s ease-out forwards;
    }
    @keyframes slideDownAnimation {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideDown {
      animation: slideDownAnimation 0.3s ease-out forwards;
    }
    .animate-spin-slow {
      animation: spin 8s linear infinite;
    }
  </style>
</head>
<body class="font-sans antialiased text-slate-900 bg-slate-50 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100" id="main-body">

  <!-- MAIN APP CONTAINER -->
  <div id="app-container" class="min-h-screen relative overflow-x-hidden">
    
    <!-- BACKGROUND GLOW DECORATIONS -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
      <div id="glow-left" class="absolute top-[-20%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 bg-emerald-300/30 dark:bg-emerald-500/20"></div>
      <div id="glow-right" class="absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-20 bg-indigo-300/30 dark:bg-indigo-500/20"></div>
    </div>

    <!-- NAVIGATION BAR -->
    <nav class="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/70 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#" class="group flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-9 h-9" fill="none">
            <!-- Background black squircle -->
            <path d="M 64,4 C 108,4 124,20 124,64 C 124,108 108,124 64,124 C 20,124 4,108 4,64 C 4,20 20,4 64,4 Z" fill="#000000" stroke="#059669" stroke-width="2" stroke-opacity="0.2"/>
            <g transform="translate(28, 28) scale(3)" stroke-linejoin="round">
              <path d="m12 3-1.9 5.8c-.1.3-.4.6-.7.7L3.6 12l5.8 1.9c.3.1.6.4.7.7L12 21l1.9-5.8c.1-.3.4-.6.7-.7l5.8-1.9-5.8-1.9c-.3-.1-.6-.4-.7-.7L12 3z" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              <path d="M18 4.5v3M16.5 6h3" stroke="#10b981" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="6" cy="18" r="1.5" stroke="#10b981" stroke-width="1.5" fill="none"/>
            </g>
          </svg>
          <span class="font-black italic tracking-tighter uppercase text-lg text-slate-800 dark:text-zinc-100">
            AutoCompt
          </span>
        </a>

        <!-- Desktop Nav Items -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500" data-t="nav.features">${t.nav.features}</a>
          <a href="#profiles" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500">Profils</a>
          <a href="#deepdive" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500" data-t="nav.deepDive">${t.nav.deepDive}</a>
          <a href="#simulators" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500" data-t="nav.simulators">${t.nav.simulators}</a>
          <a href="#pricing" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500" data-t="nav.pricing">${t.nav.pricing}</a>
          <a href="#faq" class="font-medium text-sm transition-colors text-slate-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500" data-t="nav.faq">${t.nav.faq}</a>
        </div>

        <!-- Controls & CTAs -->
        <div class="hidden md:flex items-center gap-4">
          
          <!-- Language Selector Dropdown -->
          <div class="relative">
            <button id="lang-btn" onclick="toggleLangDropdown()" class="flex items-center gap-1.5 px-3 h-10 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors uppercase dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300 dark:hover:bg-zinc-800/80">
              <i data-lucide="globe" class="w-3.5 h-3.5"></i>
              <span id="current-lang-label">FR</span>
              <i data-lucide="chevron-down" class="w-3 h-3 opacity-60"></i>
            </button>
            <div id="lang-dropdown" class="hidden absolute right-0 mt-2 w-28 rounded-xl shadow-lg border overflow-hidden transition-all z-50 bg-white border-slate-200 text-slate-800 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300">
              <button onclick="changeLanguage('FR')" class="w-full text-left px-4 py-2 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-between text-emerald-500 font-bold">
                Français
                <i data-lucide="check-circle-2" id="check-fr" class="w-3 h-3 text-emerald-500"></i>
              </button>
              <button onclick="changeLanguage('EN')" class="w-full text-left px-4 py-2 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-between">
                English
                <i data-lucide="check-circle-2" id="check-en" class="w-3 h-3 text-emerald-500 hidden"></i>
              </button>
              <button onclick="changeLanguage('ES')" class="w-full text-left px-4 py-2 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-between">
                Español
                <i data-lucide="check-circle-2" id="check-es" class="w-3 h-3 text-emerald-500 hidden"></i>
              </button>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button id="theme-btn" onclick="toggleTheme()" class="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600 hover:bg-slate-100 transition-colors dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-yellow-400 dark:hover:bg-zinc-800" aria-label="Toggle theme">
            <i data-lucide="moon" id="theme-icon-moon"></i>
            <i data-lucide="sun" id="theme-icon-sun" class="hidden"></i>
          </button>

          <!-- App Actions -->
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-lg shadow-emerald-500/25 flex items-center gap-1.5">
            <span data-t="pricing.cta">${t.pricing.cta}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </a>

        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center gap-3">
          <button onclick="toggleTheme()" class="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-yellow-400">
            <i data-lucide="moon" id="mobile-theme-icon-moon" class="w-4 h-4"></i>
            <i data-lucide="sun" id="mobile-theme-icon-sun" class="w-4 h-4 hidden"></i>
          </button>

          <button onclick="toggleMobileMenu()" class="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <i data-lucide="menu" id="mobile-menu-hamburger" class="w-5 h-5"></i>
            <i data-lucide="x" id="mobile-menu-close" class="w-5 h-5 hidden"></i>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-drawer" class="hidden md:hidden px-6 pb-6 border-b border-slate-200 bg-slate-50 flex flex-col gap-4 animate-fadeIn transition-colors duration-300 dark:bg-zinc-950 dark:border-zinc-850">
        <a href="#features" onclick="toggleMobileMenu()" class="font-semibold text-sm py-2 text-slate-700 dark:text-zinc-300" data-t="nav.features">${t.nav.features}</a>
        <a href="#deepdive" onclick="toggleMobileMenu()" class="font-semibold text-sm py-2 text-slate-700 dark:text-zinc-300" data-t="nav.deepDive">${t.nav.deepDive}</a>
        <a href="#simulators" onclick="toggleMobileMenu()" class="font-semibold text-sm py-2 text-slate-700 dark:text-zinc-300" data-t="nav.simulators">${t.nav.simulators}</a>
        <a href="#pricing" onclick="toggleMobileMenu()" class="font-semibold text-sm py-2 text-slate-700 dark:text-zinc-300" data-t="nav.pricing">${t.nav.pricing}</a>
        <a href="#faq" onclick="toggleMobileMenu()" class="font-semibold text-sm py-2 text-slate-700 dark:text-zinc-300" data-t="nav.faq">${t.nav.faq}</a>
        
        <div class="h-px bg-slate-200 dark:bg-zinc-800/60 my-2"></div>

        <!-- Language selectors in mobile menu -->
        <div class="flex gap-2 items-center">
          <span class="text-xs font-bold mr-2 text-slate-400 dark:text-zinc-500">Lang:</span>
          <button onclick="changeLanguage('FR')" id="mobile-lang-fr" class="px-3 py-1 text-xs font-bold rounded-lg border bg-emerald-500 text-white border-emerald-500">FR</button>
          <button onclick="changeLanguage('EN')" id="mobile-lang-en" class="px-3 py-1 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 bg-white dark:border-zinc-800 dark:text-zinc-400 dark:bg-zinc-900/60">EN</button>
          <button onclick="changeLanguage('ES')" id="mobile-lang-es" class="px-3 py-1 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 bg-white dark:border-zinc-800 dark:text-zinc-400 dark:bg-zinc-900/60">ES</button>
        </div>

        <div class="flex flex-col gap-3 mt-4">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/25 block">
            <span data-t="pricing.cta">${t.pricing.cta}</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative z-10 pt-10 pb-20 md:pt-16 md:pb-28 max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero Left Block -->
        <div class="lg:col-span-7 text-left space-y-6">
          
          <!-- Promo Tag -->
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-rose-200/50 bg-rose-50 shadow-sm animate-pulse dark:bg-rose-950/30 dark:border-rose-900/40">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span>
            <span class="text-[10px] uppercase font-black tracking-wider text-rose-700 dark:text-rose-400" data-t="hero.badge">
              ${t.hero.badge}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 dark:from-zinc-50 dark:via-zinc-100 dark:to-zinc-400" data-t="hero.title">
            ${t.hero.title}
          </h1>

          <!-- Subtitle -->
          <p class="text-base md:text-lg max-w-2xl font-normal leading-relaxed text-slate-600 dark:text-zinc-400" data-t="hero.subtitle">
            ${t.hero.subtitle}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#pricing" class="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group">
              <span>Profiter de l'offre</span>
              <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>

          <!-- Info text -->
          <p class="text-xs font-medium flex items-center gap-2 text-slate-400 dark:text-zinc-500">
            <i data-lucide="check" class="w-4 h-4 text-emerald-500"></i>
            <span data-t="hero.info">${t.hero.info}</span>
          </p>

          <!-- Data Ownership Highlight — la promesse centrale d'AutoCompt : vous
               restez toujours propriétaire de vos données, organisées dans VOTRE
               propre Google Drive/OneDrive/Dropbox, jamais enfermées chez nous. -->
          <div class="inline-flex items-start gap-3 max-w-lg p-4 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 dark:bg-emerald-950/15 dark:border-emerald-500/20">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <i data-lucide="key-round" class="w-4 h-4"></i>
            </div>
            <p class="text-xs font-semibold leading-relaxed text-emerald-800 dark:text-emerald-300" data-t="hero.dataOwnership">
              ${t.hero.dataOwnership}
            </p>
          </div>

          <!-- Fast Stats Row -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/10 dark:border-zinc-800/50 max-w-lg">
            <div>
              <h3 class="text-xl md:text-2xl font-black text-emerald-500">6</h3>
              <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Profils immobiliers</p>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-black text-emerald-500">100%</h3>
              <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Conforme Québec</p>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-black text-emerald-500">30j</h3>
              <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Essai gratuit</p>
            </div>
          </div>

        </div>

        <!-- Right side Visual Mockup -->
        <div class="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
          <div class="absolute inset-[-20px] rounded-full blur-[60px] opacity-30 bg-emerald-300/30 dark:bg-emerald-500/20 pointer-events-none"></div>

          <div class="relative mx-auto max-w-[285px] w-full">
            
            <!-- Phone Frame -->
            <div class="relative mx-auto w-full aspect-[9/19] rounded-[48px] border-[12px] border-slate-950 bg-slate-950 shadow-2xl overflow-hidden ring-1 ring-slate-200 dark:border-zinc-900 dark:ring-zinc-800 dark:shadow-zinc-950/80 transition-all duration-300 hover:scale-[1.02]">
              <div class="absolute inset-0 rounded-[36px] border border-slate-800/20 dark:border-white/5 pointer-events-none z-20"></div>
              
              <!-- Dynamic Island -->
              <div class="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                <div class="w-2.5 h-2.5 rounded-full bg-[#101010] border border-[#202020]"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-[#080808]"></div>
              </div>
              
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
              
              <!-- Video -->
              <div class="w-full h-full bg-zinc-900 relative">
                <video class="w-full h-full object-cover select-none" src="./public/autocompt-demo.mp4" autoplay loop muted playsinline disablepictureinpicture></video>
              </div>
            </div>

            <!-- Floating Card 1 -->
            <div class="absolute top-[12%] -left-8 md:-left-12 rounded-2xl border p-3.5 shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] z-30 max-w-[190px] md:max-w-[210px] bg-white border-slate-200 text-slate-800 dark:bg-zinc-900/90 dark:border-zinc-800 dark:text-white dark:shadow-emerald-500/5">
              <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <i data-lucide="sparkles" class="w-4.5 h-4.5 text-emerald-500"></i>
              </div>
              <div>
                <p class="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Service Clé</p>
                <p class="text-[11px] font-bold leading-tight">Tenue de livres automatisée</p>
              </div>
            </div>

            <!-- Floating Card 2 -->
            <div class="absolute bottom-[10%] -right-8 md:-right-12 rounded-2xl border p-3.5 shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] z-30 max-w-[190px] md:max-w-[210px] bg-white border-slate-200 text-slate-800 dark:bg-zinc-900/90 dark:border-zinc-800 dark:text-white dark:shadow-indigo-500/5">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <i data-lucide="message-square" class="w-4.5 h-4.5 text-indigo-500"></i>
              </div>
              <div>
                <p class="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Support 24/7</p>
                <p class="text-[11px] font-bold leading-tight">Sofi, notre assistance intelligente 24/7</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- CORE FEATURES SECTION -->
    <section id="features" class="py-20 border-y border-slate-200 bg-slate-100/50 transition-colors duration-300 dark:bg-zinc-900/30 dark:border-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full" data-t="nav.features">
            ${t.nav.features}
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white" data-t="features.title">
            ${t.features.title}
          </h2>
          <p class="mt-3 text-base text-slate-600 dark:text-zinc-400" data-t="features.subtitle">
            ${t.features.subtitle}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <!-- Card 1 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <i data-lucide="receipt" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="features.scanner.title">${t.features.scanner.title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="features.scanner.desc">
              ${t.features.scanner.desc}
            </p>
          </div>

          <!-- Card 2 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
              <i data-lucide="calculator" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="features.taxes.title">${t.features.taxes.title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="features.taxes.desc">
              ${t.features.taxes.desc}
            </p>
          </div>

          <!-- Card 3 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
              <i data-lucide="lock" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="features.vault.title">${t.features.vault.title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="features.vault.desc">
              ${t.features.vault.desc}
            </p>
          </div>

          <!-- Card 4 — Tenue de livres par édifice, livrée à temps à votre comptable -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <i data-lucide="book-open" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="features.ledger.title">${t.features.ledger.title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="features.ledger.desc">
              ${t.features.ledger.desc}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- PROFILES SECTION — mêmes 6 profils et mêmes couleurs que dans l'application réelle
         (cyan=prospecteur, emerald=investisseur, amber=flippeur, indigo=gestionnaire,
         purple=syndicat, blue=comptable) -->
    <section id="profiles" class="py-24 max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
          6 Profils
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white" data-t="profiles.title">
          ${t.profiles.title}
        </h2>
        <p class="mt-3 text-base text-slate-600 dark:text-zinc-400" data-t="profiles.subtitle">
          ${t.profiles.subtitle}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Prospecteur — cyan -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-cyan-100 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5">
            <i data-lucide="compass" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.prospecteur.title">${t.profiles.prospecteur.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.prospecteur.desc">${t.profiles.prospecteur.desc}</p>
        </div>

        <!-- Investisseur — emerald -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
            <i data-lucide="building-2" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.investisseur.title">${t.profiles.investisseur.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.investisseur.desc">${t.profiles.investisseur.desc}</p>
        </div>

        <!-- Flippeur — amber -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5">
            <i data-lucide="hammer" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.flippeur.title">${t.profiles.flippeur.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.flippeur.desc">${t.profiles.flippeur.desc}</p>
        </div>

        <!-- Gestionnaire — indigo -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5">
            <i data-lucide="shield-check" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.gestionnaire.title">${t.profiles.gestionnaire.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.gestionnaire.desc">${t.profiles.gestionnaire.desc}</p>
        </div>

        <!-- Syndicat — purple -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5">
            <i data-lucide="landmark" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.syndicat.title">${t.profiles.syndicat.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.syndicat.desc">${t.profiles.syndicat.desc}</p>
        </div>

        <!-- Comptable — blue -->
        <div class="rounded-4xl p-7 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
          <div class="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
            <i data-lucide="file-spreadsheet" class="w-5.5 h-5.5"></i>
          </div>
          <h3 class="text-base font-bold mb-2 text-slate-900 dark:text-white" data-t="profiles.comptable.title">${t.profiles.comptable.title}</h3>
          <p class="text-xs leading-relaxed text-slate-600 dark:text-zinc-400" data-t="profiles.comptable.desc">${t.profiles.comptable.desc}</p>
        </div>

      </div>
    </section>

    <!-- INTERACTIVE SIMULATORS SECTION -->
    <section id="simulators" class="py-24 max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
          AutoCompt Interactif
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white" data-t="simulators.title">
          ${t.simulators.title}
        </h2>
        <p class="mt-3 text-base text-slate-600 dark:text-zinc-400" data-t="simulators.subtitle">
          ${t.simulators.subtitle}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Simulators: OCR & Magic Link -->
        <div class="lg:col-span-6 space-y-12">
          
          <!-- Widget 1: OCR Scanner -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white shadow-md dark:bg-zinc-900/60 dark:border-zinc-800 glow-emerald transition-all duration-300">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i data-lucide="receipt" class="w-5 h-5 text-emerald-500"></i>
                <span data-t="simulators.ocr.title">${t.simulators.ocr.title}</span>
              </h3>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                Démo IA
              </span>
            </div>

            <div class="space-y-4">
              <button id="ocr-btn" onclick="runOCRScan()" class="w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all">
                <i data-lucide="sparkles" class="w-4 h-4 animate-spin-slow"></i>
                <span data-t="simulators.ocr.btn">${t.simulators.ocr.btn}</span>
              </button>

              <!-- Scanning Overlay Animation -->
              <div id="ocr-scanning" class="hidden rounded-2xl p-6 border text-center relative overflow-hidden transition-all duration-300 bg-slate-50 border-slate-200 dark:bg-zinc-950/80 dark:border-zinc-800">
                <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-scan"></div>
                <p class="text-xs font-mono animate-pulse text-emerald-500" data-t="simulators.ocr.scanning">${t.simulators.ocr.scanning}</p>
                <div class="mt-2 space-y-1.5 max-w-[200px] mx-auto opacity-30">
                  <div class="h-3 bg-zinc-800 rounded animate-pulse"></div>
                  <div class="h-3 bg-zinc-800 rounded animate-pulse w-3/4"></div>
                  <div class="h-3 bg-zinc-800 rounded animate-pulse w-5/6"></div>
                </div>
              </div>

              <!-- OCR Scan Results -->
              <div id="ocr-result" class="hidden rounded-2xl p-5 border text-xs space-y-3 bg-slate-50 border-slate-200 dark:bg-zinc-950/60 dark:border-zinc-800 animate-fadeIn">
                <div class="flex items-center gap-2 text-emerald-500 font-bold text-[11px]">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                  <span data-t="simulators.ocr.success">${t.simulators.ocr.success}</span>
                </div>
                <div class="h-px bg-zinc-800/10 dark:bg-zinc-800/60"></div>
                
                <div class="grid grid-cols-2 gap-y-2.5 font-mono text-[11px]">
                  <div class="text-zinc-500" data-t="simulators.ocr.merchant">${t.simulators.ocr.merchant}:</div>
                  <div class="font-semibold text-right text-slate-800 dark:text-zinc-200" id="ocr-val-merchant">Rona L'Entrepôt</div>
                  
                  <div class="text-zinc-500" data-t="simulators.ocr.date">${t.simulators.ocr.date}:</div>
                  <div class="font-semibold text-right text-slate-800 dark:text-zinc-200" id="ocr-val-date">2026-06-02</div>
                  
                  <div class="text-zinc-500" data-t="simulators.ocr.subtotal">${t.simulators.ocr.subtotal}:</div>
                  <div class="font-semibold text-right text-slate-800 dark:text-zinc-200" id="ocr-val-subtotal">$345.50</div>
                  
                  <div class="text-emerald-600 dark:text-emerald-400 font-semibold" data-t="simulators.ocr.tps">${t.simulators.ocr.tps}:</div>
                  <div class="font-bold text-right text-emerald-600 dark:text-emerald-400" id="ocr-val-tps">$17.28</div>
                  
                  <div class="text-emerald-600 dark:text-emerald-400 font-semibold" data-t="simulators.ocr.tvq">${t.simulators.ocr.tvq}:</div>
                  <div class="font-bold text-right text-emerald-600 dark:text-emerald-400" id="ocr-val-tvq">$34.46</div>

                  <div class="col-span-2 h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-1"></div>

                  <div class="text-base font-extrabold text-slate-900 dark:text-white" data-t="simulators.ocr.total">${t.simulators.ocr.total}:</div>
                  <div class="text-base font-extrabold text-right text-slate-900 dark:text-white" id="ocr-val-total">$397.24</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Widget 2: Magic Link Generator -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white shadow-md dark:bg-zinc-900/60 dark:border-zinc-800 transition-all duration-300">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i data-lucide="file-text" class="w-5 h-5 text-indigo-500"></i>
                <span data-t="simulators.magic.title">${t.simulators.magic.title}</span>
              </h3>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
                Relevé 31
              </span>
            </div>
            <p class="text-xs mb-4 leading-relaxed text-slate-600 dark:text-zinc-400" data-t="simulators.magic.desc">
              ${t.simulators.magic.desc}
            </p>

            <form onsubmit="generateMagicLink(event)" class="space-y-4">
              <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5" data-t="simulators.magic.emailLabel">
                  ${t.simulators.magic.emailLabel}
                </label>
                <input type="email" id="magic-email-input" required placeholder="locataire@monimmeuble.ca" class="w-full px-4 py-3 rounded-xl border text-xs outline-none bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100">
              </div>

              <button type="submit" id="magic-btn" class="w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 active:scale-[0.98] transition-all">
                <i data-lucide="lock" class="w-4 h-4"></i>
                <span data-t="simulators.magic.btn">${t.simulators.magic.btn}</span>
              </button>
            </form>

            <div id="magic-generating" class="hidden mt-4 flex items-center justify-center gap-2.5 py-6">
              <div class="w-5 h-5 rounded-full border-[3px] border-indigo-500 border-t-transparent animate-spin"></div>
              <span class="text-xs font-mono text-indigo-500 animate-pulse" data-t="simulators.magic.generating">${t.simulators.magic.generating}</span>
            </div>

            <!-- Magic Link Output -->
            <div id="magic-result" class="hidden mt-4 rounded-2xl p-4 border text-xs space-y-3 bg-slate-50 border-slate-200 dark:bg-zinc-950/60 dark:border-zinc-800 animate-fadeIn transition-colors duration-300">
              <p class="font-extrabold text-emerald-500 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                <span data-t="simulators.magic.success">${t.simulators.magic.success}</span>
              </p>
              
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-500 block mb-1" data-t="simulators.magic.previewLabel">
                  ${t.simulators.magic.previewLabel}
                </span>
                <div class="p-3 rounded-lg border font-mono text-[10px] select-all break-all overflow-x-auto bg-white border-slate-200 text-indigo-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-indigo-300" id="magic-generated-link">
                  https://app.autocompt.ca/sign/confirmation-releve31?token=xyz...
                </div>
              </div>

              <button onclick="copyMagicLink()" id="magic-copy-btn" class="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:text-zinc-300 dark:border-zinc-800">
                <i data-lucide="copy" class="w-4 h-4" id="copy-icon"></i>
                <i data-lucide="check" class="w-4 h-4 text-white hidden" id="check-icon"></i>
                <span id="magic-copy-label" data-t="simulators.magic.actionBtn">${t.simulators.magic.actionBtn}</span>
              </button>
            </div>
          </div>

        </div>

        <!-- Right Simulators: Mobile Signature (DocuLegal) -->
        <div class="lg:col-span-6">
          <div class="rounded-4xl p-8 border border-slate-200 bg-white shadow-md dark:bg-zinc-900/60 dark:border-zinc-800 glow-rose transition-all duration-300 h-full">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i data-lucide="smartphone" class="w-5 h-5 text-rose-500"></i>
                <span data-t="simulators.sign.title">${t.simulators.sign.title}</span>
              </h3>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400">
                DocuLegal
              </span>
            </div>
            <p class="text-xs mb-6 leading-relaxed text-slate-600 dark:text-zinc-400" data-t="simulators.sign.desc">
              ${t.simulators.sign.desc}
            </p>

            <form onsubmit="runSignDemo(event)" class="space-y-4">
              <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5" data-t="simulators.sign.nameLabel">
                  ${t.simulators.sign.nameLabel}
                </label>
                <input type="text" id="sign-name-input" required placeholder="Jean Tremblay" class="w-full px-4 py-3 rounded-xl border text-xs outline-none bg-slate-50 border-slate-200 text-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100">
              </div>

              <button type="submit" id="sign-btn" class="w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/25 active:scale-[0.98] transition-all">
                <i data-lucide="pen-tool" class="w-4 h-4"></i>
                <span data-t="simulators.sign.btn">${t.simulators.sign.btn}</span>
              </button>
            </form>

            <div id="sign-generating" class="hidden mt-4 flex items-center justify-center gap-2.5 py-6">
              <div class="w-5 h-5 rounded-full border-[3px] border-rose-500 border-t-transparent animate-spin"></div>
              <span class="text-xs font-mono text-rose-500 animate-pulse" data-t="simulators.sign.generating">${t.simulators.sign.generating}</span>
            </div>

            <div id="sign-result" class="hidden mt-4 rounded-2xl p-5 border text-xs space-y-3 bg-slate-50 border-slate-200 dark:bg-zinc-950/60 dark:border-zinc-800 animate-fadeIn">
              <p class="font-extrabold text-emerald-500 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                <span data-t="simulators.sign.success">${t.simulators.sign.success}</span>
              </p>
              <div class="h-px bg-zinc-800/10 dark:bg-zinc-800/60"></div>
              <div class="grid grid-cols-1 gap-y-2 font-mono text-[10px]">
                <div class="flex justify-between">
                  <span class="text-zinc-500" data-t="simulators.sign.signedBy">${t.simulators.sign.signedBy}:</span>
                  <span class="font-semibold text-slate-800 dark:text-zinc-200" id="sign-val-name">Jean Tremblay</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-500" data-t="simulators.sign.timestamp">${t.simulators.sign.timestamp}:</span>
                  <span class="font-semibold text-slate-800 dark:text-zinc-200" id="sign-val-time">—</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-500" data-t="simulators.sign.hash">${t.simulators.sign.hash}:</span>
                  <span class="font-semibold text-rose-600 dark:text-rose-400" id="sign-val-hash">—</span>
                </div>
              </div>
            </div>

            <p class="text-[10px] font-semibold mt-5 leading-relaxed text-slate-400 dark:text-zinc-500" data-t="simulators.sign.footnote">
              ${t.simulators.sign.footnote}
            </p>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- FEATURES DEEP DIVE SECTION -->
    <section id="deepdive" class="py-24 border-y border-slate-200 bg-slate-100/50 transition-colors duration-300 dark:bg-zinc-900/30 dark:border-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full" data-t="deepdive.title">
            ${t.deepdive.title}
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
            L'écosystème transparent de confiance
          </h2>
          <p class="mt-3 text-base text-slate-600 dark:text-zinc-400" data-t="deepdive.subtitle">
            ${t.deepdive.subtitle}
          </p>
        </div>

        <div class="space-y-24">
          
          <!-- Row 1: Magic Links -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 space-y-6 text-left">
              <span class="text-[10px] uppercase font-black tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full">
                Accès sécurisé par compte
              </span>
              <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white" data-t="deepdive.magic.title">
                ${t.deepdive.magic.title}
              </h3>
              <p class="text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-400" data-t="deepdive.magic.desc">
                ${t.deepdive.magic.desc}
              </p>
              <div class="flex gap-4">
                <div class="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i> Relevés scellés, jamais modifiables
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 flex justify-center">
              <div class="w-full max-w-[480px] rounded-4xl border border-slate-200 bg-white p-8 shadow-xl relative overflow-hidden dark:bg-zinc-900/60 dark:border-zinc-800">
                <div class="absolute top-0 right-0 p-4 opacity-15">
                  <i data-lucide="user-check" class="w-32 h-32 text-indigo-500"></i>
                </div>

                <!-- Flow Chart Mockup -->
                <div class="space-y-4 relative z-10 text-xs text-left">

                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">1</div>
                    <div class="flex-1 p-3 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-zinc-950/80 dark:border-zinc-850">
                      <p class="font-bold">Gestionnaire immobilier</p>
                      <p class="text-[10px] text-zinc-500">Invite un client propriétaire par courriel</p>
                    </div>
                  </div>

                  <div class="h-6 w-0.5 bg-indigo-500/30 ml-4"></div>

                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">2</div>
                    <div class="flex-1 p-3 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-zinc-950/80 dark:border-zinc-850">
                      <p class="font-bold">Le propriétaire se connecte</p>
                      <p class="text-[10px] text-indigo-500 font-mono">Avec son propre compte AutoCompt</p>
                    </div>
                  </div>

                  <div class="h-6 w-0.5 bg-indigo-500/30 ml-4"></div>

                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">3</div>
                    <div class="flex-1 p-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                      <p class="font-bold text-emerald-500">Accès permanent à ses relevés</p>
                      <p class="text-[10px] text-emerald-600/80">Uniquement ses propres données, en tout temps</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <!-- Row 2: Google Drive -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 flex justify-center order-last lg:order-first">
              <div class="w-full max-w-[480px] rounded-4xl border border-slate-200 bg-white p-8 shadow-xl relative overflow-hidden dark:bg-zinc-900/60 dark:border-zinc-800">
                
                <!-- Drive Tree Mockup -->
                <div class="space-y-4 text-left">
                  <div class="flex items-center justify-between pb-3 border-b border-zinc-800/10 dark:border-zinc-800/60">
                    <div class="flex items-center gap-2">
                      <i data-lucide="database" class="w-5 h-5 text-yellow-500"></i>
                      <span class="font-bold text-sm text-slate-800 dark:text-zinc-200">Google Drive: AutoCompt</span>
                    </div>
                    <span class="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Synchronisé</span>
                  </div>

                  <!-- Folder Structure — un dossier par client, puis par édifice -->
                  <div class="space-y-2 text-xs font-mono">

                    <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                      <span class="text-yellow-500">📁</span>
                      <span class="font-semibold text-slate-800 dark:text-zinc-300">Client_Tremblay/</span>
                    </div>

                    <div class="pl-6 space-y-2">
                      <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                        <span class="text-yellow-500">📁</span>
                        <span class="text-zinc-500">102_Rue_Chambly/</span>
                      </div>
                      <div class="flex items-center justify-between p-2 rounded-lg bg-zinc-500/5 border border-zinc-500/10 ml-4">
                        <span class="text-zinc-500">📄 2026-06-02_Rona_345.50_tps_tvq.pdf</span>
                        <span class="text-[9px] text-zinc-500 font-bold">128 KB</span>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                      <span class="text-yellow-500">📁</span>
                      <span class="font-semibold text-slate-800 dark:text-zinc-300">Client_Gagnon/</span>
                    </div>

                    <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                      <span class="text-yellow-500">📁</span>
                      <span class="font-semibold text-slate-800 dark:text-zinc-300">DocuLegal_Contrats/</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div class="lg:col-span-6 space-y-6 text-left">
              <span class="text-[10px] uppercase font-black tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
                Zéro Vendor Lock-In
              </span>
              <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white" data-t="deepdive.drive.title">
                ${t.deepdive.drive.title}
              </h3>
              <p class="text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-400" data-t="deepdive.drive.desc">
                ${t.deepdive.drive.desc}
              </p>
              <div class="flex gap-4">
                <div class="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i> Vous restez propriétaire de chaque fichier
                </div>
              </div>
            </div>

          </div>

          <!-- Row 3: DocuLegal -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 space-y-6 text-left">
              <span class="text-[10px] uppercase font-black tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
                Gestion Documentaire Intelligente
              </span>
              <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white" data-t="deepdive.doculegal.title">
                ${t.deepdive.doculegal.title}
              </h3>
              <p class="text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-400" data-t="deepdive.doculegal.desc">
                ${t.deepdive.doculegal.desc}
              </p>
              <div class="flex gap-4">
                <div class="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i> Archivage Cloud automatisé conforme
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 flex justify-center">
              <div class="w-full max-w-[480px] rounded-4xl border border-slate-200 bg-white p-8 shadow-xl relative overflow-hidden dark:bg-zinc-900/60 dark:border-zinc-800">
                <div class="absolute top-0 right-0 p-4 opacity-15">
                  <i data-lucide="folder-open" class="w-32 h-32 text-emerald-500"></i>
                </div>
                
                <div class="space-y-4 relative z-10 text-xs text-left">
                  <div class="flex items-center justify-between pb-3 border-b border-zinc-800/10 dark:border-zinc-800/60">
                    <div class="flex items-center gap-2">
                      <i data-lucide="shield-check" class="w-5 h-5 text-emerald-500"></i>
                      <span class="font-bold text-sm text-slate-800 dark:text-zinc-200">Promesse_Achat_Chambly.pdf</span>
                    </div>
                    <span class="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Classé & Sécurisé</span>
                  </div>
                  
                  <div class="space-y-2">
                    <p class="font-bold text-slate-700 dark:text-zinc-300">Journal d'organisation :</p>
                    <div class="p-3.5 rounded-2xl bg-zinc-500/5 border border-zinc-500/10 dark:border-zinc-800/60 font-mono text-[10px] space-y-1">
                      <p class="text-zinc-500">📅 2026-06-04 18:34 - Importé dans l'espace Cloud</p>
                      <p class="text-zinc-500">📍 Dossier: Cloud / 102_Rue_Chambly / Contrats</p>
                      <p class="text-zinc-500">✓ Type identifié: Promesse d'achat</p>
                      <p class="text-emerald-500 font-bold">🔒 Chiffrement de stockage validé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- AI SUPPORT SECTION -->
    <section id="support" class="py-20 border-b border-slate-200 bg-slate-100/50 transition-colors duration-300 dark:bg-zinc-900/30 dark:border-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
            Assistance Intelligente
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white" data-t="support.title">
            ${t.support.title}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Benefit 1 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <i data-lucide="message-square" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="support.card1Title">${t.support.card1Title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="support.card1Desc">
              ${t.support.card1Desc}
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
              <i data-lucide="cpu" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="support.card2Title">${t.support.card2Title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="support.card2Desc">
              ${t.support.card2Desc}
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="rounded-4xl p-8 border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-800 dark:hover:bg-zinc-900/80 dark:hover:border-zinc-700/80">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
              <i data-lucide="sparkles" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white" data-t="support.card3Title">${t.support.card3Title}</h3>
            <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400" data-t="support.card3Desc">
              ${t.support.card3Desc}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- PRICING SECTION -->
    <section id="pricing" class="py-24 max-w-7xl mx-auto px-6">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full" data-t="nav.pricing">
          ${t.nav.pricing}
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white" data-t="pricing.title">
          ${t.pricing.title}
        </h2>
        <p class="mt-3 text-base text-slate-600 dark:text-zinc-400" data-t="pricing.subtitle">
          ${t.pricing.subtitle}
        </p>

        <!-- Beta Program Banner -->
        <div class="mt-6 max-w-2xl mx-auto rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 dark:bg-emerald-950/10 dark:border-emerald-500/20 shadow-sm flex items-center justify-center gap-3">
          <i data-lucide="sparkles" class="w-5 h-5 text-emerald-500 shrink-0"></i>
          <p class="text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-400 text-left" data-t="pricing.betaInfo">
            ${t.pricing.betaInfo}
          </p>
        </div>

        <!-- Audience Selector Toggle -->
        <div class="flex justify-center mb-6 mt-6">
          <div class="inline-flex rounded-2xl p-1 border border-slate-200 bg-slate-100 dark:bg-zinc-900/60 dark:border-zinc-800">
            <button onclick="setAudience('owners')" id="audience-owners-btn" class="px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
              <span data-t="pricing.ownersToggle">${t.pricing.ownersToggle}</span>
            </button>
            <button onclick="setAudience('syndicates')" id="audience-syndicates-btn" class="px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase text-slate-500 dark:text-zinc-400 hover:text-emerald-500">
              <span data-t="pricing.syndicatesToggle">${t.pricing.syndicatesToggle}</span>
            </button>
          </div>
        </div>

        <!-- Billing Switch -->
        <div class="flex items-center justify-center gap-4 mt-6">
          <span class="text-xs font-bold text-slate-500 dark:text-zinc-500" id="billing-monthly-label" data-t="pricing.monthly">
            ${t.pricing.monthly}
          </span>
          
          <button onclick="toggleBillingCycle()" class="w-14 h-8 rounded-full transition-colors flex items-center px-1 bg-slate-300 dark:bg-zinc-800" id="billing-toggle-btn">
            <div class="w-6 h-6 rounded-full bg-emerald-500 transition-transform translate-x-6" id="billing-toggle-knob"></div>
          </button>

          <span class="text-xs font-bold flex items-center gap-1.5 text-emerald-500" id="billing-annual-label">
            <span data-t="pricing.annual">${t.pricing.annual}</span>
            <span class="text-[10px] uppercase font-black tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-800/20" data-t="pricing.save">
              ${t.pricing.save}
            </span>
          </span>
        </div>

      </div>

      <!-- Pricing Cards Grids -->
      
      <!-- Owners Grid (default visible) -->
      <div id="pricing-owners-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-center mx-auto max-w-6xl">
        
        <!-- Card 1: Portes Ouvertes -->
        <div class="rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 shadow-sm bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/10 dark:border-emerald-800/40 hover:bg-emerald-100/30 dark:hover:bg-emerald-950/20 hover:scale-[1.01] hover:shadow-lg">
          <div>
            <span class="text-[10px] uppercase font-black tracking-wider block mb-2 text-slate-500 dark:text-zinc-500">1 à 4 portes</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Portes Ouvertes</h3>
            <p class="text-xs mt-2 leading-relaxed text-slate-500 dark:text-zinc-400">Spécialement conçu pour les Propriétaires de Plex (jusqu'à 4 portes) et Travailleurs autonomes. Sofi, notre assistance intelligente, disponible 24/7.</p>
            
            <div class="my-6">
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-mono text-slate-900 dark:text-white">$0</span>
                <span class="text-sm text-slate-400 dark:text-zinc-500 line-through font-semibold font-mono" id="price-owner-1">$14.99</span>
                <span class="text-xs font-medium text-slate-500 dark:text-zinc-400" id="period-owner-1">/ mois</span>
              </div>
              <div class="text-[10px] font-bold mt-1 text-emerald-600 dark:text-emerald-400" id="yearly-billing-owner-1">Facturé 179.91$ / an</div>
              <div class="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse" data-t="pricing.betaPromoTag">
                ${t.pricing.betaPromoTag}
              </div>
            </div>

            <div class="h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-6"></div>

            <ul class="space-y-3.5 font-medium" id="features-list-owner-1">
              ${getFeaturesListHTML(t.pricing.proprietaires[0].features)}
            </ul>
          </div>

          <div>
            <div class="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25">
                <span data-t="pricing.cta">${t.pricing.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Card 2: Pro (Premium / Recommended Card) -->
        <div class="rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 bg-zinc-950 text-white border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)] hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.35)]">
          <div class="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-amber-300/20 animate-pulse z-10">
            Recommandé
          </div>
          <div>
            <span class="text-[10px] uppercase font-black tracking-wider block mb-2 text-emerald-400 mt-2">Jusqu'à 15 portes</span>
            <h3 class="text-xl font-bold text-white">Pro</h3>
            <p class="text-xs mt-2 leading-relaxed text-zinc-300">Une solution complète pour vos investissements. Sofi, notre assistance intelligente, disponible 24/7.</p>
            
            <div class="my-6">
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-mono text-white">$0</span>
                <span class="text-sm text-zinc-400 line-through font-semibold font-mono" id="price-owner-2">$26.24</span>
                <span class="text-xs font-medium text-zinc-400" id="period-owner-2">/ mois</span>
              </div>
              <div class="text-[10px] font-bold mt-1 text-emerald-400" id="yearly-billing-owner-2">Facturé 314.91$ / an</div>
              <div class="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse" data-t="pricing.betaPromoTag">
                ${t.pricing.betaPromoTag}
              </div>
            </div>

            <div class="h-px bg-emerald-500/20 my-6"></div>

            <ul class="space-y-3.5 font-medium" id="features-list-owner-2">
              ${getFeaturesListHTML(t.pricing.proprietaires[1].features)}
            </ul>
          </div>

          <div>
            <div class="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-zinc-950 font-black shadow-lg shadow-amber-400/25">
                <span data-t="pricing.cta">${t.pricing.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Card 3: Multi-Entreprise -->
        <div class="rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 shadow-sm bg-purple-50/40 border-purple-200 dark:bg-purple-950/10 dark:border-purple-800/40 hover:bg-purple-100/30 dark:hover:bg-purple-950/20 hover:scale-[1.01] hover:shadow-lg">
          <div>
            <span class="text-[10px] uppercase font-black tracking-wider block mb-2 text-slate-500 dark:text-zinc-500">Croissance optimale</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Multi-Entreprise</h3>
            <p class="text-xs mt-2 leading-relaxed text-slate-500 dark:text-zinc-400">Croissance optimale et partenariats. Sofi, notre assistance intelligente, disponible 24/7.</p>
            
            <div class="my-6">
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-mono text-slate-900 dark:text-white">$0</span>
                <span class="text-sm text-slate-400 dark:text-zinc-500 line-through font-semibold font-mono" id="price-owner-3">$37.49</span>
                <span class="text-xs font-medium text-slate-500 dark:text-zinc-400" id="period-owner-3">/ mois</span>
              </div>
              <div class="text-[10px] font-bold mt-1 text-emerald-600 dark:text-emerald-400" id="yearly-billing-owner-3">Facturé 449.91$ / an</div>
              <div class="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse" data-t="pricing.betaPromoTag">
                ${t.pricing.betaPromoTag}
              </div>
            </div>

            <div class="h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-6"></div>

            <ul class="space-y-3.5 font-medium" id="features-list-owner-3">
              ${getFeaturesListHTML(t.pricing.proprietaires[2].features)}
            </ul>
          </div>

          <div>
            <div class="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25">
                <span data-t="pricing.cta">${t.pricing.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Syndicats Grid (hidden by default) -->
      <div id="pricing-syndicates-grid" class="hidden grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center mx-auto max-w-4xl animate-fadeIn">
        
        <!-- Card 1: Syndicat Essentiel -->
        <div class="rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 shadow-sm bg-amber-50/40 border-amber-200 dark:bg-amber-950/10 dark:border-amber-800/40 hover:bg-amber-100/30 dark:hover:bg-amber-950/20 hover:scale-[1.01] hover:shadow-lg">
          <div>
            <span class="text-[10px] uppercase font-black tracking-wider block mb-2 text-slate-500 dark:text-zinc-500">Petites copropriétés</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Syndicat Essentiel</h3>
            <p class="text-xs mt-2 leading-relaxed text-slate-500 dark:text-zinc-400">Pour les petits et moyens syndicats de copropriété. Sofi, notre assistance intelligente, disponible 24/7.</p>
            
            <div class="my-6">
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-mono text-slate-900 dark:text-white">$0</span>
                <span class="text-sm text-slate-400 dark:text-zinc-500 line-through font-semibold font-mono" id="price-syndicate-1">$22.49</span>
                <span class="text-xs font-medium text-slate-500 dark:text-zinc-400" id="period-syndicate-1">/ mois</span>
              </div>
              <div class="text-[10px] font-bold mt-1 text-emerald-600 dark:text-emerald-400" id="yearly-billing-syndicate-1">Facturé 269.91$ / an</div>
              <div class="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse" data-t="pricing.betaPromoTag">
                ${t.pricing.betaPromoTag}
              </div>
            </div>

            <div class="h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-6"></div>

            <ul class="space-y-3.5 font-medium" id="features-list-syndicate-1">
              ${getFeaturesListHTML(t.pricing.syndicats[0].features)}
            </ul>
          </div>

          <div>
            <div class="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25">
                <span data-t="pricing.cta">${t.pricing.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Card 2: Syndicat Gestion Complète (Premium) -->
        <div class="rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 bg-zinc-950 text-white border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)] hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.35)]">
          <div class="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-amber-300/20 animate-pulse z-10">
            Recommandé
          </div>
          <div>
            <span class="text-[10px] uppercase font-black tracking-wider block mb-2 text-emerald-400 mt-2">Grands syndicats</span>
            <h3 class="text-xl font-bold text-white">Syndicat Gestion Complète</h3>
            <p class="text-xs mt-2 leading-relaxed text-zinc-300">Gouvernance et maintenance complètes du syndicat. Sofi, notre assistance intelligente, disponible 24/7.</p>
            
            <div class="my-6">
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-mono text-white">$0</span>
                <span class="text-sm text-zinc-400 line-through font-semibold font-mono" id="price-syndicate-2">$44.99</span>
                <span class="text-xs font-medium text-zinc-400" id="period-syndicate-2">/ mois</span>
              </div>
              <div class="text-[10px] font-bold mt-1 text-emerald-400" id="yearly-billing-syndicate-2">Facturé 539.91$ / an</div>
              <div class="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse" data-t="pricing.betaPromoTag">
                ${t.pricing.betaPromoTag}
              </div>
            </div>

            <div class="h-px bg-emerald-500/20 my-6"></div>

            <ul class="space-y-3.5 font-medium" id="features-list-syndicate-2">
              ${getFeaturesListHTML(t.pricing.syndicats[1].features)}
            </ul>
          </div>

          <div>
            <div class="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-zinc-950 font-black shadow-lg shadow-amber-400/25">
                <span data-t="pricing.cta">${t.pricing.cta}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>

    <!-- FAQ SECTION WITH ACCORDION -->
    <section id="faq" class="py-24 border-t border-slate-200 bg-slate-100/50 transition-colors duration-300 dark:bg-zinc-900/30 dark:border-zinc-900">
      <div class="max-w-4xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <span class="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
            Des réponses à vos questions
          </span>
          <h2 class="text-3xl font-extrabold mt-4 text-slate-900 dark:text-white" data-t="faq.title">
            ${t.faq.title}
          </h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-zinc-400" data-t="faq.subtitle">
            ${t.faq.subtitle}
          </p>
        </div>

        <div class="space-y-4">
          
          <!-- FAQ 1 -->
          <div class="rounded-3xl border border-slate-200 bg-white dark:bg-zinc-900/40 dark:border-zinc-800 transition-colors">
            <button onclick="toggleFaq(1)" class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none">
              <span data-t="faq.q1">${t.faq.q1}</span>
              <i data-lucide="chevron-down" id="faq-chevron-1" class="w-4 h-4 text-emerald-500 transition-transform duration-300"></i>
            </button>
            <div id="faq-answer-1" class="hidden px-6 pb-5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 animate-slideDown" data-t="faq.a1">
              ${t.faq.a1}
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="rounded-3xl border border-slate-200 bg-white dark:bg-zinc-900/40 dark:border-zinc-800 transition-colors">
            <button onclick="toggleFaq(2)" class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none">
              <span data-t="faq.q2">${t.faq.q2}</span>
              <i data-lucide="chevron-down" id="faq-chevron-2" class="w-4 h-4 text-emerald-500 transition-transform duration-300"></i>
            </button>
            <div id="faq-answer-2" class="hidden px-6 pb-5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 animate-slideDown" data-t="faq.a2">
              ${t.faq.a2}
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="rounded-3xl border border-slate-200 bg-white dark:bg-zinc-900/40 dark:border-zinc-800 transition-colors">
            <button onclick="toggleFaq(3)" class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none">
              <span data-t="faq.q3">${t.faq.q3}</span>
              <i data-lucide="chevron-down" id="faq-chevron-3" class="w-4 h-4 text-emerald-500 transition-transform duration-300"></i>
            </button>
            <div id="faq-answer-3" class="hidden px-6 pb-5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 animate-slideDown" data-t="faq.a3">
              ${t.faq.a3}
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="rounded-3xl border border-slate-200 bg-white dark:bg-zinc-900/40 dark:border-zinc-800 transition-colors">
            <button onclick="toggleFaq(4)" class="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none">
              <span data-t="faq.q4">${t.faq.q4}</span>
              <i data-lucide="chevron-down" id="faq-chevron-4" class="w-4 h-4 text-emerald-500 transition-transform duration-300"></i>
            </button>
            <div id="faq-answer-4" class="hidden px-6 pb-5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 animate-slideDown" data-t="faq.a4">
              ${t.faq.a4}
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- FINAL CALL TO ACTION banner -->
    <section class="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] bg-emerald-500/10 pointer-events-none"></div>

      <div class="rounded-4xl border border-slate-200 bg-white p-10 md:p-16 text-center max-w-5xl mx-auto relative z-10 dark:bg-zinc-900/80 dark:border-zinc-800 shadow-xl">
        <span class="text-[10px] uppercase font-black tracking-wider text-rose-700 bg-rose-100 dark:bg-rose-950/40 dark:text-rose-400 px-3.5 py-1.5 rounded-full" data-t="hero.badge">
          ${t.hero.badge}
        </span>
        
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 tracking-tight leading-tight">
          Prêt à simplifier votre fiscalité immobilière ?
        </h2>
        
        <p class="mt-4 text-sm md:text-base max-w-2xl mx-auto text-slate-600 dark:text-zinc-400">
          Rejoignez les premiers utilisateurs bêta du Québec — investisseurs, gestionnaires d'immeubles et syndicats de copropriété qui font confiance à AutoCompt pour leur comptabilité.
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-extrabold text-sm px-8 py-4.5 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
            <span data-t="pricing.cta">${t.pricing.cta}</span>
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>

        <p class="text-[10px] font-semibold mt-4 text-slate-400 dark:text-zinc-500">
          Calcul automatique TPS/TVQ • Zéro engagement • Support local au Québec
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 border-t border-slate-200 bg-slate-100 text-slate-500 transition-colors duration-300 dark:bg-zinc-950 dark:border-zinc-900 dark:text-zinc-500">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div class="md:col-span-5 space-y-4 text-left">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-6 h-6" fill="none">
              <!-- Background black squircle -->
              <path d="M 64,4 C 108,4 124,20 124,64 C 124,108 108,124 64,124 C 20,124 4,108 4,64 C 4,20 20,4 64,4 Z" fill="#000000"/>
              <g transform="translate(28, 28) scale(3)" stroke-linejoin="round">
                <path d="m12 3-1.9 5.8c-.1.3-.4.6-.7.7L3.6 12l5.8 1.9c.3.1.6.4.7.7L12 21l1.9-5.8c.1-.3.4-.6.7-.7l5.8-1.9-5.8-1.9c-.3-.1-.6-.4-.7-.7L12 3z" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 4.5v3M16.5 6h3" stroke="#10b981" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="6" cy="18" r="1.5" stroke="#10b981" stroke-width="1.5" fill="none"/>
              </g>
            </svg>
            <span class="font-black italic tracking-tighter uppercase text-md text-slate-800 dark:text-zinc-200">
              AutoCompt
            </span>
          </div>
          <p class="text-xs leading-relaxed max-w-sm" data-t="footer.tagline">
            ${t.footer.tagline}
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 mt-2 max-w-sm leading-normal">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 shrink-0 text-emerald-500"></i>
            <span>Données sécurisées • Conforme à la Loi 25 sur la protection des renseignements personnels au Québec.</span>
          </div>
        </div>

        <div class="md:col-span-2 space-y-3 text-left">
          <h4 class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Navigation</h4>
          <div class="flex flex-col gap-2 text-xs font-semibold">
            <a href="#features" class="hover:text-emerald-500 transition-colors" data-t="nav.features">${t.nav.features}</a>
            <a href="#deepdive" class="hover:text-emerald-500 transition-colors" data-t="nav.deepDive">${t.nav.deepDive}</a>
            <a href="#simulators" class="hover:text-emerald-500 transition-colors">Démo Live</a>
            <a href="#pricing" class="hover:text-emerald-500 transition-colors" data-t="nav.pricing">${t.nav.pricing}</a>
          </div>
        </div>

        <div class="md:col-span-2 space-y-3 text-left">
          <h4 class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Plateforme</h4>
          <div class="flex flex-col gap-2 text-xs font-semibold">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors" data-t="pricing.cta">${t.pricing.cta}</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors flex items-center gap-1">
              Status 
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </a>
          </div>
        </div>

        <div class="md:col-span-3 space-y-3 text-left">
          <h4 class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500" data-t="footer.legalTitle">${t.footer.legalTitle}</h4>
          <div class="flex flex-col gap-2 text-xs font-semibold">
            <a href="#" class="hover:text-emerald-500 transition-colors" data-t="footer.privacy">${t.footer.privacy}</a>
            <a href="#" class="hover:text-emerald-500 transition-colors" data-t="footer.terms">${t.footer.terms}</a>
            <a href="#" class="hover:text-emerald-500 transition-colors" data-t="footer.contact">${t.footer.contact}</a>
          </div>
        </div>

      </div>

      <div class="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-200 dark:border-zinc-900/60">
        <p class="text-[11px] leading-relaxed text-slate-400 dark:text-zinc-650 max-w-5xl mb-4 text-left" data-t="footer.legalNotice">
          ${t.footer.legalNotice}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold">
          <p data-t="footer.rights">${t.footer.rights}</p>
          <p data-t="footer.madeIn">${t.footer.madeIn}</p>
        </div>
      </div>
    </footer>

    <!-- STICKY CTA FLOATING BUTTON -->
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-[#059669] hover:bg-[#047857] active:scale-95 transition-all text-white font-bold text-xs md:text-sm px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-500/20 flex items-center gap-2 group">
      <span data-t="pricing.cta">${t.pricing.cta}</span>
      <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
    </a>

  </div>

  <!-- LOGO PREVIEW MODAL CANVAS (Isolated when ?logo-preview is checked) -->
  <div id="logo-preview-canvas" class="hidden min-h-screen bg-white flex flex-col items-center justify-center m-0 p-0 font-sans">
    <div class="flex flex-col items-center justify-center p-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="w-[360px] h-[360px] drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]" fill="none">
        <path d="M 64,4 C 108,4 124,20 124,64 C 124,108 108,124 64,124 C 20,124 4,108 4,64 C 4,20 20,4 64,4 Z" fill="#000000" stroke="#059669" stroke-width="2" stroke-opacity="0.25"/>
        <g transform="translate(28, 28) scale(3.0)" stroke-linejoin="round">
          <path d="m12 3-1.9 5.8c-.1.3-.4.6-.7.7L3.6 12l5.8 1.9c.3.1.6.4.7.7L12 21l1.9-5.8c.1-.3.4-.6.7-.7l5.8-1.9-5.8-1.9c-.3-.1-.6-.4-.7-.7L12 3z" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
          <path d="M18 4.5v3M16.5 6h3" stroke="#10b981" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="6" cy="18" r="1.5" stroke="#10b981" stroke-width="1.5" fill="none"/>
        </g>
      </svg>
      <span class="mt-8 text-2xl font-black italic tracking-tighter uppercase text-slate-800">
        AutoCompt
      </span>
    </div>
  </div>

  <!-- INLINE SCRIPTS FOR PAGE INTERACTIVITY -->
  <script>
    // 1. Embed locales dictionary directly in the client script
    const locales = ${JSON.stringify(locales, null, 2)};

    let currentLang = 'FR';
    let currentTheme = 'light';
    let billingCycle = 'annual'; // 'monthly' | 'annual'
    let pricingAudience = 'owners'; // 'owners' | 'syndicates'

    // Initialize Lucide Icons on load
    document.addEventListener("DOMContentLoaded", () => {
      // 2. Intercept Logo Preview Parameter
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('logo-preview')) {
        document.getElementById('app-container').classList.add('hidden');
        document.getElementById('logo-preview-canvas').classList.remove('hidden');
        document.getElementById('main-body').style.backgroundColor = '#ffffff';
        document.title = "AutoCompt | Logo Preview";
      }
      lucide.createIcons();
    });

    // Theme Toggling Logic
    function toggleTheme() {
      const root = document.documentElement;
      const themeIconMoon = document.getElementById('theme-icon-moon');
      const themeIconSun = document.getElementById('theme-icon-sun');
      const mobileThemeIconMoon = document.getElementById('mobile-theme-icon-moon');
      const mobileThemeIconSun = document.getElementById('mobile-theme-icon-sun');

      if (currentTheme === 'light') {
        currentTheme = 'dark';
        root.classList.add('dark');
        root.style.backgroundColor = '#09090b'; // zinc-955
        
        themeIconMoon.classList.add('hidden');
        themeIconSun.classList.remove('hidden');
        if (mobileThemeIconMoon && mobileThemeIconSun) {
          mobileThemeIconMoon.classList.add('hidden');
          mobileThemeIconSun.classList.remove('hidden');
        }
      } else {
        currentTheme = 'light';
        root.classList.remove('dark');
        root.style.backgroundColor = '#f8fafc'; // slate-50
        
        themeIconSun.classList.add('hidden');
        themeIconMoon.classList.remove('hidden');
        if (mobileThemeIconMoon && mobileThemeIconSun) {
          mobileThemeIconSun.classList.add('hidden');
          mobileThemeIconMoon.classList.remove('hidden');
        }
      }
    }

    // Language Dropdown Toggle
    function toggleLangDropdown() {
      const dropdown = document.getElementById('lang-dropdown');
      dropdown.classList.toggle('hidden');
    }

    // Close Dropdown on Click Outside
    window.addEventListener('click', (e) => {
      const langBtn = document.getElementById('lang-btn');
      const dropdown = document.getElementById('lang-dropdown');
      if (langBtn && !langBtn.contains(e.target) && dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    // Translate all components
    function getNestedValue(obj, path) {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    function changeLanguage(lang) {
      currentLang = lang;
      document.getElementById('current-lang-label').innerText = lang;
      
      // Update check marks in desktop dropdown
      ['FR', 'EN', 'ES'].forEach(l => {
        const check = document.getElementById('check-' + l.toLowerCase());
        const mobLang = document.getElementById('mobile-lang-' + l.toLowerCase());
        
        if (l === lang) {
          check.classList.remove('hidden');
          if (mobLang) {
            mobLang.className = "px-3 py-1 text-xs font-bold rounded-lg border bg-emerald-500 text-white border-emerald-500";
          }
        } else {
          check.classList.add('hidden');
          if (mobLang) {
            mobLang.className = "px-3 py-1 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 bg-white dark:border-zinc-800 dark:text-zinc-400 dark:bg-zinc-900/60";
          }
        }
      });

      // Close dropdown
      document.getElementById('lang-dropdown').classList.add('hidden');

      // Update translatable nodes
      const tDict = locales[lang];
      document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const text = getNestedValue(tDict, key);
        if (text) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
          } else {
            el.innerHTML = text;
          }
        }
      });

      // Update translatable lists (Pricing cards features)
      updatePricingFeatures(tDict);

      // Update dynamic price labels and promo badge text
      updatePricingCardsDisplay();
      
      // Re-trigger icon rendering
      lucide.createIcons();
    }

    function updatePricingFeatures(tDict) {
      // Owner 1
      const flOwner1 = document.getElementById('features-list-owner-1');
      if (flOwner1) {
        flOwner1.innerHTML = getFeaturesListJS(tDict.pricing.proprietaires[0].features);
      }
      // Owner 2
      const flOwner2 = document.getElementById('features-list-owner-2');
      if (flOwner2) {
        flOwner2.innerHTML = getFeaturesListJS(tDict.pricing.proprietaires[1].features);
      }
      // Owner 3
      const flOwner3 = document.getElementById('features-list-owner-3');
      if (flOwner3) {
        flOwner3.innerHTML = getFeaturesListJS(tDict.pricing.proprietaires[2].features);
      }
      // Syndicate 1
      const flSyndicate1 = document.getElementById('features-list-syndicate-1');
      if (flSyndicate1) {
        flSyndicate1.innerHTML = getFeaturesListJS(tDict.pricing.syndicats[0].features);
      }
      // Syndicate 2
      const flSyndicate2 = document.getElementById('features-list-syndicate-2');
      if (flSyndicate2) {
        flSyndicate2.innerHTML = getFeaturesListJS(tDict.pricing.syndicats[1].features);
      }
    }

    function getFeaturesListJS(features) {
      return features.map(f => \`
        <li class="flex items-start gap-2.5 text-xs">
          <i data-lucide="check-circle-2" class="w-4 h-4 shrink-0 mt-0.5 text-emerald-500"></i>
          <span>\${f}</span>
        </li>
      \`).join('');
    }

    // Toggle Mobile Drawer Menu
    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-drawer');
      const burger = document.getElementById('mobile-menu-hamburger');
      const close = document.getElementById('mobile-menu-close');
      
      const isOpen = !drawer.classList.contains('hidden');
      if (isOpen) {
        drawer.classList.add('hidden');
        close.classList.add('hidden');
        burger.classList.remove('hidden');
      } else {
        drawer.classList.remove('hidden');
        burger.classList.add('hidden');
        close.classList.remove('hidden');
      }
    }

    // OCR Receipt Simulator
    const mockReceipts = [
      { merchant: "Rona L'Entrepôt", subtotal: 345.50, date: "2026-06-02" },
      { merchant: "St-Hubert Resto-Bar", subtotal: 82.40, date: "2026-06-03" },
      { merchant: "Plomberie Dupont Inc.", subtotal: 875.00, date: "2026-05-28" }
    ];

    function runOCRScan() {
      const ocrBtn = document.getElementById('ocr-btn');
      const ocrScanning = document.getElementById('ocr-scanning');
      const ocrResult = document.getElementById('ocr-result');

      ocrBtn.disabled = true;
      ocrBtn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border', 'border-zinc-700');
      ocrBtn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600', 'text-white');
      
      ocrScanning.classList.remove('hidden');
      ocrResult.classList.add('hidden');

      const randomReceipt = mockReceipts[Math.floor(Math.random() * mockReceipts.length)];

      setTimeout(() => {
        const sub = randomReceipt.subtotal;
        const tps = parseFloat((sub * 0.05).toFixed(2));
        const tvq = parseFloat((sub * 0.09975).toFixed(2));
        const total = parseFloat((sub + tps + tvq).toFixed(2));

        document.getElementById('ocr-val-merchant').innerText = randomReceipt.merchant;
        document.getElementById('ocr-val-date').innerText = randomReceipt.date;
        document.getElementById('ocr-val-subtotal').innerText = '$' + sub.toFixed(2);
        document.getElementById('ocr-val-tps').innerText = '$' + tps.toFixed(2);
        document.getElementById('ocr-val-tvq').innerText = '$' + tvq.toFixed(2);
        document.getElementById('ocr-val-total').innerText = '$' + total.toFixed(2);

        ocrScanning.classList.add('hidden');
        ocrResult.classList.remove('hidden');
        
        ocrBtn.disabled = false;
        ocrBtn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border', 'border-zinc-700');
        ocrBtn.classList.add('bg-emerald-500', 'hover:bg-emerald-600', 'text-white');

        lucide.createIcons();
      }, 2200);
    }

    // Magic Link Generator
    let generatedLinkUrl = '';

    function generateMagicLink(e) {
      e.preventDefault();
      const email = document.getElementById('magic-email-input').value;
      if (!email) return;

      const btn = document.getElementById('magic-btn');
      const generating = document.getElementById('magic-generating');
      const result = document.getElementById('magic-result');

      btn.disabled = true;
      btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border', 'border-zinc-700');
      btn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700', 'text-white');

      generating.classList.remove('hidden');
      result.classList.add('hidden');

      setTimeout(() => {
        const secureToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        generatedLinkUrl = \`https://app.autocompt.ca/sign/confirmation-releve31?token=\${secureToken}&email=\${encodeURIComponent(email)}\`;

        document.getElementById('magic-generated-link').innerText = generatedLinkUrl;

        generating.classList.add('hidden');
        result.classList.remove('hidden');
        
        btn.disabled = false;
        btn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border', 'border-zinc-700');
        btn.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'text-white');

        // Reset copy button
        resetCopyButton();
        lucide.createIcons();
      }, 1800);
    }

    function copyMagicLink() {
      if (!generatedLinkUrl) return;
      navigator.clipboard.writeText(generatedLinkUrl).then(() => {
        const label = document.getElementById('magic-copy-label');
        const copyIcon = document.getElementById('copy-icon');
        const checkIcon = document.getElementById('check-icon');
        const copyBtn = document.getElementById('magic-copy-btn');

        label.innerText = locales[currentLang].simulators.magic.copied;
        copyBtn.className = "w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all bg-emerald-500 text-white";
        copyIcon.classList.add('hidden');
        checkIcon.classList.remove('hidden');

        setTimeout(() => {
          resetCopyButton();
        }, 3000);
      });
    }

    function resetCopyButton() {
      const label = document.getElementById('magic-copy-label');
      const copyIcon = document.getElementById('copy-icon');
      const checkIcon = document.getElementById('check-icon');
      const copyBtn = document.getElementById('magic-copy-btn');

      if (label && copyIcon && checkIcon && copyBtn) {
        label.innerText = locales[currentLang].simulators.magic.actionBtn;
        copyBtn.className = "w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:text-zinc-300 dark:border-zinc-800";
        copyIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        lucide.createIcons();
      }
    }

    // Mobile Signature Demo (DocuLegal) — simulates signing a personalized
    // Promesse d'Achat from a phone, in front of the client, sealed by a
    // cryptographic hash (same real mechanic as DocuLegal's e-signature flow).
    function runSignDemo(e) {
      e.preventDefault();
      const name = document.getElementById('sign-name-input').value;
      if (!name) return;

      const btn = document.getElementById('sign-btn');
      const generating = document.getElementById('sign-generating');
      const result = document.getElementById('sign-result');

      btn.disabled = true;
      btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
      btn.classList.remove('bg-rose-500', 'hover:bg-rose-600', 'text-white');

      generating.classList.remove('hidden');
      result.classList.add('hidden');

      setTimeout(() => {
        const hash = Array.from({length: 16}, () => Math.floor(Math.random() * 16).toString(16)).join('');
        document.getElementById('sign-val-name').innerText = name;
        document.getElementById('sign-val-time').innerText = new Date().toLocaleString('fr-CA', { dateStyle: 'short', timeStyle: 'short' });
        document.getElementById('sign-val-hash').innerText = hash;

        generating.classList.add('hidden');
        result.classList.remove('hidden');

        btn.disabled = false;
        btn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
        btn.classList.add('bg-rose-500', 'hover:bg-rose-600', 'text-white');
        lucide.createIcons();
      }, 1400);
    }

    // FAQ Accordion
    function toggleFaq(index) {
      const answer = document.getElementById('faq-answer-' + index);
      const chevron = document.getElementById('faq-chevron-' + index);
      
      const isHidden = answer.classList.contains('hidden');
      if (isHidden) {
        answer.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      } else {
        answer.classList.add('hidden');
        chevron.classList.remove('rotate-180');
      }
    }

    // Pricing Target Audience Selector
    function setAudience(aud) {
      pricingAudience = aud;
      const ownersBtn = document.getElementById('audience-owners-btn');
      const syndicatesBtn = document.getElementById('audience-syndicates-btn');
      const ownersGrid = document.getElementById('pricing-owners-grid');
      const syndicatesGrid = document.getElementById('pricing-syndicates-grid');

      if (aud === 'owners') {
        ownersBtn.className = "px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase bg-emerald-500 text-white shadow-lg shadow-emerald-500/20";
        syndicatesBtn.className = "px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase text-slate-500 dark:text-zinc-400 hover:text-emerald-500";
        ownersGrid.classList.remove('hidden');
        syndicatesGrid.classList.add('hidden');
      } else {
        syndicatesBtn.className = "px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase bg-emerald-500 text-white shadow-lg shadow-emerald-500/20";
        ownersBtn.className = "px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase text-slate-500 dark:text-zinc-400 hover:text-emerald-500";
        ownersGrid.classList.add('hidden');
        syndicatesGrid.classList.remove('hidden');
      }
      
      updatePricingCardsDisplay();
    }

    // Toggle Monthly / Annual Billing Cycle
    function toggleBillingCycle() {
      const knob = document.getElementById('billing-toggle-knob');
      
      if (billingCycle === 'monthly') {
        billingCycle = 'annual';
        knob.classList.add('translate-x-6');
        document.getElementById('billing-annual-label').classList.remove('text-zinc-500');
        document.getElementById('billing-annual-label').classList.add('text-emerald-500');
        document.getElementById('billing-monthly-label').classList.add('text-zinc-500');
        document.getElementById('billing-monthly-label').classList.remove('text-emerald-500');
      } else {
        billingCycle = 'monthly';
        knob.classList.remove('translate-x-6');
        document.getElementById('billing-monthly-label').classList.remove('text-zinc-500');
        document.getElementById('billing-monthly-label').classList.add('text-emerald-500');
        document.getElementById('billing-annual-label').classList.add('text-zinc-500');
        document.getElementById('billing-annual-label').classList.remove('text-emerald-500');
      }

      updatePricingCardsDisplay();
    }

    function updatePricingCardsDisplay() {
      const tDict = locales[currentLang];
      const isAnnual = billingCycle === 'annual';

      if (pricingAudience === 'owners') {
        // Owner 1
        const o1 = tDict.pricing.proprietaires[0];
        document.getElementById('price-owner-1').innerText = '$' + (isAnnual ? o1.priceAnnual : o1.priceMonthly);
        document.getElementById('yearly-billing-owner-1').innerText = isAnnual ? (currentLang === 'FR' ? \`Facturé \${o1.priceYearly}$ / an\` : currentLang === 'ES' ? \`Facturado \${o1.priceYearly}$ / año\` : \`Billed \$\${o1.priceYearly} / yr\`) : '';
        document.getElementById('yearly-billing-owner-1').classList.toggle('hidden', !isAnnual);

        // Owner 2
        const o2 = tDict.pricing.proprietaires[1];
        document.getElementById('price-owner-2').innerText = '$' + (isAnnual ? o2.priceAnnual : o2.priceMonthly);
        document.getElementById('yearly-billing-owner-2').innerText = isAnnual ? (currentLang === 'FR' ? \`Facturé \${o2.priceYearly}$ / an\` : currentLang === 'ES' ? \`Facturado \${o2.priceYearly}$ / año\` : \`Billed \$\${o2.priceYearly} / yr\`) : '';
        document.getElementById('yearly-billing-owner-2').classList.toggle('hidden', !isAnnual);

        // Owner 3
        const o3 = tDict.pricing.proprietaires[2];
        document.getElementById('price-owner-3').innerText = '$' + (isAnnual ? o3.priceAnnual : o3.priceMonthly);
        document.getElementById('yearly-billing-owner-3').innerText = isAnnual ? (currentLang === 'FR' ? \`Facturé \${o3.priceYearly}$ / an\` : currentLang === 'ES' ? \`Facturado \${o3.priceYearly}$ / año\` : \`Billed \$\${o3.priceYearly} / yr\`) : '';
        document.getElementById('yearly-billing-owner-3').classList.toggle('hidden', !isAnnual);
      } else {
        // Syndicate 1
        const s1 = tDict.pricing.syndicats[0];
        document.getElementById('price-syndicate-1').innerText = '$' + (isAnnual ? s1.priceAnnual : s1.priceMonthly);
        document.getElementById('yearly-billing-syndicate-1').innerText = isAnnual ? (currentLang === 'FR' ? \`Facturé \${s1.priceYearly}$ / an\` : currentLang === 'ES' ? \`Facturado \${s1.priceYearly}$ / año\` : \`Billed \$\${s1.priceYearly} / yr\`) : '';
        document.getElementById('yearly-billing-syndicate-1').classList.toggle('hidden', !isAnnual);

        // Syndicate 2
        const s2 = tDict.pricing.syndicats[1];
        document.getElementById('price-syndicate-2').innerText = '$' + (isAnnual ? s2.priceAnnual : s2.priceMonthly);
        document.getElementById('yearly-billing-syndicate-2').innerText = isAnnual ? (currentLang === 'FR' ? \`Facturé \${s2.priceYearly}$ / an\` : currentLang === 'ES' ? \`Facturado \${s2.priceYearly}$ / año\` : \`Billed \$\${s2.priceYearly} / yr\`) : '';
        document.getElementById('yearly-billing-syndicate-2').classList.toggle('hidden', !isAnnual);
      }
    }
  </script>

</body>
</html>
`;

// 3. Output the generated static HTML page
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlTemplate.trim(), 'utf8');
console.log('Successfully generated the static index.html landing page!');

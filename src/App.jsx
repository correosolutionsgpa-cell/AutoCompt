import React, { useState, useEffect } from 'react'
import { 
  Receipt, 
  Scale, 
  FileText, 
  Calculator, 
  Share2, 
  Globe, 
  Sun, 
  Moon, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Database, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  Copy, 
  Check, 
  Mail, 
  Coins, 
  ArrowUpRight, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  MessageSquare,
  FolderOpen,
  Upload
} from 'lucide-react'
import { locales } from './locales'

export const LogoPrincipal = ({
  size = 24,
  showText = true,
  textColor = "text-[#1E293B] dark:text-zinc-100",
}) => {
  const isLarge = size > 100;
  return (
    <div className="flex items-center space-x-2">
      <div className={`bg-black flex items-center justify-center shadow-sm border border-emerald-500/20 text-emerald-500 ${
        isLarge ? 'p-16 rounded-[120px]' : 'p-1.5 rounded-xl'
      }`}>
        <Sparkles size={size} />
      </div>
      {showText && (
        <span
          className={`font-black italic ${textColor} tracking-tighter uppercase text-lg`}
        >
          AutoCompt
        </span>
      )}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('FR')
  const [billing, setBilling] = useState('annual')
  const [audience, setAudience] = useState('owners') // 'owners' or 'syndicates'
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('logo-preview')) {
      setIsPreview(true)
    }
  }, [])
  
  // OCR Receipt Scanner Simulator State
  const [ocrState, setOcrState] = useState('idle') // idle, scanning, done
  const [ocrResult, setOcrResult] = useState(null)
  
  // Split Calculator State
  const [billAmount, setBillAmount] = useState(1500)
  const [splitPercent, setSplitPercent] = useState(60) // your share %
  
  // Magic Link Simulator State
  const [magicEmail, setMagicEmail] = useState('')
  const [magicState, setMagicState] = useState('idle') // idle, generating, done
  const [generatedLink, setGeneratedLink] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)
  
  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null)

  // Promo Code State
  const [promoValues, setPromoValues] = useState({})
  const [promoStatuses, setPromoStatuses] = useState({}) // planName -> 'success' | 'error'

  // Current active localization dictionary
  const t = locales[lang]

  // Update root HTML class for Tailwind dark mode
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.backgroundColor = '#09090b' // zinc-950
    } else {
      root.classList.remove('dark')
      root.style.backgroundColor = '#f8fafc' // slate-50
    }
  }, [theme])

  // APP URL Redirection Target
  const appUrl = 'https://app.autocompt.ca'

  // Receipts for simulator
  const mockReceipts = [
    { merchant: "Rona L'Entrepôt", subtotal: 345.50, date: "2026-06-02" },
    { merchant: "St-Hubert Resto-Bar", subtotal: 82.40, date: "2026-06-03" },
    { merchant: "Plomberie Dupont Inc.", subtotal: 875.00, date: "2026-05-28" }
  ]

  const handleSimulateOCR = () => {
    setOcrState('scanning')
    setOcrResult(null)
    
    // Choose a random receipt to simulate
    const randomReceipt = mockReceipts[Math.floor(Math.random() * mockReceipts.length)]
    
    setTimeout(() => {
      const sub = randomReceipt.subtotal
      const tps = parseFloat((sub * 0.05).toFixed(2))
      const tvq = parseFloat((sub * 0.09975).toFixed(2))
      const total = parseFloat((sub + tps + tvq).toFixed(2))
      
      setOcrResult({
        merchant: randomReceipt.merchant,
        date: randomReceipt.date,
        subtotal: sub.toFixed(2),
        tps: tps.toFixed(2),
        tvq: tvq.toFixed(2),
        total: total.toFixed(2)
      })
      setOcrState('done')
    }, 2200)
  }

  const handleGenerateMagicLink = (e) => {
    e.preventDefault()
    if (!magicEmail) return
    setMagicState('generating')
    setGeneratedLink('')
    setCopiedLink(false)

    setTimeout(() => {
      const secureToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      setGeneratedLink(`https://app.autocompt.ca/shared/releve31?token=${secureToken}&email=${encodeURIComponent(magicEmail)}`)
      setMagicState('done')
    }, 1800)
  }

  const copyToClipboard = () => {
    if (!generatedLink) return
    navigator.clipboard.writeText(generatedLink)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 3000)
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Calculate values for Split simulator
  const calcTps = parseFloat((billAmount * 0.05).toFixed(2))
  const calcTvq = parseFloat((billAmount * 0.09975).toFixed(2))
  const netExpense = parseFloat((billAmount - (calcTps + calcTvq)).toFixed(2))
  const yourNetCost = parseFloat(((netExpense * splitPercent) / 100).toFixed(2))
  const partnerNetCost = parseFloat(((netExpense * (100 - splitPercent)) / 100).toFixed(2))

  if (isPreview) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center m-0 p-0">
        <LogoPrincipal size={360} showText={false} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-[-20%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 ${theme === 'dark' ? 'bg-emerald-500/20' : 'bg-emerald-300/30'}`} />
        <div className={`absolute top-[-10%] right-[15%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-20 ${theme === 'dark' ? 'bg-indigo-500/20' : 'bg-indigo-300/30'}`} />
      </div>

      {/* NAVIGATION BAR */}
      <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${theme === 'dark' ? 'border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md' : 'border-slate-200/80 bg-slate-50/70 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="group">
            <LogoPrincipal />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className={`font-medium text-sm transition-colors hover:text-emerald-500 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>{t.nav.features}</a>
            <a href="#deepdive" className={`font-medium text-sm transition-colors hover:text-emerald-500 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>{t.nav.deepDive}</a>
            <a href="#simulators" className={`font-medium text-sm transition-colors hover:text-emerald-500 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>{t.nav.features + " Live"}</a>
            {/* <a href="#pricing" className={`font-medium text-sm transition-colors hover:text-emerald-500 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>{t.nav.pricing}</a> */}
            <a href="#faq" className={`font-medium text-sm transition-colors hover:text-emerald-500 ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>{t.nav.faq}</a>
          </div>

          {/* Controls & CTAs */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 h-10 text-xs font-semibold rounded-xl border transition-colors uppercase ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:bg-zinc-800/80' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'}`}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang}
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
              {langDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-28 rounded-xl shadow-lg border overflow-hidden transition-all z-50 ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-800'}`}>
                  {['FR', 'EN', 'ES'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l)
                        setLangDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-between ${lang === l ? 'text-emerald-500 font-bold' : ''}`}
                    >
                      {l === 'FR' ? 'Français' : l === 'EN' ? 'English' : 'Español'}
                      {lang === l && <CheckCircle2 className="w-3 h-3 text-emerald-500 group-hover:text-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-colors ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/40 text-yellow-400 hover:bg-zinc-800' : 'border-slate-200 bg-white text-indigo-600 hover:bg-slate-100'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* App Actions */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-lg shadow-emerald-500/25 flex items-center gap-1.5"
            >
              {t.pricing.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-colors ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/40 text-yellow-400' : 'border-slate-200 bg-white text-indigo-600'}`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-9 h-9 flex items-center justify-center rounded-xl border ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300' : 'border-slate-200 bg-white text-slate-700'}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-6 pb-6 border-b flex flex-col gap-4 animate-fadeIn transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold text-sm py-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}`}
            >
              {t.nav.features}
            </a>
            <a 
              href="#deepdive" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold text-sm py-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}`}
            >
              {t.nav.deepDive}
            </a>
            <a 
              href="#simulators" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold text-sm py-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}`}
            >
              {t.nav.features + " Live"}
            </a>
            {/* <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold text-sm py-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}`}
            >
              {t.nav.pricing}
            </a> */}
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold text-sm py-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-slate-700'}`}
            >
              {t.nav.faq}
            </a>
            
            <div className="h-px bg-zinc-800/60 my-2" />

            {/* Language selectors in mobile menu */}
            <div className="flex gap-2 items-center">
              <span className={`text-xs font-bold mr-2 ${theme === 'dark' ? 'text-zinc-500' : 'text-slate-400'}`}>Lang:</span>
              {['FR', 'EN', 'ES'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border transition-colors ${lang === l ? 'bg-emerald-500 text-white border-emerald-500' : (theme === 'dark' ? 'border-zinc-800 text-zinc-400 bg-zinc-900/60' : 'border-slate-200 text-slate-600 bg-white')}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/25 block"
              >
                {t.pricing.cta}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-10 pb-20 md:pt-16 md:pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Block */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-rose-200/50 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-900/40 shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[10px] uppercase font-black tracking-wider text-rose-700 dark:text-rose-400">
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 dark:from-zinc-50 dark:via-zinc-100 dark:to-zinc-400">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className={`text-base md:text-lg max-w-2xl font-normal leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#pricing"
                className="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                Profiter de l'offre
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Info text */}
            <p className={`text-xs font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-zinc-500' : 'text-slate-400'}`}>
              <Check className="w-4 h-4 text-emerald-500" />
              {t.hero.info}
            </p>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/10 dark:border-zinc-800/50 max-w-lg">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-emerald-500">99.4%</h3>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Précision OCR</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-emerald-500">100%</h3>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Conforme Québec</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-emerald-500">&lt; 3s</h3>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Temps de scan</p>
              </div>
            </div>

          </div>

          {/* Right side Visual Mockup: Smartphone Video Mockup & Core Values */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Background decorative rings or subtle glows */}
            <div className="absolute inset-[-20px] rounded-full blur-[60px] opacity-30 bg-emerald-300/30 dark:bg-emerald-500/20 pointer-events-none" />

            <div className="relative mx-auto max-w-[285px] w-full">
              
              {/* Sleek Modern Phone Frame */}
              <div className={`relative mx-auto w-full aspect-[9/19] rounded-[48px] border-[12px] border-slate-950 dark:border-zinc-900 bg-slate-950 shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'shadow-zinc-950/80 ring-1 ring-zinc-800' : 'shadow-slate-400/40 ring-1 ring-slate-200'}`}>
                
                {/* Inner screen border bezel line */}
                <div className="absolute inset-0 rounded-[36px] border border-slate-800/20 dark:border-white/5 pointer-events-none z-20" />
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                  {/* Camera lens indicator */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101010] border border-[#202020] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
                  {/* Sensor */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#080808]" />
                </div>
                
                {/* Screen reflection glass shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
                
                {/* HTML5 Video element */}
                <div className="w-full h-full bg-zinc-900 relative">
                  <video 
                    className="w-full h-full object-cover select-none" 
                    src="/autocompt-demo.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    disablePictureInPicture
                  />
                </div>
              </div>

              {/* Floating Core Value 1: Tenue de livres automatisée */}
              <div className={`absolute top-[12%] -left-8 md:-left-12 rounded-2xl border p-3.5 shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] z-30 max-w-[190px] md:max-w-[210px] ${theme === 'dark' ? 'bg-zinc-900/90 border-zinc-800 text-white shadow-emerald-500/5' : 'bg-white border-slate-200 text-slate-800'}`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4.5 h-4.5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Service Clé</p>
                  <p className="text-[11px] font-bold leading-tight">Tenue de livres automatisée</p>
                </div>
              </div>

              {/* Floating Core Value 2: Sofi, notre assistance intelligente 24/7 */}
              <div className={`absolute bottom-[10%] -right-8 md:-right-12 rounded-2xl border p-3.5 shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] z-30 max-w-[190px] md:max-w-[210px] ${theme === 'dark' ? 'bg-zinc-900/90 border-zinc-800 text-white shadow-indigo-500/5' : 'bg-white border-slate-200 text-slate-800'}`}>
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4.5 h-4.5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Support 24/7</p>
                  <p className="text-[11px] font-bold leading-tight">Sofi, notre assistance intelligente 24/7</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section id="features" className={`py-20 border-y transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
              {t.nav.features}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
              {t.features.title}
            </h2>
            <p className={`mt-3 text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Receipt Scanner */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.features.scanner.title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.features.scanner.desc}
              </p>
            </div>

            {/* Feature 2: TPS/TVQ Calculator */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.features.taxes.title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.features.taxes.desc}
              </p>
            </div>

            {/* Feature 3: DocuLegal Vault */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.features.vault.title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.features.vault.desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE SIMULATORS DEEP DIVE */}
      <section id="simulators" className="py-24 max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
            AutoCompt Interactif
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
            {t.simulators.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
            {t.simulators.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: RECEIPT SCANNER & MAGIC LINK SIMULATOR */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Widget 1: AI Receipt Scanner */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800 glow-emerald' : 'bg-white border-slate-200/80 shadow-md'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-500" />
                  {t.simulators.ocr.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                  Démo IA
                </span>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleSimulateOCR}
                  disabled={ocrState === 'scanning'}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    ocrState === 'scanning' 
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 active:scale-[0.98]'
                  }`}
                >
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  {ocrState === 'scanning' ? t.simulators.ocr.scanning : t.simulators.ocr.btn}
                </button>

                {/* Scan Overlay Effect */}
                {ocrState === 'scanning' && (
                  <div className={`rounded-2xl p-6 border text-center relative overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-950/80 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-scan" />
                    <p className="text-xs font-mono animate-pulse text-emerald-500">{t.simulators.ocr.scanning}</p>
                    <div className="mt-2 space-y-1.5 max-w-[200px] mx-auto opacity-30">
                      <div className="h-3 bg-zinc-800 rounded animate-pulse" />
                      <div className="h-3 bg-zinc-800 rounded animate-pulse w-3/4" />
                      <div className="h-3 bg-zinc-800 rounded animate-pulse w-5/6" />
                    </div>
                  </div>
                )}

                {/* Results Screen */}
                {ocrState === 'done' && ocrResult && (
                  <div className={`rounded-2xl p-5 border text-xs space-y-3 transition-colors ${theme === 'dark' ? 'bg-zinc-950/60 border-zinc-800 animate-fadeIn' : 'bg-slate-50 border-slate-200 animate-fadeIn'}`}>
                    
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-[11px]">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.simulators.ocr.success}
                    </div>

                    <div className="h-px bg-zinc-800/10 dark:bg-zinc-800/60" />

                    <div className="grid grid-cols-2 gap-y-2.5 font-mono text-[11px]">
                      <div className="text-zinc-500">{t.simulators.ocr.merchant}:</div>
                      <div className="font-semibold text-right text-slate-800 dark:text-zinc-200">{ocrResult.merchant}</div>
                      
                      <div className="text-zinc-500">{t.simulators.ocr.date}:</div>
                      <div className="font-semibold text-right text-slate-800 dark:text-zinc-200">{ocrResult.date}</div>
                      
                      <div className="text-zinc-500">{t.simulators.ocr.subtotal}:</div>
                      <div className="font-semibold text-right text-slate-800 dark:text-zinc-200">${ocrResult.subtotal}</div>
                      
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.simulators.ocr.tps}:</div>
                      <div className="font-bold text-right text-emerald-600 dark:text-emerald-400">${ocrResult.tps}</div>
                      
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.simulators.ocr.tvq}:</div>
                      <div className="font-bold text-right text-emerald-600 dark:text-emerald-400">${ocrResult.tvq}</div>

                      <div className="col-span-2 h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-1" />

                      <div className="text-base font-extrabold text-slate-900 dark:text-white">{t.simulators.ocr.total}:</div>
                      <div className="text-base font-extrabold text-right text-slate-900 dark:text-white">${ocrResult.total}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Widget 2: Magic Link Generator */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200/80 shadow-md'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  {t.simulators.magic.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
                  Relevé 31
                </span>
              </div>
              <p className={`text-xs mb-4 leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.simulators.magic.desc}
              </p>

              <form onSubmit={handleGenerateMagicLink} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
                    {t.simulators.magic.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={magicEmail}
                    onChange={(e) => setMagicEmail(e.target.value)}
                    placeholder={t.simulators.magic.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border text-xs outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={magicState === 'generating'}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    magicState === 'generating'
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 active:scale-[0.98]'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  {magicState === 'generating' ? t.simulators.magic.generating : t.simulators.magic.btn}
                </button>
              </form>

              {/* Generating screen animation */}
              {magicState === 'generating' && (
                <div className="mt-4 flex items-center justify-center gap-2.5 py-6">
                  <div className="w-5 h-5 rounded-full border-[3px] border-indigo-500 border-t-transparent animate-spin" />
                  <span className="text-xs font-mono text-indigo-500 animate-pulse">{t.simulators.magic.generating}</span>
                </div>
              )}

              {/* Link result */}
              {magicState === 'done' && generatedLink && (
                <div className={`mt-4 rounded-2xl p-4 border text-xs space-y-3 transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950/60 border-zinc-800 animate-fadeIn' : 'bg-slate-50 border-slate-200 animate-fadeIn'}`}>
                  <p className="font-extrabold text-emerald-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {t.simulators.magic.success}
                  </p>
                  
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-500 block mb-1">
                      {t.simulators.magic.previewLabel}
                    </span>
                    <div className={`p-3 rounded-lg border font-mono text-[10px] select-all break-all overflow-x-auto ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-indigo-300' : 'bg-white border-slate-200 text-indigo-600'}`}>
                      {generatedLink}
                    </div>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      copiedLink 
                        ? 'bg-emerald-500 text-white' 
                        : (theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800' : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200')
                    }`}
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedLink ? t.simulators.magic.copied : t.simulators.magic.actionBtn}
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* RIGHT COLUMN: PLEX EXPENSE SPLIT CALCULATOR */}
          <div className="lg:col-span-6">
            
            <div className={`rounded-4xl p-8 border transition-all duration-300 h-full ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800 glow-rose' : 'bg-white border-slate-200/80 shadow-md'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-rose-500" />
                  {t.simulators.split.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400">
                  Calcul Réel
                </span>
              </div>
              <p className={`text-xs mb-6 leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.simulators.split.desc}
              </p>

              <div className="space-y-6">
                
                {/* Bill Amount Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t.simulators.split.billAmount}
                    </label>
                    <span className="text-sm font-bold">${billAmount}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="50"
                    value={billAmount}
                    onChange={(e) => setBillAmount(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-500 font-bold mt-1.5 font-mono">
                    <span>$100</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Ownership Split Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      {t.simulators.split.partnerShare}
                    </label>
                    <span className="text-sm font-bold">{splitPercent}% / {100 - splitPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={splitPercent}
                    onChange={(e) => setSplitPercent(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-500 font-bold mt-1.5 font-mono">
                    <span>{t.simulators.split.yours} (10%)</span>
                    <span>50/50</span>
                    <span>{t.simulators.split.partners} (10%)</span>
                  </div>
                </div>

                {/* Calculations Card Grid */}
                <div className={`rounded-3xl p-6 border space-y-4 ${theme === 'dark' ? 'bg-zinc-950/60 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                  
                  <div className="grid grid-cols-2 gap-4">
                    
                    <div className={`p-4 rounded-2xl border text-center transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-white border-slate-200'}`}>
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-1">
                        {t.simulators.split.yours} ({splitPercent}%)
                      </span>
                      <span className="text-lg font-black text-slate-900 dark:text-white font-mono">${yourNetCost}</span>
                    </div>

                    <div className={`p-4 rounded-2xl border text-center transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-white border-slate-200'}`}>
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-1">
                        Partenaire ({100 - splitPercent}%)
                      </span>
                      <span className="text-lg font-black text-slate-900 dark:text-white font-mono">${partnerNetCost}</span>
                    </div>

                  </div>

                  <div className="h-px bg-zinc-800/10 dark:bg-zinc-800/60" />

                  {/* Tax Reclamation Row */}
                  <div className="space-y-2 text-xs font-semibold">
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>{t.simulators.split.tpsReclaim} (5%):</span>
                      <span className="font-mono">+ ${calcTps}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>{t.simulators.split.tvqReclaim} (9.975%):</span>
                      <span className="font-mono">+ ${calcTvq}</span>
                    </div>
                    
                    <div className="h-px bg-zinc-800/10 dark:bg-zinc-800/60 my-2" />

                    <div className="flex justify-between text-slate-900 dark:text-white font-bold text-sm">
                      <span>{t.simulators.split.netExpense}:</span>
                      <span className="font-mono text-emerald-500">${netExpense}</span>
                    </div>
                  </div>

                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-2xl shadow-lg shadow-rose-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Coins className="w-4 h-4" />
                  Exporter ce calcul sur mon compte Plex
                  <ArrowUpRight className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES DEEP DIVE (Magic Links & Google Drive Architecture) */}
      <section id="deepdive" className={`py-24 border-y transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
              {t.deepdive.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
              L'écosystème transparent de confiance
            </h2>
            <p className={`mt-3 text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
              {t.deepdive.subtitle}
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Deep Dive 1: Magic Links */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full">
                  Accès sans mot de passe
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t.deepdive.magic.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.deepdive.magic.desc}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" /> Jetons cryptographiques à usage unique
                  </div>
                </div>
              </div>

              {/* Visual for Magic Links */}
              <div className="lg:col-span-6 flex justify-center">
                <div className={`w-full max-w-[480px] rounded-4xl border p-8 shadow-xl relative overflow-hidden ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200'}`}>
                  <div className="absolute top-0 right-0 p-4 opacity-15">
                    <Share2 className="w-32 h-32 text-indigo-500" />
                  </div>
                  
                  {/* Flow Simulation */}
                  <div className="space-y-4 relative z-10 text-xs">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">1</div>
                      <div className={`flex-1 p-3 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-950/80 border-zinc-850' : 'bg-slate-50 border-slate-200'}`}>
                        <p className="font-bold">CA de la Copropriété / Partenaire Plex</p>
                        <p className="text-[10px] text-zinc-500">Génère un lien de consultation des dépenses</p>
                      </div>
                    </div>

                    <div className="h-6 w-0.5 bg-indigo-500/30 ml-4" />

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">2</div>
                      <div className={`flex-1 p-3 rounded-2xl border ${theme === 'dark' ? 'bg-zinc-950/80 border-zinc-850' : 'bg-slate-50 border-slate-200'}`}>
                        <p className="font-bold">Courriel sécurisé</p>
                        <p className="text-[10px] text-indigo-500 font-mono">https://app.autocompt.ca/shared/p/tk_3910x...</p>
                      </div>
                    </div>

                    <div className="h-6 w-0.5 bg-indigo-500/30 ml-4" />

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">3</div>
                      <div className={`flex-1 p-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5`}>
                        <p className="font-bold text-emerald-500">Ouverture instantanée sans mot de passe</p>
                        <p className="text-[10px] text-emerald-600/80">Accès sécurisé temporaire (15 min) validé</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Deep Dive 2: Google Drive Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Visual First (for zig-zag layout) */}
              <div className="lg:col-span-6 flex justify-center order-last lg:order-first">
                <div className={`w-full max-w-[480px] rounded-4xl border p-8 shadow-xl relative overflow-hidden ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200'}`}>
                  
                  {/* Google Drive Folder Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/10 dark:border-zinc-800/60">
                      <div className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold text-sm text-slate-800 dark:text-zinc-200">Google Drive: AutoCompt-Plex-902</span>
                      </div>
                      <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Synchronisé</span>
                    </div>

                    {/* Fake Directory Structure */}
                    <div className="space-y-2 text-xs font-mono">
                      
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                        <span className="text-yellow-500">📁</span>
                        <span className="font-semibold text-slate-800 dark:text-zinc-300">2026_Factures_Dépenses/</span>
                      </div>
                      
                      <div className="pl-6 space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-500/5 border border-zinc-500/10">
                          <span className="text-zinc-500">📄 2026-06-02_Rona_345.50_tps_tvq.pdf</span>
                          <span className="text-[9px] text-zinc-500 font-bold">128 KB</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-500/5 border border-zinc-500/10">
                          <span className="text-zinc-500">📄 2026-06-03_St-Hubert_82.40.pdf</span>
                          <span className="text-[9px] text-zinc-500 font-bold">95 KB</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                        <span className="text-yellow-500">📁</span>
                        <span className="font-semibold text-slate-800 dark:text-zinc-300">2026_Rapports_Financiers/</span>
                      </div>
                      
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-800/10 dark:hover:bg-zinc-800/40 cursor-pointer">
                        <span className="text-yellow-500">📁</span>
                        <span className="font-semibold text-slate-800 dark:text-zinc-300">DocuLegal_Contrats_Promesses/</span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
                  Zéro Vendor Lock-In
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t.deepdive.drive.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.deepdive.drive.desc}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" /> Vous restez propriétaire de chaque fichier
                  </div>
                </div>
              </div>

            </div>

            {/* Deep Dive 3: DocuLegal Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
                  Gestion Documentaire Intelligente
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t.deepdive.doculegal.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.deepdive.doculegal.desc}
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" /> Archivage Cloud automatisé conforme
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className={`w-full max-w-[480px] rounded-4xl border p-8 shadow-xl relative overflow-hidden ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200'}`}>
                  <div className="absolute top-0 right-0 p-4 opacity-15">
                    <FolderOpen className="w-32 h-32 text-emerald-500" />
                  </div>
                  <div className="space-y-4 relative z-10 text-xs text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/10 dark:border-zinc-800/60">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-sm text-slate-800 dark:text-zinc-200">Promesse_Achat_Chambly.pdf</span>
                      </div>
                      <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Classé & Sécurisé</span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-slate-700 dark:text-zinc-300">Journal d'organisation :</p>
                      <div className="p-3.5 rounded-2xl bg-zinc-500/5 border border-zinc-500/10 dark:border-zinc-800/60 font-mono text-[10px] space-y-1">
                        <p className="text-zinc-500">📅 2026-06-04 18:34 - Importé dans l'espace Cloud</p>
                        <p className="text-zinc-500">📍 Dossier: Cloud / 102_Rue_Chambly / Contrats</p>
                        <p className="text-zinc-500">✓ Type identifié: Promesse d'achat</p>
                        <p className="text-emerald-500 font-bold">🔒 Chiffrement de stockage validé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 24/7 AI SUPPORT FEATURE SECTION */}
      <section id="support" className={`py-20 border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
              Assistance Intelligente
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
              {t.support.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 shadow-sm hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.support.card1Title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.support.card1Desc}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 shadow-sm hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.support.card2Title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.support.card2Desc}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className={`rounded-4xl p-8 border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700/80' : 'bg-white border-slate-200 shadow-sm hover:bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.support.card3Title}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                {t.support.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - MASQUÉ */}
      {/* <section id="pricing" className="py-24 max-w-7xl mx-auto px-6"> */}
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
            {t.nav.pricing}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 dark:text-white">
            {t.pricing.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
            {t.pricing.subtitle}
          </p>

          {/* Beta Program Banner */}
          <div className="mt-6 max-w-2xl mx-auto rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 dark:bg-emerald-950/10 dark:border-emerald-500/20 shadow-sm flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
            <p className="text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-400 text-left">
              {t.pricing.betaInfo}
            </p>
          </div>

          {/* Audience selector */}
          <div className="flex justify-center mb-6">
            <div className={`inline-flex rounded-2xl p-1 border transition-all ${theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}>
              <button
                onClick={() => setAudience('owners')}
                className={`px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase ${
                  audience === 'owners'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : `text-slate-500 dark:text-zinc-400 hover:text-emerald-500`
                }`}
              >
                {t.pricing.ownersToggle}
              </button>
              <button
                onClick={() => setAudience('syndicates')}
                className={`px-5 py-2.5 text-xs font-black tracking-wide rounded-xl transition-all uppercase ${
                  audience === 'syndicates'
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : `text-slate-500 dark:text-zinc-400 hover:text-emerald-500`
                }`}
              >
                {t.pricing.syndicatesToggle}
              </button>
            </div>
          </div>

          {/* Toggle Monthly / Annual billing */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-xs font-bold ${billing === 'monthly' ? 'text-emerald-500' : 'text-zinc-500'}`}>
              {t.pricing.monthly}
            </span>
            
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
              className={`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-slate-300'
              }`}
            >
              <div className={`w-6 h-6 rounded-full bg-emerald-500 transition-transform ${
                billing === 'annual' ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>

            <span className={`text-xs font-bold flex items-center gap-1.5 ${billing === 'annual' ? 'text-emerald-500' : 'text-zinc-500'}`}>
              {t.pricing.annual}
              <span className="text-[10px] uppercase font-black tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-800/20">
                {t.pricing.save}
              </span>
            </span>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 gap-8 items-stretch justify-center mx-auto ${
          audience === 'owners' ? 'md:grid-cols-3 max-w-6xl' : 'md:grid-cols-2 max-w-4xl'
        }`}>
          {(audience === 'owners' ? t.pricing.proprietaires : t.pricing.syndicats).map((plan, index) => {
            const isPopular = plan.isPopular;
            const price = billing === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            const billingLabel = billing === 'annual' ? t.pricing.billingPeriod.annual : t.pricing.billingPeriod.monthly;
            
            // Color Strategy based on audience and index:
            let colorClasses = '';
            if (audience === 'owners') {
              if (index === 0) {
                colorClasses = 'bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/10 dark:border-emerald-800/40 hover:bg-emerald-100/30 dark:hover:bg-emerald-950/20';
              } else if (index === 1) {
                colorClasses = 'bg-blue-50/40 border-blue-200 dark:bg-blue-950/10 dark:border-blue-800/40 hover:bg-blue-100/30 dark:hover:bg-blue-950/20';
              } else {
                colorClasses = 'bg-purple-50/40 border-purple-200 dark:bg-purple-950/10 dark:border-purple-800/40 hover:bg-purple-100/30 dark:hover:bg-purple-950/20';
              }
            } else {
              if (index === 0) {
                colorClasses = 'bg-amber-50/40 border-amber-200 dark:bg-amber-950/10 dark:border-amber-800/40 hover:bg-amber-100/30 dark:hover:bg-amber-950/20';
              } else {
                colorClasses = 'bg-rose-50/40 border-rose-200 dark:bg-rose-950/10 dark:border-rose-800/40 hover:bg-rose-100/30 dark:hover:bg-rose-950/20';
              }
            }

            const isPremium = plan.isPopular;

            return (
              <div 
                key={index} 
                className={`rounded-4xl border p-8 flex flex-col justify-between relative transition-all duration-300 shadow-sm ${
                  isPremium 
                    ? 'bg-zinc-950 text-white border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)] hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.35)]' 
                    : `${colorClasses} hover:scale-[1.01] hover:shadow-lg`
                }`}
              >
                {isPremium ? (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-amber-300/20 animate-pulse z-10">
                    {lang === 'FR' ? 'Recommandé' : lang === 'ES' ? 'Recomendado' : 'Recommended'}
                  </div>
                ) : null}
                
                <div>
                  <span className={`text-[10px] uppercase font-black tracking-wider block mb-2 ${
                    isPremium ? 'text-emerald-400 mt-2' : 'text-slate-500 dark:text-zinc-500'
                  }`}>
                    {plan.badge}
                  </span>
                  
                  <h3 className={`text-xl font-bold ${isPremium ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isPremium ? 'text-zinc-300' : theme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`}>{plan.desc}</p>
                  
                  {/* Pricing price */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-black font-mono ${isPremium ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        $0
                      </span>
                      <span className={`text-sm line-through font-semibold font-mono ${isPremium ? 'text-zinc-400' : 'text-slate-400 dark:text-zinc-500'}`}>
                        ${price}
                      </span>
                      <span className={`text-xs font-medium ${isPremium ? 'text-zinc-400' : theme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`}>
                        {billingLabel}
                      </span>
                    </div>
                    {billing === 'annual' && plan.priceYearly && (
                      <div className={`text-[10px] font-bold mt-1 ${isPremium ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                        {lang === 'FR' ? `Facturé ${plan.priceYearly}$ / an` : lang === 'ES' ? `Facturado ${plan.priceYearly}$ / año` : `Billed $${plan.priceYearly} / yr`}
                      </div>
                    )}
                    <div className="mt-2.5 inline-block bg-white text-zinc-950 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg border-2 border-emerald-500 shadow-md uppercase tracking-wider select-none animate-pulse">
                      {t.pricing.betaPromoTag}
                    </div>
                  </div>

                  <div className={`h-px my-6 ${isPremium ? 'bg-emerald-500/20' : 'bg-zinc-800/10 dark:bg-zinc-800/60'}`} />

                  {/* Feature list */}
                  <ul className="space-y-3.5 font-medium">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2.5 text-xs ${isPremium ? 'text-zinc-200' : 'text-slate-700 dark:text-zinc-300'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isPremium ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>

                  <div className="mt-6">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 text-xs rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all ${
                        isPremium 
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-zinc-950 font-black shadow-lg shadow-amber-400/25' 
                          : 'bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25'
                      }`}
                    >
                      {t.pricing.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      {/* </section> */}

      {/* FAQ SECTION WITH ACCORDION */}
      <section id="faq" className={`py-24 border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-black tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full">
              Des réponses à vos questions
            </span>
            <h2 className="text-3xl font-extrabold mt-4 text-slate-900 dark:text-white">
              {t.faq.title}
            </h2>
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            
            {/* FAQ Item 1 */}
            <div className={`rounded-3xl border transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200'}`}>
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none"
              >
                <span>{t.faq.q1}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${activeFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === 1 && (
                <div className={`px-6 pb-5 text-xs leading-relaxed animate-slideDown ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.faq.a1}
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className={`rounded-3xl border transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200'}`}>
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none"
              >
                <span>{t.faq.q2}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${activeFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === 2 && (
                <div className={`px-6 pb-5 text-xs leading-relaxed animate-slideDown ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.faq.a2}
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className={`rounded-3xl border transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200'}`}>
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none"
              >
                <span>{t.faq.q3}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${activeFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === 3 && (
                <div className={`px-6 pb-5 text-xs leading-relaxed animate-slideDown ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.faq.a3}
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className={`rounded-3xl border transition-colors ${theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200'}`}>
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white outline-none"
              >
                <span>{t.faq.q4}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${activeFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === 4 && (
                <div className={`px-6 pb-5 text-xs leading-relaxed animate-slideDown ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {t.faq.a4}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
        
        {/* Glow behind final CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] bg-emerald-500/10 pointer-events-none" />

        <div className={`rounded-4xl border p-10 md:p-16 text-center max-w-5xl mx-auto relative z-10 ${
          theme === 'dark' ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <span className="text-[10px] uppercase font-black tracking-wider text-rose-700 bg-rose-100 dark:bg-rose-950/40 dark:text-rose-400 px-3.5 py-1.5 rounded-full">
            {t.hero.badge}
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 tracking-tight leading-tight">
            Prêt à simplifier votre fiscalité immobilière ?
          </h2>
          
          <p className={`mt-4 text-sm md:text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}`}>
            Rejoignez des centaines de gestionnaires d'immeubles, courtiers et copropriétaires au Québec qui font confiance à l'IA d'AutoCompt pour leur comptabilité.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-extrabold text-sm px-8 py-4.5 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              {t.pricing.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className={`text-[10px] font-semibold mt-4 ${theme === 'dark' ? 'text-zinc-500' : 'text-slate-400'}`}>
            Calcul automatique TPS/TVQ • Zéro engagement • Support local au Québec
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-900 text-zinc-500' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <LogoPrincipal size={18} textColor="text-slate-800 dark:text-zinc-200" />
            <p className="text-xs leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-500/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-2 max-w-sm leading-normal">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
              <span>Données sécurisées • Conforme à la Loi 25 sur la protection des renseignements personnels au Québec.</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Navigation</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <a href="#features" className="hover:text-emerald-500 transition-colors">{t.nav.features}</a>
              <a href="#deepdive" className="hover:text-emerald-500 transition-colors">{t.nav.deepDive}</a>
              <a href="#simulators" className="hover:text-emerald-500 transition-colors">Démo Live</a>
              <a href="#pricing" className="hover:text-emerald-500 transition-colors">{t.nav.pricing}</a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Plateforme</h4>
             <div className="flex flex-col gap-2 text-xs font-semibold">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">{t.pricing.cta}</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                Status 
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">{t.footer.legalTitle}</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <a href="#" className="hover:text-emerald-500 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">{t.footer.contact}</a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-zinc-800/10 dark:border-zinc-900/60">
          <p className="text-[11px] leading-relaxed text-slate-400 dark:text-zinc-650 max-w-5xl mb-4 text-left">
            {t.footer.legalNotice}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold">
            <p>{t.footer.rights}</p>
            <p>{t.footer.madeIn}</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Floating Button */}
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScnBGzfTKw2qS033a7Z08OBqb7j1iSJPa-bR0nULC7uaQ7sBA/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-[#059669] hover:bg-[#047857] active:scale-95 transition-all text-white font-bold text-xs md:text-sm px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-500/20 flex items-center gap-2 group"
      >
        <span>{t.pricing.cta}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>

    </div>
  )
}

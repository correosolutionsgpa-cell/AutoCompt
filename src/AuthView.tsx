import { useState } from 'react';
import { Sparkles, ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function AuthView({ onBack }: { onBack: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au site
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-[32px] shadow-xl p-8 sm:p-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black p-3 shadow-md mb-6">
            <Sparkles className="h-full w-full text-emerald-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-bold font-display text-stone-900">
            {isLogin ? 'Bon retour parmi nous' : 'Créer un compte'}
          </h1>
          <p className="text-stone-500 text-sm mt-2 text-center">
            {isLogin 
              ? 'Accédez à votre espace AutoCompt' 
              : 'Rejoignez les investisseurs et syndicats du Québec'}
          </p>
        </div>

        <div className="flex p-1 bg-slate-100 rounded-full mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${
              isLogin ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${
              !isLogin ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            Créer un compte
          </button>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <label className="sr-only" htmlFor="name">Nom complet</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-stone-400" />
              </div>
              <input
                id="name"
                type="text"
                placeholder="Nom complet"
                className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-stone-400 text-stone-900"
              />
            </div>
          )}

          <div className="relative">
            <label className="sr-only" htmlFor="email">Courriel</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-stone-400" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Courriel professionnel"
              className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-stone-400 text-stone-900"
            />
          </div>

          <div className="relative mb-2">
            <label className="sr-only" htmlFor="password">Mot de passe</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-stone-400" />
            </div>
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-stone-400 text-stone-900"
            />
          </div>

          {isLogin && (
            <div className="flex justify-end -mt-3 mb-2">
              <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                Mot de passe oublié ?
              </a>
            </div>
          )}

          <button className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
            {isLogin ? 'Accéder à mon espace' : 'Créer mon compte'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

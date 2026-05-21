import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div className="relative group">
      <button className="dark:text-white flex items-center gap-1 text-dark font-semibold px-2 py-1 rounded-lg hover:bg-white/20 transition">
        {i18n.language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
        <span className="text-xs">▼</span>
      </button>
      <div className="absolute right-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg w-28 z-50">
        <button
          onClick={() => i18n.changeLanguage('fr')}
          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-primary/20 rounded-t-lg text-black dark:text-white"
        >
          🇫🇷 Français
          {i18n.language === 'fr' && <span className="ml-auto text-primary">✓</span>}
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-primary/20 rounded-b-lg text-black dark:text-white"
        >
          🇬🇧 English
          {i18n.language === 'en' && <span className="ml-auto text-primary">✓</span>}
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
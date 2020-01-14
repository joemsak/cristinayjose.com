import React, { useCallback } from "react"
import { useTranslation } from "react-i18next"

import "./LanguageSwitcher.scss"

const LANGS = ["en-US", "es-MX"]

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation()

  const switchLanguage = useCallback(
    () => {
      const lang = LANGS.filter(l => i18n.language !== l)[0]
      window.location.search = `lng=${lang}`
    },
    []
  )

  const renderAvailableLocales = () => {
    return LANGS.filter((lang) => i18n.language === lang).map((lang) => {
      return (
        <li key={lang}>
          <button type="button" onClick={switchLanguage}>
            {t(`locales.${lang}`)}
          </button>
        </li>
      )
    })
  }

  return (
    <section id="language-switcher">
      <ul>{renderAvailableLocales()}</ul>
    </section>
  )
}

export default LanguageSwitcher

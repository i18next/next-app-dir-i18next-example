import './init-i18next'
import i18next from 'i18next'

export async function getT(locale, ns, options) {
  if (i18next.language !== locale) {
    await i18next.changeLanguage(locale)
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns)
  }
  return {
    t: i18next.getFixedT(locale ?? i18next.language, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18next
  }
}
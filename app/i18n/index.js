import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de', 'it']
export const defaultNS = 'translation'

const initI18next = async (lng, ns) => {
  // if (ns && ns.indexOf(defaultNS) < 0) ns.push(defaultNS)
  const i18nInstance = i18next.createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}/${namespace}.json`)
        .then((resources) => callback(null, resources))
        .catch((error) => callback(error, null))
    }))
    .init({
      debug: true,
      supportedLngs: languages,
      // preload: languages,
      fallbackLng,
      lng,
      fallbackNS: defaultNS,
      defaultNS,
      ns
    })
  return i18nInstance
}

export default async function init (lng = fallbackLng, ns = defaultNS, keyPrefix) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, ns, keyPrefix),
    i18n: i18nextInstance
  }
}

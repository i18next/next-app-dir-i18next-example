import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

export const languages = ['en', 'de', 'it']

export default async function init (lng, ns = 'translation') {
  if (i18next.isInitialized) {
    if (lng !== i18next.resolvedLanguage) i18next.changeLanguage(lng)
    return i18next
  }
  await i18next.use(resourcesToBackend((language, namespace, callback) => {
    import(`./locales/${language}/${namespace}.json`)
      .then((resources) => callback(null, resources))
      .catch((error) => callback(error, null))
  })).init({
    debug: true,
    supportedLngs: languages,
    fallbackLng: 'en',
    lng,
    fallbackNS: 'translation',
    defaultNS: 'translation',
    ns
  })
  return i18next
}

'use client'

import './init-i18next'
import i18next from 'i18next'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useT(ns, options) {
  const locale = useParams()?.lng
  if (typeof locale !== 'string') throw new Error('useT is only available inside /app/[locale]')
  if (typeof window === 'undefined' && i18next.resolvedLanguage !== locale) {
    void i18next.changeLanguage(locale)
  }
  useEffect(() => {
    if (i18next.resolvedLanguage !== locale) {
      void i18next.changeLanguage(locale)
    }
  }, [locale])
  return useTranslation(ns, options)
}

// 'use client'

// import i18next from 'i18next'
// import { useEffect, useState } from 'react'
// import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
// import { getCookie, setCookie } from 'cookies-next'
// import resourcesToBackend from 'i18next-resources-to-backend'
// // import LocizeBackend from 'i18next-locize-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import { getOptions, languages, cookieName } from './settings'

// const runsOnServerSide = typeof window === 'undefined'

// // on client side the normal singleton is ok
// i18next
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
//   // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
//   .init({
//     ...getOptions(),
//     lng: undefined, // let detect the language on client side
//     detection: {
//       order: ['path', 'htmlTag', 'cookie', 'navigator'],
//     },
//     preload: runsOnServerSide ? languages : []
//   })

// export function useTranslation(lng, ns, options) {
//   const i18nextCookie = getCookie(cookieName)
//   const ret = useTranslationOrg(ns, options)
//   const { i18n } = ret
//   if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
//     i18n.changeLanguage(lng)
//   } else {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//       if (activeLng === i18n.resolvedLanguage) return
//       setActiveLng(i18n.resolvedLanguage)
//     }, [activeLng, i18n.resolvedLanguage])
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//       if (!lng || i18n.resolvedLanguage === lng) return
//       i18n.changeLanguage(lng)
//     }, [lng, i18n])
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//       if (i18nextCookie === lng) return
//       setCookie(cookieName, lng, { path: '/' })
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [lng, i18nextCookie])
//   }
//   return ret
// }

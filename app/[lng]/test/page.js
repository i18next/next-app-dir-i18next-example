import { use } from 'react'
import i18next, { languages } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// export default async function Page({ params }) {
//   const { t } = await i18next(params.lng)
//   return (
//     <>
//       <h1>Hello, Next.js!</h1>
//       <pre>{t('test')}</pre>
//     </>
//   );
// }

export default function Page({ params }) {
  const { t } = use(i18next(params.lng))
  return (
    <>
      <h1>{t('welcome')}</h1>
    </>
  );
}
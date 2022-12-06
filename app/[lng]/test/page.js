import { use } from 'react'
import i18n, { languages } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// export default async function Page({ params }) {
//   const i18next = await i18n(params.lng)
//   return (
//     <>
//       <h1>Hello, Next.js!</h1>
//       <pre>{i18next.t('test')}</pre>
//     </>
//   );
// }

export default function Page({ params }) {
  const i18next = use(i18n(params.lng))
  return (
    <>
      <h1>{i18next.t('welcome')}</h1>
    </>
  );
}
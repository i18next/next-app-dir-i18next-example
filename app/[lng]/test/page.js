'use client';

import { use, useState } from 'react'
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

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{t('welcome')}</h1>
      <p>{t('counter', { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>
          decrement
        </button>
        <button onClick={() => setCounter(Math.min(3, counter + 1))}>
          increment
        </button>
      </div>
    </>
  );
}
import i18next, { languages } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function Page({ params }) {
  const { t } = await i18next(params.lng, ['extra'])
  return (
    <>
      <h1>{t('welcome2')}</h1>
      <h2>{t('addition', { ns: 'extra' })}</h2>
    </>
  );
}
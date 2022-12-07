import i18next from '../../i18n'

export default async function Head({ params: { lng } }) {
  const { t } = await i18next(lng, 'second-page')

  return (
    <>
      <title>{t('title')}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}

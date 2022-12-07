export default async function RootLayout({
  children,
}) {
  // TODO: Here's a problem: When there's no cookie yet, we can't use the locale
  // from the URL. Something like `require('next/navigation').usePathname()`
  // would be great, but that uses non-server context currently, so not an
  // option in server components. `params` is also not an option, since they are
  // only available from matched segments downwards.
  const lang = 'en';

  return (
    <html lang={lang}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}

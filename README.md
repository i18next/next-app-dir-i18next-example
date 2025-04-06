# Next.js app router feature in combination with i18next

This example shows a basic way to use [i18next](https://www.i18next.com) (and [react-i18next](https://react.i18next.com)) in a [Next.js](https://nextjs.org/) app with the new app router features.
[next-i18next](https://next.i18next.com) is not needed anymore for this setup.

It shows i18next integration on some server side pages and some client side pages.

There is also an example middleware with language detection and persistence via cookie.

*This example has been created out of [this discussion](https://github.com/i18next/next-i18next/discussions/1993).*

## There's also a [blog post](https://www.locize.com/blog/i18n-next-app-router) describing this with more detail information.

[![](https://cdn.prod.website-files.com/67a323e323a50df7f24f0a94/67f268673fcfae53e5d4697c_i18n-next-app-router.jpg)](https://www.locize.com/blog/i18n-next-app-router)


### Static Site Generation (SSG)

If you like to have all this hosted on a static server, you can add the `output: 'export'` options and optionally the `trailingSlash: true` option:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true
}
module.exports = nextConfig
```

Also make sure you adapt the server side i18next `getT` helper to not use the headers feature - since this is not compatible with SSG.
Pass the lng to the `getT` function from withing your server side pages, components and layouts.

```js
import i18next from  './i18next'

export async function getT(lng, ns, options) {
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng)
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns)
  }
  return {
    t: i18next.getFixedT(lng ?? i18next.resolvedLanguage, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18next
  }
}
```

```js
export default async function Page({ params }) {
  const { lng } = await params
  const { t } = await getT(lng, 'second-page')
  // ...
}
```

And the just run `npm run build` and you should see the out folder.

Additionally, I recommend adding a root index.html file that detects the browser language and redirects to the corresponding sub-page.
i.e.:

```html
<!-- out/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <title>redirect</title>
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/i18next-browser-languagedetector/7.0.2/i18nextBrowserLanguageDetector.min.js"></script>
    <!-- <script src="https://unpkg.com/i18next-browser-languagedetector@7.0.2/dist/umd/i18nextBrowserLanguageDetector.min.js"></script> -->
    <script>
      var lngDetector = new window.i18nextBrowserLanguageDetector()
      var lng = lngDetector.detect()
      if (lng.indexOf('it') === 0) window.location.href = '/it/'
      else if (lng.indexOf('de') === 0) window.location.href = '/de/'
      else window.location.href = '/en/'
    </script>
  </body>
</html>
```

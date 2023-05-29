# Next.js 13 app directory feature in combination with i18next

This example shows a basic way to use [i18next](https://www.i18next.com) (and [react-i18next](https://react.i18next.com)) in a [Next.js 13](https://beta.nextjs.org/) app with the new app directory features.
[next-i18next](https://next.i18next.com) is not needed anymore for this setup.

It shows i18next integration on some server side pages and some client side pages.

There is also an example middleware with language detection and persistence via cookie.

*This example has been created out of [this discussion](https://github.com/i18next/next-i18next/discussions/1993).*

## There's also a [blog post](https://locize.com/blog/next-13-app-dir-i18n) describing this with more detail information.

[![](https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg)](https://locize.com/blog/next-13-app-dir-i18n)



### Static Side Generation (SSG)

If you like to have all this hosted on a static server, you can add the `output: 'export'` options and optionally the `trailingSlash: true` option:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true
  }
}
module.exports = nextConfig
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

import Document, {
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            async
            src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.6.0/dist/cookieconsent.js"
          />
        </Head>
        <body className="w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

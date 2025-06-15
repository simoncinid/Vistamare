import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        
        {/* Preconnect per performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Manifest per PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta per crawling */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* CSS inlining critico */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              height: 100% !important;
              margin: 0;
              padding: 0;
              overflow-y: auto !important;
              overflow-x: hidden;
              position: relative;
              -webkit-overflow-scrolling: touch;
            }
            #__next {
              height: 100%;
              overflow-y: auto !important;
              position: relative;
            }
            
            @media screen and (orientation: portrait), screen and (orientation: landscape) {
              html, body, #__next {
                height: 100% !important;
                overflow-y: auto !important;
                -webkit-overflow-scrolling: touch;
              }
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
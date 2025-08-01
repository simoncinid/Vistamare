import '../src/index.css'
import '../src/App.css'
import '../styles/datepicker.css'
import '../components/ScrollProgress.css'
import Script from 'next/script'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import ScrollProgress from '../components/ScrollProgress'
import CustomCursor from '../components/CustomCursor'
import SmoothScroll from '../components/SmoothScroll'
import CookieConsentAdvanced from '../components/CookieConsentAdvanced'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Head>
        {/* FontAwesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W6BKEMZ0Z2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W6BKEMZ0Z2');
        `}
      </Script>
      
      {/* Google Fonts */}
      <Script
        src="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tangerine:wght@400;700&display=swap"
        strategy="beforeInteractive"
      />
      <Script
        src="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lexend+Deca:wght@100..900&family=Lexend+Giga:wght@100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        strategy="beforeInteractive"
      />
      <Script
        src="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        strategy="beforeInteractive"
      />

      <div className="App">
        <CookieConsentAdvanced />
        {isDesktop && <CustomCursor />}
        <SmoothScroll />
        <ScrollProgress />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  )
} 
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="thumbnail" content="https://res.cloudinary.com/myanlearn/image/upload/v1629629316/MMD-Link-Preview.jpg" />
          <meta property="og:image" content="https://res.cloudinary.com/myanlearn/image/upload/v1629629316/MMD-Link-Preview.jpg" />
          <meta name="description" content="COVID အတွက် အောက်စီဂျင် ဝယ်၊ ဖြည့်၊ ငှါးနိုင်သော နေရာများ၊ ဆေးဆိုင်များ၊ ဓာတ်မှန်နှင့် ဓာတ်ခွဲခန်းများကို လွယ်ကူတိကျအချိန်မီ ရှာဖွေလိုက်ပါ။" />
          <meta name="keywords" content="myanmar,oxygen,medical,directory,covid" />
          <meta property="og:title" content="Myanmar Medical Directory | Essentials for COVID-19 treatment and recovery" />
          <meta property="og:description" content="COVID အတွက် အောက်စီဂျင် ဝယ်၊ ဖြည့်၊ ငှါးနိုင်သော နေရာများ၊ ဆေးဆိုင်များ၊ ဓာတ်မှန်နှင့် ဓာတ်ခွဲခန်းများကို လွယ်ကူတိကျအချိန်မီ ရှာဖွေလိုက်ပါ။" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F6AA8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vale Viver" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta
          name="description"
          content="Cuidando da sua saúde com excelência e dedicação. Atendimento humanizado e tecnologia de ponta. Agende sua consulta pelo WhatsApp."
        />
        <meta
          name="keywords"
          content="clínica médica, saúde, consulta médica, Vale Viver, agendamento"
        />
        <meta name="author" content="Vale Viver Clínica Médica" />

        <meta property="og:title" content="Vale Viver - Clínica Médica" />
        <meta
          property="og:description"
          content="Cuidando da sua saúde com excelência e dedicação. Atendimento humanizado e tecnologia de ponta."
        />
        <meta property="og:url" content="https://valeviver.com.br" />
        <meta property="og:site_name" content="Vale Viver" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vale Viver - Clínica Médica" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vale Viver - Clínica Médica" />
        <meta
          name="twitter:description"
          content="Cuidar da sua saúde é o nosso maior patrimônio, com dedicação, acolhimento e excelência em cada atendimento."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
      </Head>
      <body suppressHydrationWarning={true}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

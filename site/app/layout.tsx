import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://nphub.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NP Hub · Pensamos o problema. Criamos o caminho.",
    template: "%s · NP Hub",
  },
  description:
    "Marketing, tecnologia e automação para o mercado imobiliário. Conteúdo humano, estratégia e audiovisual que viram resultado real.",
  keywords: [
    "marketing imobiliário",
    "automação imobiliária",
    "audiovisual imobiliário",
    "automação CRM",
    "tecnologia imobiliária",
    "NP Hub",
    "Nisso Pensai",
  ],
  authors: [{ name: "NP Hub" }],
  creator: "NP Hub",
  publisher: "NP Hub",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "NP Hub",
    title: "NP Hub · Pensamos o problema. Criamos o caminho.",
    description:
      "Conteúdo humano, tecnologia inteligente e resultado real para empresas imobiliárias.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NP Hub",
    description: "Pensamos o problema. Criamos o caminho.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NP Hub",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  email: "nphubcontato@gmail.com",
  description:
    "Marketing, tecnologia e automação para o mercado imobiliário brasileiro.",
  slogan: "Pensamos o problema. Criamos o caminho.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-graphite">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

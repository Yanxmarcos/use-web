import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "USE | Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT",
  description: "Potencia tu trayectoria profesional con una educación de alta calidad y un enfoque pragmático. ¡Inscríbete y obtén especialidad con los más destacados!",
  keywords: "USE, Unidad de Segunda Especialidad, Facultad de Derecho, Universidad Nacional de Trujillo, UNT, segunda especialidad, derecho penal, derecho constitucional, derecho civil",
  authors: [{ name: "Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT" }],
  creator: "Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT',
  },

  openGraph: {
    title: 'USE',
    description: 'Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT.',
    url: 'https://useder.unitru.edu.pe/',
    siteName: 'Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT.',
    images: [
      {
        url: 'https://useder.unitru.edu.pe/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT.',
        type: 'image/webp',
      },
    ],
    type: 'website',
    locale: 'es_PE',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'USE',
    description: 'Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. de la UNT.',
    images: ['https://useder.unitru.edu.pe/og-image.webp'],
    creator: '@USE',
    site: 'https://useder.unitru.edu.pe',
  },

  metadataBase: new URL('https://useder.unitru.edu.pe'),

  alternates: {
    canonical: 'https://useder.unitru.edu.pe',
    languages: {
      'es-PE': 'https://useder.unitru.edu.pe',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-sans antialiased selection:bg-[#003398] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Playfair_Display, Noto_Serif_KR, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'K-POP COFFEE | Seoul Specialty Coffee & Cultural Soundscapes (KPopCoffee.com)',
  description:
    'A high-concept digital brand framework fusing Korea’s world-leading café culture with contemporary K-Sound, artisanal bean rituals, and limited cultural drops.',
  keywords: [
    'K-Pop Coffee',
    'Seoul Specialty Coffee',
    'Korean Coffee Culture',
    'Seongsu Cafe',
    'K-Sound',
    'Artisanal Coffee Roasting',
    'Korean Lifestyle Brand',
  ],
  authors: [{ name: 'K-POP COFFEE Global Studio' }],
  openGraph: {
    title: 'K-POP COFFEE — The Rhythmic Pulse of Seoul',
    description: 'Specialty coffee craftsmanship paired with contemporary Seoul soundscapes and collectible cultural drops.',
    url: 'https://kpopcoffee.com',
    siteName: 'K-POP COFFEE',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${notoSerifKR.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-warm-ivory text-ink-black antialiased selection:bg-korean-red selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

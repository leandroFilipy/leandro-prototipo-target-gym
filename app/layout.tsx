import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
});

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Target Gym | Mire. Treine. Acerte.',
  description:
    'Target Gym: musculação, funcional e aulas coletivas com acompanhamento profissional, estrutura completa e vestiário com chuveiros quentes.',
  openGraph: {
    title: 'Target Gym | Mire. Treine. Acerte.',
    description:
      'Musculação, funcional e aulas coletivas com acompanhamento profissional e estrutura completa.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import { Archivo } from 'next/font/google';

const archivo = Archivo({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

import Container from '../components/Container';
import '../styles/global.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.className}>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}

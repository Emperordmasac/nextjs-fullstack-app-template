import { Inter } from 'next/font/google';
import './globals.css';

import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'nextjs-fullstack-app-template',
  description:
    'Template for creating a production-ready fullstack Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}

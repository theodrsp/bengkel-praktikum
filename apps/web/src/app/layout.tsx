import './globals.css';

import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Bengkel Praktikum',
  description: 'E-commerce suku cadang dan bengkel praktikum',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full">
      <body className="flex min-h-full flex-col bg-surface text-ink antialiased">
        <Navbar />
        {/* Kontainer utama: aman untuk 360 px dengan px-4 dan w-full */}
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

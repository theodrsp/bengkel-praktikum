import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          Bengkel Praktikum
        </Link>

        {/* Action / Nav Links Ringkas */}
        <nav className="flex items-center gap-3">
          <Link
            href="/cart"
            className="rounded px-2.5 py-1.5 text-xs font-medium hover:bg-primary-dark sm:text-sm transition-colors"
          >
            Keranjang
          </Link>
          <Link
            href="/login"
            className="rounded bg-accent px-3 py-1.5 text-xs font-semibold text-primary-dark shadow-sm hover:opacity-90 sm:text-sm transition-opacity"
          >
            Masuk
          </Link>
        </nav>
      </div>
    </header>
  );
}

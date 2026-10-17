export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-ink">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-500 sm:px-6 sm:text-sm lg:px-8">
        <p>&copy; {new Date().getFullYear()} Bengkel Praktikum. Hak cipta dilindungi.</p>
        <p className="mt-1 text-[11px] text-slate-400">
          Mobile-first e-commerce suku cadang & layanan praktikum
        </p>
      </div>
    </footer>
  );
}

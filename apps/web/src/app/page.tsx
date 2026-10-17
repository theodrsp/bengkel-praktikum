export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Banner / Header Card */}
      <section className="rounded-[var(--radius-card)] bg-white p-5 shadow-sm border border-slate-100">
        <h1 className="text-xl font-bold text-primary sm:text-2xl">
          Selamat Datang di Bengkel Praktikum
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Solusi suku cadang dan peralatan praktikum teknik terpercaya.
        </p>

        {/* Verifikasi Kriteria 3: Tombol Aksen teks Navy (#0F2A4A / text-primary-dark) */}
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-primary-dark shadow hover:brightness-95 active:scale-95 transition-all"
          >
            Beli Sekarang
          </button>
          
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition-opacity"
          >
            Katalog Produk
          </button>
        </div>
      </section>

      {/* Verifikasi Kriteria 1: Palet Warna & Badge Status PRD 12.3 */}
      <section className="rounded-[var(--radius-card)] bg-white p-5 shadow-sm border border-slate-100 space-y-3">
        <h2 className="text-sm font-semibold text-ink">Verifikasi Token Warna & Badge Status</h2>
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded px-2.5 py-1 bg-slate-100 text-slate-700">
            Menunggu pembayaran
          </span>
          <span className="rounded px-2.5 py-1 bg-amber-50 text-warning border border-amber-200">
            Menunggu verifikasi
          </span>
          <span className="rounded px-2.5 py-1 bg-blue-50 text-info border border-blue-200">
            Dikemas
          </span>
          <span className="rounded px-2.5 py-1 bg-emerald-50 text-success border border-emerald-200">
            Selesai
          </span>
          <span className="rounded px-2.5 py-1 bg-rose-50 text-danger border border-rose-200">
            Dibatalkan
          </span>
        </div>
      </section>
    </div>
  );
}
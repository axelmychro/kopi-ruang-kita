function Footer() {
  return (
    <footer className="site-footer mt-16 border-t border-[#EBE3D5] bg-[#FAF7F2] px-6 py-12 sm:px-12" id="footer">
      <div className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-8 text-sm md:grid-cols-4">
        {/* Kolom 1: Brand & Bio */}
        <div className="md:col-span-1" data-reveal>
          <a className="brand footer-brand mb-3 inline-flex" href="#home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>
              <strong>Kopi Ruang Kita</strong>
              <small>Tempat pulang sejenak</small>
            </span>
          </a>
          <p className="mt-2 text-xs leading-relaxed text-[#746658]">
            Ruang hangat untuk kopi dan cerita sederhana di Kota Medan.
          </p>
        </div>

        {/* Kolom 2: Alamat */}
        <div data-reveal style={{ transitionDelay: "100ms" }}>
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Alamat</h4>
          <p className="text-xs leading-relaxed text-[#746658]">
            Jl. Sudirman No. 45 (Area Komersial &amp; Work-space)<br />
            Kota Medan, Sumatera Utara 20151
          </p>
        </div>

        {/* Kolom 3: Jam Buka & Kontak */}
        <div data-reveal style={{ transitionDelay: "200ms" }}>
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Jam Buka &amp; Kontak</h4>
          <p className="mb-2 text-xs leading-relaxed text-[#746658]">
            <strong>Setiap Hari:</strong> 08.00 – 22.00 WIB
          </p>
          <p className="text-xs leading-relaxed text-[#746658]">
            <strong>Telepon / WA:</strong> +62 812-3456-7890<br />
            <strong>Email:</strong> halo@kopiruangkita.com
          </p>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div data-reveal style={{ transitionDelay: "300ms" }}>
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Media Sosial</h4>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://www.instagram.com/kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]">
              Instagram: @kopiruangkita
            </a>
            <a href="https://www.tiktok.com/@kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]">
              TikTok: @kopiruangkita
            </a>
            <a href="https://www.facebook.com/kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]">
              Facebook: Kopi Ruang Kita
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#EBE3D5] pt-6 text-xs text-[#8b897f] sm:flex-row" data-reveal>
        <span className="copyright">© {new Date().getFullYear()} Kopi Ruang Kita. Hak cipta dilindungi.</span>
        <a className="back-to-top font-medium text-[#513722] hover:underline" href="#home">
          Kembali ke atas <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

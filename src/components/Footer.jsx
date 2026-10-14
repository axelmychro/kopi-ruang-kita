function Footer() {
  return (
    <footer className="site-footer bg-[#FAF7F2] border-t border-[#EBE3D5] py-12 px-6 sm:px-12 mt-16" id="footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        {/* Kolom 1: Brand & Bio */}
        <div className="md:col-span-1">
          <a className="brand footer-brand mb-3 inline-flex" href="#home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>
              <strong>Kopi Ruang Kita</strong>
              <small>Tempat pulang sejenak</small>
            </span>
          </a>
          <p className="text-[#746658] text-xs leading-relaxed mt-2">
            Ruang hangat untuk kopi dan cerita sederhana di Kota Medan.
          </p>
        </div>

        {/* Kolom 2: Alamat */}
        <div>
          <h4 className="font-serif font-bold text-[#513722] mb-3 text-base">Alamat</h4>
          <p className="text-[#746658] text-xs leading-relaxed">
            Jl. Sudirman No. 45 (Area Komersial &amp; Work-space)<br />
            Kota Medan, Sumatera Utara 20151
          </p>
        </div>

        {/* Kolom 3: Jam Buka & Kontak */}
        <div>
          <h4 className="font-serif font-bold text-[#513722] mb-3 text-base">Jam Buka &amp; Kontak</h4>
          <p className="text-[#746658] text-xs leading-relaxed mb-2">
            <strong>Setiap Hari:</strong> 08.00 – 22.00 WIB
          </p>
          <p className="text-[#746658] text-xs leading-relaxed">
            <strong>Telepon / WA:</strong> +62 812-3456-7890<br />
            <strong>Email:</strong> halo@kopiruangkita.com
          </p>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div>
          <h4 className="font-serif font-bold text-[#513722] mb-3 text-base">Media Sosial</h4>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#746658] hover:text-[#513722] transition">
              Instagram: @kopiruangkita
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#746658] hover:text-[#513722] transition">
              TikTok: @kopiruangkita
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#746658] hover:text-[#513722] transition">
              Facebook: Kopi Ruang Kita
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-[#EBE3D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b897f]">
        <span className="copyright">© {new Date().getFullYear()} Kopi Ruang Kita. Hak cipta dilindungi.</span>
        <a className="back-to-top text-[#513722] font-medium hover:underline" href="#home">
          Kembali ke atas <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

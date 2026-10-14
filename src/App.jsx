import "./App.css";

function App() {
  return (
    <>
      <header className="site-header flex items-center justify-between">
        <a className="brand" href="#home" aria-label="Kopi Ruang Kita, beranda">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>
            <strong>Kopi Ruang Kita</strong>
            <small>Tempat pulang sejenak</small>
          </span>
        </a>

        <nav className="navigation" aria-label="Navigasi utama">
          <a href="#home">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a className="nav-cta" href="#footer">Temukan kami <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Coffee &amp; Good Vibes</p>
            <h1>Tempat singgah,<br />cerita <em>bermula.</em></h1>
            <p className="hero-description">
              Secangkir kopi, ruang yang nyaman, dan waktu untuk menikmati
              hal-hal sederhana. Selamat datang di ruang kita.
            </p>
            <a className="primary-cta inline-flex items-center gap-5" href="#footer">
              Mampir ke ruang kita <span aria-hidden="true">→</span>
            </a>
            <p className="hero-note">Dibuat dengan hati, disajikan hangat.</p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85"
              alt="Suasana hangat di dalam kedai kopi"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="about-section" id="tentang">
          <div className="about-content">
            <div className="about-copy">
              <h2>Tentang Kami</h2>
              <p>
                <strong>Kopi Ruang Kita</strong> adalah coffee shop baru di Kota Medan
                yang menyajikan kopi pilihan nusantara dan dunia dalam suasana yang
                nyaman dan hangat. Kami percaya secangkir kopi bisa menjadi awal
                dari banyak cerita baru.
              </p>
              <p>
                Dari Kopi Susu Gula Aren andalan sampai camilan hangat seperti Roti
                Bakar dan Croissant, semua disajikan segar setiap hari. Tersedia
                area indoor dan corner Wi-Fi untuk kamu yang ingin work-from-cafe.
              </p>
              <ul className="about-highlights">
                <li><span aria-hidden="true">✓</span> Biji kopi pilihan Gayo &amp; Toraja</li>
                <li><span aria-hidden="true">✓</span> Area nyaman &amp; Wi-Fi gratis</li>
                <li><span aria-hidden="true">✓</span> Buka setiap hari 08.00 – 22.00</li>
              </ul>
            </div>

            <div className="about-gallery" aria-label="Suasana Kopi Ruang Kita">
              <img
                className="about-photo about-photo-first"
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85"
                alt="Bar kopi dengan suasana hangat"
                loading="lazy"
              />
              <img
                className="about-photo about-photo-second"
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85"
                alt="Area duduk nyaman di kedai kopi"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>
            <strong>Kopi Ruang Kita</strong>
            <small>Tempat pulang sejenak</small>
          </span>
        </a>
        <p>Ruang hangat untuk kopi dan cerita sederhana.</p>
        <a className="back-to-top" href="#home">Kembali ke atas <span aria-hidden="true">↑</span></a>
        <span className="copyright">© {new Date().getFullYear()} Kopi Ruang Kita</span>
      </footer>
    </>
  );
}

export default App;

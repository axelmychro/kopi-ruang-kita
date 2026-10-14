function About() {
  return (
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
  );
}

export default About;

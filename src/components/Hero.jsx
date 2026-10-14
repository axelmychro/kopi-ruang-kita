function Hero() {
  return (
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
  );
}

export default Hero;

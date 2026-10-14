function Footer() {
  return (
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
  );
}

export default Footer;

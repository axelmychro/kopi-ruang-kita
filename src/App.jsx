import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Menu />
        <Promo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

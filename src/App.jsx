import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <div style={{ height: "4rem" }}></div> {/* <-- TAMBAHKAN INI */}
        <Experience />
        {/* Jarak sebelum Contact */}
        <div style={{ height: "4rem" }}></div> {/* <-- TAMBAHKAN INI */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

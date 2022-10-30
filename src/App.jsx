import Topbar from "./Components/topbar/Topbar.jsx";
import Intro from "./Components/intro/Intro.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";
import Works from "./Components/works/Works.jsx";
import Contact from "./Components/contact/Contact.jsx";
import './app.scss'
import { useState } from "react";
import Menu from "./Components/menu/Menu.jsx";
// import Menu from "./Components/contact/menu/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />

      </div>

    </div>
  );
}

export default App;

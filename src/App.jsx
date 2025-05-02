import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Realisations from "./components/Realisations";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Mention from "./components/Mention";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention" element={<Mention />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

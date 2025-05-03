import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Testimonial /> */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
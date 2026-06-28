import { motion } from "framer-motion";

import Landing, { Navbar } from "./components/Landing";
import AboutMeSection from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Landing />
      <AboutMeSection />
      <Services />
      <Experiences />
      <Projects />
      <Blog />
      <Testimonial />
      <Contact />

    </motion.div>
  );
}

export default App;
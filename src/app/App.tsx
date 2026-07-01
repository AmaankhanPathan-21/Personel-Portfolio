import { useState } from "react";
import { Loader } from "./components/Loader";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Courses } from "./components/Cources";
import { Services } from "./components/Services";
import { BeyondData } from "./components/BeyondData";
import { Gallery } from "./components/Gallery";
import { Freelance } from "./components/Freelance";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FAF8F4",
        overflowX: "hidden",
      }}
    >
      <Loader onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Work />
          <Courses />
          <Services />
          <BeyondData />
          <Gallery />
          <Freelance />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { dark } from "./styles/Themes";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";

import { Loader, ScrollTriggerProxy } from "./components";

import {
  Banner,
  Footer,
  MarvelSeries,
  MarvelPeople,
  AboutUs,
  Home,
} from "./sections";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <AboutUs />
              <MarvelSeries />
              <Banner />
              <MarvelPeople />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

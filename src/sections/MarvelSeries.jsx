import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import image_1 from "../assets/Images/serie-poster-8.png";
import image_2 from "../assets/Images/serie-poster-6.png";
import image_3 from "../assets/Images/serie-poster-4.png";
import image_4 from "../assets/Images/serie-poster-5.png";
import image_5 from "../assets/Images/serie-poster-1.png";
import image_6 from "../assets/Images/serie-poster-7.png";
import image_7 from "../assets/Images/serie-poster-2.png";
import image_8 from "../assets/Images/serie-poster-10.png";
import image_9 from "../assets/Images/serie-poster-9.png";
import image_10 from "../assets/Images/serie-poster-11.png";
import image_11 from "../assets/Images/serie-poster-12.png";

import Product from "../components/Product";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 1%;
  z-index: 11;

  @media (max-width: 64rem) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxm};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const MarvelSeries = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef?.current;
    let pinWrapWidth = scrollingElement?.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        //height scrolling of this section same as the scrolling element has to be incresead
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //horizontal scrolling [photos]
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          // markers: true,
        },
        //height scrolling of this section same as the scrolling element has to be incresead
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="series">
      <Title data-scroll data-scroll-speed="-1">
        Marvel Series
      </Title>
      <Left>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
          <br />
          <br /> If you are going to use a passage of Lorem Ipsum, you need to
          be sure there isn't anything embarrassing hidden in the middle of
          textll the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={image_11} title="Moon Knight- 30 mar 2022" />
        <Product img={image_1} title="Loki - jun 9 2021" />
        <Product img={image_2} title="The falcon and TWS - 19 mar 2021" />
        <Product img={image_3} title="WandaVision -  15 jan 2021" />
        <Product img={image_4} title="What If...? - 11 aug 2021" />
        <Product img={image_5} title="Daredevil - 10 apr 2015" />
        <Product img={image_6} title="Punisher - 17 nov 2017" />
        <Product img={image_7} title="Hawkeye - 24 nov 2021" />
        <Product img={image_8} title="Agents of shield - 24 set 2013" />
        <Product img={image_9} title="Jesica Jones - 20 nov 2015" />
        <Product img={image_10} title="Iron fist - 17 mar 2017" />
      </Right>
    </Section>
  );
};

export default MarvelSeries;

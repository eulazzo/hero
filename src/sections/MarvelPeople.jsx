import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Product from "../components/Product";

//scroll effect
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

// images
import image_1 from "../assets/Images/kevin.png";
import image_2 from "../assets/Images/StanLee.png";
import image_3 from "../assets/Images/robert.png";
import image_4 from "../assets/Images/evans.png";
import image_5 from "../assets/Images/Scarlet.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  border: 3px solid ${(props) => props.theme.body};
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    width: 60vw;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  color: ${(props) => props.theme.body};
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

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  z-index: 5;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const MarvelPeople = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const scrollingVerticalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingVerticalRef?.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
        },

        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="people">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        People
      </Title>
      <Container ref={scrollingVerticalRef}>
        <Product
          img={image_1}
          title="Kevin Feige - President of Marvel Studios"
          newArrival={true}
        />
        <Product
          img={image_2}
          title="Stan Lee - American comic book writer"
          newArrival={true}
        />
        <Product
          img={image_3}
          title="Actor Robert downey jr - aka Iron Man in Marvel"
          newArrival={true}
        />
        <Product
          img={image_4}
          title="Actor Chris Evans - aka Captain America in Marvel"
          newArrival={true}
        />
        <Product
          img={image_5}
          title="Actress Scarlett Johansson - aka Black Widow in Marvel"
          newArrival={true}
        />
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium
        dictum velit, vitae commodo purus consequat molestie. Nunc eleifend
        elementum lectus, a tempor nibh posuere ac. Aliquam facilisis nisl ut
        enim posuere, ac bibendum arcu aliquet. Fusce faucibus nibh a metus
        aliquam.
        <br />
        <br /> Pellentesque sit amet condimentum nibh. Aliquam non risus nisi.
        In hac habitasse platea dictumst. Duis sit amet ante id leo vestibulum.
        <br />
        <br />
        who seeks after it and wants to have it,.
      </Text>
    </Section>
  );
};

export default MarvelPeople;

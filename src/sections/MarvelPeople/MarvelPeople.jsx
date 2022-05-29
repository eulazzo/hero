import { useLayoutEffect, useRef } from "react";

//scroll effect
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import { Slider } from "../../components";
import { Section, Overlay, Title, Text, Container } from "./styles.js";

// images
import image_1 from "../../assets/Images/kevin.png";
import image_2 from "../../assets/Images/StanLee.png";
import image_3 from "../../assets/Images/robert.png";
import image_4 from "../../assets/Images/evans.png";
import image_5 from "../../assets/Images/Scarlet.png";

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
        <Slider
          img={image_1}
          title="Kevin Feige - President of Marvel Studios"
          newArrival={true}
        />
        <Slider
          img={image_2}
          title="Stan Lee - American comic book writer"
          newArrival={true}
        />
        <Slider
          img={image_3}
          title="Actor Robert downey jr - aka Iron Man in Marvel"
          newArrival={true}
        />
        <Slider
          img={image_4}
          title="Actor Chris Evans - aka Captain America in Marvel"
          newArrival={true}
        />
        <Slider
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

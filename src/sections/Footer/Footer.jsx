import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import logo from "../../assets/Svgs/logo.svg";

import { Section, LogoContainer, FooterComponent, Bottom } from "./styles.js";

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let element = document.querySelector(id);

    scroll.scrollTo(element, {
      offSet: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-Scroll data-scroll-speed="2" src={logo} alt="" />
        <h3 data-Scroll data-scroll-speed="-1">
          Hero
        </h3>
      </LogoContainer>

      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About</li>
          <li onClick={() => handleScroll("#series")}>Series</li>
          <li onClick={() => handleScroll("#people")}>People</li>
          <li>
            <a href="http://google.com" target={"_blank"} rel="noreferrer">
              Movies 2023
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              Review
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-Scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Right Reserved
          </span>{" "}
          <span
            data-Scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <a
              href="https://www.github.com/eulazzo"
              target={"_blank"}
              rel="noreferrer"
            >
              @eulazzo
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;

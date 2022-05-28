import styled from "styled-components";

// import img1 from "../assets/Images/MoonI 1.png";
// import img1 from "../assets/Images/MoonII 1.png";
// import img1 from "../assets/Images/MoonKnight.png";

import img1 from "../assets/Images/img-3.png";
import img3 from "../assets/Images/img-4.png";
import img4 from "../assets/Images/img-1.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48rem) {
    width: 90vw;
  }
  @media (max-width: 30rem) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontbig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontbig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64rem) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30rem) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
    opacity: 0.6;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64rem) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;
const Paragraph = styled.p``;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley <br />
          <br />
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting
          remaining essentially unchanged.
          <br />
          <br /> It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Paragraph>
      </Left>
      <Right>
        <img src={img4} alt="about us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img3}
          className="small-img-2"
          alt="about us"
        />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img1}
          className="small-img-1"
          alt="about us"
        />
      </Right>
    </Section>
  );
};

export default About;

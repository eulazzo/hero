import img1 from "../../assets/Images/img-3.png";
import img3 from "../../assets/Images/img-4.png";
import img4 from "../../assets/Images/img-1.png";

import { Section, Title, Left, Right, Paragraph } from "./styles";

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

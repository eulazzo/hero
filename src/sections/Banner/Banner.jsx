import { Section, Container, BannerSection } from "./styles";

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Cinema is a medium that can{" "}
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            translate ideas.
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            one batch two
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            {" "}
            batch penny and dime
          </span>
        </BannerSection>
        <BannerSection>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            and dime...
          </span>
        </BannerSection>
      </Container>
    </Section>
  );
};

export default Banner;

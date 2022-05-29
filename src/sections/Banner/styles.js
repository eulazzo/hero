import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

export const BannerSection = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

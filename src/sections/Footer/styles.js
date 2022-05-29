import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

export const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

export const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

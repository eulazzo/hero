import styled from "styled-components";

import { motion } from "framer-motion";

export const NavContainer = styled(motion.ul)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? 0 : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)}; 
  }
`;

export const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height:50vh;

  }
   
`;

export const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;
  }
`;

export const MenuButton = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.text};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 71% 100%, 31% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

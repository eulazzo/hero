import { motion } from "framer-motion";
import styled from "styled-components";

export const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 5px;
  }
  span {
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    font-size: 1.4rem;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

export const ItemArrival = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 1rem;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
    border-radius: 2px;
  }
  span {
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    font-size: 1.4rem;
  }
`;

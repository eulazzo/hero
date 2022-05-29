import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Text } from "./styles";

import { pathVariable, textVariable } from "./config";

const Logo = () => {
  return (
    <Container>
      <Link to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              variants={pathVariable}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <Text variants={textVariable} initial="hidden" animate="visible">
          Hero Studios
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;

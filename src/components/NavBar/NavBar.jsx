import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import { NavContainer, MenuItems, MenuItem, MenuButton } from "./styles";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let element = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(element, {
      offSet: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 5,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuButton onClick={() => setClick(!click)}>Menu</MenuButton>
        <MenuItem
          onClick={() => handleScroll("#home")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll(".about")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll("#series")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Series
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll("#people")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          People
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;

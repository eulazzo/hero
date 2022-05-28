import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import  { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

//to use gsap with locomotive scroll, its necessary to use
//scroller proxy provided by gsap

const ScrollTriggerProxy = () => {
  //first lets get instance of locomotive scroll
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);
  //Register scroll trigger plugin

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el; //locomotive scrolling element in our case it's app (main)

      scroll.on("scroll", ScrollTrigger.update); //on scroll of locomotive, update scrolltrigger

      // lets use scroller proxy
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;

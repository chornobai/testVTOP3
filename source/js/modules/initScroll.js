import gsap from "../vendor/gsap"
import ScrollSmoother from "../vendor/ScrollSmoother.min"
import ScrollTrigger from "../vendor/ScrollTrigger.min"


const initScroll = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(true)
  ScrollSmoother.create({
    smooth: 5,
    effects: true,
    normalizeScroll: true
  });

};

window.initScroll = initScroll;

// export {initScroll};

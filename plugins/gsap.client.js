import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(
      Draggable,
      Flip,
      ScrollToPlugin
    );
  }
  return {
    provide: {
      Draggable,
      Flip,
      gsap,
      ScrollToPlugin
    },
  };
});

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(
      Flip,
      ScrollToPlugin
    );
  }
  return {
    provide: {
      gsap,
      Flip,
      ScrollToPlugin
    },
  };
});

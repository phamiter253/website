export const useGsap = () => {
  const nuxtApp = useNuxtApp();

  return {
    Draggable: nuxtApp.$Draggable,
    Flip: nuxtApp.$Flip,
    gsap: nuxtApp.$gsap
  };
};

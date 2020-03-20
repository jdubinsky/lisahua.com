export const SCREEN_WIDTH_CUTOFF = 768;

const isMobile = (): boolean => {
  return screen.width < SCREEN_WIDTH_CUTOFF;
};

export default isMobile;

export const SCREEN_WIDTH_CUTOFF = 1000;

const isTablet = (): boolean => {
  return screen.width < SCREEN_WIDTH_CUTOFF;
};

export default isTablet;

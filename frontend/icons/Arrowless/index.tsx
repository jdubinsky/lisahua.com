import { h, FunctionComponent, VNode } from "preact";

const ArrowlessIcon: FunctionComponent = (): VNode => {
  return (
    <svg width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2H70" stroke="black" stroke-width="3" />
    </svg>
  );
};

export default ArrowlessIcon;

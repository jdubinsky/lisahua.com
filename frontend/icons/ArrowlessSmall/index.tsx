import { h, FunctionComponent, VNode } from "preact";

const ArrowlessSmall: FunctionComponent = (): VNode => {
  return (
    <svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2H30" stroke="black" stroke-width="3" />
    </svg>
  );
};

export default ArrowlessSmall;

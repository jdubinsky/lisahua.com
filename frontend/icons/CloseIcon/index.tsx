import { h, FunctionComponent, VNode } from "preact";

const ArrowlessIcon: FunctionComponent = (): VNode => {
  return (
    <svg fill="none" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="a">
        <path d="m0 0h30v30h-30z" />
      </clipPath>
      <g clip-path="url(#a)">
        <path
          clip-rule="evenodd"
          d="m15.0001 17.8284 7.0711 7.0711 2.8284-2.8284-7.0711-7.0711 7.0711-7.07107-2.8284-2.82842-7.0711 7.07109-7.07106-7.07109-2.82843 2.82842 7.07109 7.07107-7.07109 7.0711 2.82843 2.8284z"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
};

export default ArrowlessIcon;

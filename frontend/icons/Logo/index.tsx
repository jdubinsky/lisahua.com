import { h, FunctionComponent, VNode } from "preact";

const Logo: FunctionComponent = (): VNode => {
  return (
    <svg
      style="vertical-align: top;"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 0H0V60H60V0ZM17.6122 20.0452H13.407V39.1304H25.4026V35.2487H17.6122V20.0452ZM31.929 20.0452H27.7238V39.1304H31.929V30.8817H40.0969V39.1304H44.3021V20.0452H40.0969V27.1617H31.929V20.0452Z"
        fill="#21282E"
      />
    </svg>
  );
};

export default Logo;

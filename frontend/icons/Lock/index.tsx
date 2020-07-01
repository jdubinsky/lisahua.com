import { h, FunctionComponent, VNode } from "preact";

interface LockProps {
  className: string;
}

const LockIcon: FunctionComponent<LockProps> = (props): VNode => {
  const { className } = props;

  return (
    <svg
      className={className}
      width="53"
      height="65"
      viewBox="0 0 53 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.375 21.6667H43.0625V15.4762C43.0625 6.93333 35.6425 0 26.5 0C17.3575 0 9.9375 6.93333 9.9375 15.4762V21.6667H6.625C2.98125 21.6667 0 24.4524 0 27.8571V58.8095C0 62.2143 2.98125 65 6.625 65H46.375C50.0187 65 53 62.2143 53 58.8095V27.8571C53 24.4524 50.0187 21.6667 46.375 21.6667ZM26.5 49.5238C22.8563 49.5238 19.875 46.7381 19.875 43.3333C19.875 39.9286 22.8563 37.1429 26.5 37.1429C30.1437 37.1429 33.125 39.9286 33.125 43.3333C33.125 46.7381 30.1437 49.5238 26.5 49.5238ZM36.7688 21.6667H16.2312V15.4762C16.2312 10.1833 20.8356 5.88095 26.5 5.88095C32.1644 5.88095 36.7688 10.1833 36.7688 15.4762V21.6667Z"
        fill="black"
      />
    </svg>
  );
};

export default LockIcon;

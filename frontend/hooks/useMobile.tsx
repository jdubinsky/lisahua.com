import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

import isMobile from "../is-mobile";
import { AvenirFontDiv } from "../text-styles";

interface UseMobile {
  isCollapsed: boolean;
  onReadMore: () => void;
  onCollapse: () => void;
  getCollapseButton: () => void;
}

const useMobile = (): UseMobile => {
  const [isCollapsed, setIsCollapsed] = useState(isMobile());

  useEffect(() => {
    console.log("use effect", isCollapsed);
    if (isCollapsed) {
      window.scrollTo(0, 0);
    }
  }, [isCollapsed]);

  const onReadMore = () => {
    setIsCollapsed(false);
  };

  const onCollapse = () => {
    setIsCollapsed(true);
  };

  const getCollapseButton = () => {
    if (!isMobile()) {
      return <Fragment />;
    }

    if (isCollapsed) {
      return <Fragment />;
    }

    return (
      <AvenirFontDiv marginTop="30px">
        <button onClick={onCollapse}>collapse -</button>
      </AvenirFontDiv>
    );
  };

  return {
    isCollapsed,
    getCollapseButton,
    onReadMore,
    onCollapse,
  };
};

export default useMobile;

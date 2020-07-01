import { h, FunctionComponent, VNode } from "preact";

import Content from "../Content";
import Sidebar from "../Sidebar";

import * as styles from "./styles";

const Container: FunctionComponent = (): VNode => {
  return (
    <styles.Container>
      <Sidebar />
      <Content />
    </styles.Container>
  );
};

export default Container;

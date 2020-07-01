import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

const Footer: FunctionComponent = (): VNode => {
  return (
    <styles.Footer marginTop="50px">
      <styles.LeftFooter>© 2020 lisa hua</styles.LeftFooter>
    </styles.Footer>
  );
};

export default Footer;

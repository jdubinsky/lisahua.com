import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

const Footer: FunctionComponent = (): VNode => {
  return (
    <styles.Footer marginTop="50px">
      <styles.LeftFooter>
        <styles.FooterText>say hello</styles.FooterText>
        <styles.BoldFooterText>
          <a href="mailto:lisavhua@gmail.com?subject=Hey Lisa!">lisavhua@gmail.com</a>
        </styles.BoldFooterText>
      </styles.LeftFooter>
      <styles.RightFooter>
        <styles.FooterText>© 2020 lisa hua</styles.FooterText>
        <styles.FooterText>
          <a href="https://jdubinsky.dev">developed by jacob dubinsky</a>
        </styles.FooterText>
      </styles.RightFooter>
    </styles.Footer>
  );
};

export default Footer;

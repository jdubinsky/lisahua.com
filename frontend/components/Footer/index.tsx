import { h, Component } from "preact";

import * as styles from "./styles";

export default class Footer extends Component {
  render() {
    return (
      <styles.Footer marginTop="50px">
        <styles.LeftFooter>© 2020 lisa hua</styles.LeftFooter>
      </styles.Footer>
    );
  }
}

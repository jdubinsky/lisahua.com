import { h, Component, Fragment } from "preact";

import * as styles from "./styles";

interface TextListProps {
  header: string;
  listItems: string[];
}

export default class TextList extends Component<TextListProps, {}> {
  render() {
    const { header, listItems } = this.props;

    const listComponents = listItems.map(item => {
      return <styles.Text>{item}</styles.Text>;
    });

    return (
      <Fragment>
        <styles.Header>{header}</styles.Header>
        {listComponents}
      </Fragment>
    );
  }
}

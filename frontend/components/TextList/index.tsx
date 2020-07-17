import { h, Fragment, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

interface TextListProps {
  header: string;
  listItems: string[];
}

const TextList: FunctionComponent<TextListProps> = ({ header, listItems }): VNode => {
  const listComponents = listItems.map((item) => {
    return <styles.Text>{item}</styles.Text>;
  });

  return (
    <Fragment>
      <styles.Header>{header}</styles.Header>
      {listComponents}
    </Fragment>
  );
};

export default TextList;

import { h, FunctionComponent, VNode } from "preact";

import * as styles from "./styles";

interface BulletListProps {
  listItems: string[];
}

const BulletList: FunctionComponent<BulletListProps> = ({ listItems }): VNode => {
  const listComponents = listItems.map((item) => {
    return <styles.ListItem>{item}</styles.ListItem>;
  });

  return <styles.BulletList>{listComponents}</styles.BulletList>;
};

export default BulletList;

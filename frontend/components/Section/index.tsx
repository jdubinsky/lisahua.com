import { h, FunctionComponent, Fragment, VNode } from "preact";

import BulletList from "../BulletList";
import MaxWidthImage from "../MaxWidthImage";
import ParagraphText from "../ParagraphText";
import SmallSection from "../SmallSection";

import * as styles from "./styles";

interface ElNode {
  nodeType: "node";
  node: VNode;
}

interface SmallSectionNode {
  nodeType: "smallSection";
  node: string[];
  header: string;
}

interface LinkNode {
  nodeType: "link";
  node: string;
  text?: string;
}

interface ParagraphNode {
  nodeType: "paragraph";
  node: string;
  customStyle?: { [key: string]: string };
}

interface QuoteNode {
  nodeType: "quote";
  node: string;
}

interface CaptionNode {
  nodeType: "caption";
  node: string;
}

interface LightHeaderNode {
  nodeType: "lightHeader";
  node: string;
}

interface HeaderNode {
  nodeType: "header";
  node: string;
}

interface CopyNode {
  nodeType: "copy";
  node: string;
  customStyle?: { [key: string]: string };
}

interface ImageNode {
  nodeType: "image";
  node: string;
}

interface BulletListNode {
  nodeType: "bulletList";
  node: string[];
}

export type SectionNode =
  | ElNode
  | SmallSectionNode
  | QuoteNode
  | CaptionNode
  | ParagraphNode
  | LightHeaderNode
  | HeaderNode
  | CopyNode
  | ImageNode
  | LinkNode
  | BulletListNode;

interface SectionProps {
  sections: SectionNode[];
}

const Section: FunctionComponent<SectionProps> = ({ sections }): VNode => {
  function renderSectionNodes(sections: SectionNode[]): VNode[] {
    return sections.map((sectionNode) => {
      switch (sectionNode.nodeType) {
        case "header":
          return <styles.Header>{sectionNode.node}</styles.Header>;
        case "lightHeader":
          return <styles.LightHeader>{sectionNode.node}</styles.LightHeader>;
        case "copy":
          return <styles.Text style={sectionNode.customStyle}>{sectionNode.node}</styles.Text>;
        case "paragraph":
          return <ParagraphText content={sectionNode.node} />;
        case "quote":
          return <styles.Quote>{sectionNode.node}</styles.Quote>;
        case "caption":
          return <styles.Caption>{sectionNode.node}</styles.Caption>;
        case "image":
          return <MaxWidthImage imageUrl={sectionNode.node} modalImageUrl={sectionNode.node} />;
        case "bulletList":
          return <BulletList listItems={sectionNode.node} />;
        case "link":
          return <styles.Link href={sectionNode.node}>{sectionNode.text}</styles.Link>;
        case "smallSection":
          return <SmallSection header={sectionNode.header} textItems={sectionNode.node} />;
        case "node":
          return sectionNode.node;
        default:
          return <Fragment />;
      }
    });
  }

  return <Fragment>{renderSectionNodes(sections)}</Fragment>;
};

export default Section;

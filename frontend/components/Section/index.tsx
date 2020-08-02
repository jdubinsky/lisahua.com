import { h, FunctionComponent, Fragment, VNode } from "preact";

import BulletList from "../BulletList";
import MaxWidthImage from "../MaxWidthImage";
import ParagraphText from "../ParagraphText";

import * as styles from "./styles";

interface ElNode {
  nodeType: "node";
  node: VNode;
}

interface LinkNode {
  nodeType: "link";
  node: string;
  text?: string;
}

interface ParagraphNode {
  nodeType: "paragraph";
  node: string;
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
  title: string;
  sections: SectionNode[];
}

const Section: FunctionComponent<SectionProps> = ({ title, sections }): VNode => {
  function renderSectionNodes(sections: SectionNode[]) {
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
        case "node":
          return sectionNode.node;
        default:
          return null;
      }
    });
  }

  return (
    <styles.Container>
      <styles.Title>{title}</styles.Title>
      {renderSectionNodes(sections)}
    </styles.Container>
  );
};

export default Section;

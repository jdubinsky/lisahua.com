import { h, FunctionComponent, VNode } from "preact";

import MaxWidthImage from "../MaxWidthImage";

import * as styles from "./styles";

interface ProjectCardProps {
  highlightText?: string;
  title: string;
  content: string;
  link: VNode;
  imgUrl: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  highlightText = null,
  title,
  content,
  link,
  imgUrl,
}): VNode => {
  const highlightEl = highlightText !== null ? <styles.HighlightText>{highlightText}</styles.HighlightText> : null;
  return (
    <styles.Container>
      {highlightEl}
      <styles.Title>{title}</styles.Title>
      <styles.Content>{content}</styles.Content>
      {link}
      <MaxWidthImage imageUrl={imgUrl} />
    </styles.Container>
  );
};

export default ProjectCard;

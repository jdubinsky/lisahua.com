import { h, Fragment, FunctionComponent, VNode } from "preact";
import { Link } from "react-router-dom";

import MaxWidthImage from "../MaxWidthImage";

import * as styles from "./styles";

interface ProjectCardProps {
  highlightText?: string;
  title: string;
  content: string;
  linkUrl?: string;
  linkButton: VNode;
  imgUrl: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  highlightText = null,
  title,
  content,
  linkUrl,
  linkButton,
  imgUrl,
}): VNode => {
  const highlightEl =
    highlightText !== null ? (
      <Fragment>
        <styles.HighlightText>{highlightText}</styles.HighlightText>
        <styles.SmallSpacer />
      </Fragment>
    ) : null;

  const linkInner = (
    <Fragment>
      {linkButton}
      <styles.Spacer />
      <styles.ImgContainer>
        <MaxWidthImage imageUrl={imgUrl} />
      </styles.ImgContainer>
    </Fragment>
  );

  const link = linkUrl === undefined ? <div>{linkInner}</div> : <Link to={linkUrl}>{linkInner}</Link>;

  return (
    <styles.Container>
      {highlightEl}
      <styles.Title>{title}</styles.Title>
      <styles.Content>{content}</styles.Content>
      <styles.Spacer />
      {link}
    </styles.Container>
  );
};

export default ProjectCard;

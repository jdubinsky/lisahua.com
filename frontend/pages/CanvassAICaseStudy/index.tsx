import { h, FunctionComponent, Fragment, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";

import Footer from "../../components/Footer";
import ImageModal from "../../components/ImageModal";
import SectionHeader from "../../components/SectionHeader";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import TextList from "../../components/TextList";

import useModal from "../../hooks/useModal";

import isMobile from "../../is-mobile";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const CanvassAICaseStudyPage: FunctionComponent = (): VNode => {
  const [isCollapsed, setIsCollapsed] = useState(isMobile());
  const { isVisible, open, close } = useModal();

  useEffect(() => {
    if (isCollapsed === true) {
      window.scrollTo(0, 0);
    }
  }, [isCollapsed]);

  const renderImageWithModal = (imageUrl: string, modalImageUrl: string) => {
    // TODO: make HOC
    if (isMobile()) {
      return (
        <Fragment>
          <styles.MaxWidthImage src={imageUrl} />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <styles.MaxWidthImage src={imageUrl} onClick={open} />
        <ImageModal imageUrl={modalImageUrl} isVisible={isVisible} onClose={close} />
      </Fragment>
    );
  };

  const onReadMore = () => {
    setIsCollapsed(false);
  };

  const onCollapse = () => {
    setIsCollapsed(true);
  };

  const getCollapseButton = () => {
    if (!isMobile()) {
      return <Fragment />;
    }

    if (isCollapsed) {
      return <Fragment />;
    }

    return (
      <styles.AvenirText marginTop="30px">
        <button onClick={onCollapse}>collapse -</button>
      </styles.AvenirText>
    );
  };

  const getProjectInfo = () => {
    const roles = ["user flow", "wireframes", "visual designs"];
    return <TextList header="role" listItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["web application"];
    return <TextList header="project type" listItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <TextList header="timeline" listItems={["dec 2017 - feb 2018"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["sketch", "invision", "anima app"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  };

  const getCredits = () => {
    const credits = [
      { name: "courtney zorio", title: "(project manager)" },
      { name: "rennie chun", title: "(lead visual designer)" },
      { name: "lisa hua", title: "(user experience designer)" },
    ];

    const creditTexts = credits.map((credit) => {
      return (
        <styles.Text>
          {credit.name}
          <styles.LightText>{credit.title}</styles.LightText>
        </styles.Text>
      );
    });

    return (
      <styles.Column>
        <styles.SubHeader>credits</styles.SubHeader>
        {creditTexts}
      </styles.Column>
    );
  };

  const getSidebarContent = () => {
    if (isCollapsed) {
      return (
        <styles.AvenirText>
          <button onClick={onReadMore}>read more +</button>
        </styles.AvenirText>
      );
    }

    return (
      <Fragment>
        {getProjectInfo()}
        {getProjectType()}
        {getTimeline()}
        {getToolsInfo()}
        {getCredits()}
        {getCollapseButton()}
      </Fragment>
    );
  };

  const getSidebar = () => {
    return (
      <PageSidebar width={32} widthOffset={115} maxWidth="375" minWidth="300">
        <styles.Title marginBottom="40px">Canvass AI</styles.Title>
        <styles.Text>{copy.titleDescription}</styles.Text>
        {getSidebarContent()}
      </PageSidebar>
    );
  };

  const getContextSection = () => {
    return (
      <Fragment>
        <SectionHeader title="context" content={copy.context} />
        <styles.SpacerDiv marginTop="30px" marginBottom="10px">
          {renderImageWithModal(constants.oldWebAppUrl2x, constants.oldWebAppUrl2x)}
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="50px">Screenshots of Canvass AI’s demo environment</styles.BigLightText>
      </Fragment>
    );
  };

  const getHighlightsSection = () => {
    return (
      <Fragment>
        <SectionHeader title="highlights" content={copy.highlights} />
        <styles.SmallHeader marginBottom="15px">wireframes</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.wireframes}</styles.Text>
        <styles.SpacerDiv marginBottom="50px">
          {renderImageWithModal(constants.wireframesUrl2x, constants.wireframesUrl2x)}
        </styles.SpacerDiv>
        <styles.SmallHeader marginBottom="15px">user flow</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.userFlow}</styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          {renderImageWithModal(constants.userFlowUrl2x, constants.userFlowUrl2x)}
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">Canvass AI's userflow</styles.BigLightText>
        <styles.SmallHeader marginBottom="15px">high fidelity designs</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.highFidelityPartOne}</styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          {renderImageWithModal(constants.moodboardUrl2x, constants.moodboardUrl2x)}
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">Visual inspiration gathered in our research</styles.BigLightText>
        <styles.Text marginBottom="30px">{copy.highFidelityPartTwo}</styles.Text>
        <styles.SpacerDiv marginBottom="10px">
          {renderImageWithModal(constants.tableComparisonUrl2x, constants.tableComparisonUrl2x)}
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="50px">
          The brand color and table designs were tweaked for a cleaner look
        </styles.BigLightText>
      </Fragment>
    );
  };

  const getResultsSection = () => {
    return (
      <Fragment>
        <SectionHeader title="results" content={copy.results} />
      </Fragment>
    );
  };

  const getContent = () => {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginBottom="50px">
          {renderImageWithModal(constants.heroUrl2x, constants.heroUrl2x)}
        </styles.SpacerDiv>
        {getContextSection()}
        {getHighlightsSection()}
        {getResultsSection()}
        <Footer />
      </PageContent>
    );
  };

  return (
    <styles.Container>
      {getSidebar()}
      {getContent()}
    </styles.Container>
  );
};

export default CanvassAICaseStudyPage;

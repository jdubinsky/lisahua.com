import { h, FunctionComponent, Fragment, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";

import Footer from "../../components/Footer";
import isMobile from "../../is-mobile";
import MaxWidthImage from "../../components/MaxWidthImage";
import PageContent from "../../components/PageContent";
import PageSidebar from "../../components/PageSidebar";
import ParagraphText from "../../components/ParagraphText";
import SectionHeader from "../../components/SectionHeader";
import TextList from "../../components/TextList";

import * as constants from "./constants";
import * as copy from "./copy";
import * as styles from "./styles";

const MagnentCaseStudyPage: FunctionComponent = (): VNode => {
  const [isCollapsed, setIsCollapsed] = useState(isMobile());

  useEffect(() => {
    if (isCollapsed === true) {
      window.scrollTo(0, 0);
    }
  }, [isCollapsed]);

  const getProjectInfo = () => {
    const roles = [
      "information architecture",
      "user personas",
      "journey mapping",
      "wireframes",
      "stakeholder interviews",
      "user testing",
    ];
    return <TextList header="role" listItems={roles} />;
  };

  const getProjectType = () => {
    const projectTypes = ["marketing", "website"];
    return <TextList header="project type" listItems={projectTypes} />;
  };

  const getTimeline = () => {
    return <TextList header="timeline" listItems={["june - aug 2018"]} />;
  };

  const getToolsInfo = () => {
    const tools = ["sketch", "invision", "highfive", "skype for teams"];
    const list = <TextList header="tools" listItems={tools} />;
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  };

  const getCredits = () => {
    const credits = [
      { name: "alison ma", title: "(product manager)" },
      { name: "joshua van boxtel", title: "(lead wordpress developer)" },
      { name: "orest hazda", title: "(lead developer)" },
      { name: "rennie chun", title: "(lead visual designer)" },
      { name: "justin damer", title: "(visual designer)" },
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

  const onReadMore = () => {
    setIsCollapsed(false);
  };

  const onCollapse = () => {
    setIsCollapsed(true);
  };

  const getCollapseButton = () => {
    if (!isMobile() || isCollapsed) {
      return <Fragment />;
    }

    return (
      <styles.AvenirText marginTop="30px">
        <button onClick={onCollapse}>collapse -</button>
      </styles.AvenirText>
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
        <styles.Title>Magnet</styles.Title>
        <styles.Title marginBottom="40px">Forensics</styles.Title>
        <styles.Text marginBottom="30px">{copy.description}</styles.Text>
        {getSidebarContent()}
      </PageSidebar>
    );
  };

  const getProjectGoals = () => {
    return (
      <Fragment>
        <styles.SmallHeader marginBottom="15px">project goals</styles.SmallHeader>
        <styles.Text marginBottom="30px">
          During our initial discovery session, we identified the following goals for the website:
        </styles.Text>
        <styles.BulletList>
          <styles.ListItem>
            Help users understand the differences between their previous product (Magnet IEF) and their new offerings
            (Magnet AXIOM and beyond)
          </styles.ListItem>
          <styles.ListItem>Improve the “Book A Demo” user flow</styles.ListItem>
          <styles.ListItem>
            Organize resources in a way that made it easy to find and use for existing users
          </styles.ListItem>
        </styles.BulletList>
        <styles.BlackBackgroundImage>
          <MaxWidthImage imageUrl={constants.magnetWhiteboardUrl2x} modalImageUrl={constants.magnetWhiteboardUrl2x} />
        </styles.BlackBackgroundImage>
        <styles.Text marginTop="30px">
          And after speaking with our stakeholders, we uncovered additional goals that would roll up to the primary
          objectives.
        </styles.Text>
        <styles.BulletList>
          <styles.ListItem>
            Create different journeys to help users find the product offering that suited their needs.
          </styles.ListItem>
          <styles.ListItem>Get the appropriate training to use the tools in their workflow</styles.ListItem>
        </styles.BulletList>
      </Fragment>
    );
  };

  const getContextTable = () => {
    return <SectionHeader title="context" content={copy.context} />;
  };

  const getContextSection = () => {
    return (
      <Fragment>
        {getContextTable()}
        <styles.SmallHeader marginBottom="15px">problem</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.problem}</styles.Text>
        <styles.SmallHeader marginBottom="15px">approach</styles.SmallHeader>
        <styles.Text marginBottom="30px">{copy.approach}</styles.Text>
        <styles.SubHeader marginBottom="10px">research</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.approachResearch}</styles.Text>
        <styles.SubHeader marginBottom="10px">synthesis</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.synthesis}</styles.Text>
        <styles.SubHeader marginBottom="10px">testing</styles.SubHeader>
        <styles.Text marginBottom="30px">{copy.testing}</styles.Text>
        {getProjectGoals()}
      </Fragment>
    );
  };

  const getCustomerInterviewsSubSection = () => {
    return (
      <Fragment>
        <ParagraphText content={copy.interviews} />
        <styles.BulletList>
          <styles.ListItem>
            They’re accustomed to using free and open-source tools instead of automation
          </styles.ListItem>
          <styles.ListItem>
            There is a lack of funding and time available for Forensic examiners to undertake training, especially for
            in-person courses
          </styles.ListItem>
          <styles.ListItem>
            They were not the primary decision maker in the product purchase; they would submit requests for any new
            tools or training and had to make their case to their managers
          </styles.ListItem>
          <styles.ListItem>
            Leadership roles in the public sector often had a budget to spend every year; a “use it or lose it” type of
            policy
          </styles.ListItem>
        </styles.BulletList>
      </Fragment>
    );
  };

  const getResearchSection = () => {
    return (
      <Fragment>
        <SectionHeader title="research" content={copy.research} />
        <styles.SmallHeader>competitive analysis</styles.SmallHeader>
        <ParagraphText content={copy.competitiveAnalysis} />
        <styles.BigQuote marginTop="30px" marginBottom="30px">
          “No one tool is perfect, there's always room for improvement which is why we utilise several tools for
          analysis.”
        </styles.BigQuote>
        <styles.SmallHeader marginBottom="15px">stakeholder interviews</styles.SmallHeader>
        <styles.Text>{copy.stakeholderInterviews}</styles.Text>
        <styles.SpacerDiv marginTop="30px" marginBottom="10px">
          <MaxWidthImage
            imageUrl={constants.magnetStakeholdersUrl2x}
            modalImageUrl={constants.magnetStakeholdersUrl2x}
          />
        </styles.SpacerDiv>
        <styles.BigLightText marginBottom="30px">
          Over the course of two days we conducted in-person interviews with various stakeholders at Magnet Forensics
        </styles.BigLightText>
        {getCustomerInterviewsSubSection()}
        <MaxWidthImage imageUrl={constants.magnetCustomerUrl2x} modalImageUrl={constants.magnetCustomerUrl2x} />
        <styles.BigLightText marginTop="10px">
          Conducting a customer interview with examiners from the UK.
        </styles.BigLightText>
        <styles.SmallHeader marginTop="30px">challenges</styles.SmallHeader>
        <ParagraphText content={copy.challenges} />
      </Fragment>
    );
  };

  const getDefineSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="define" content={copy.define} />
        <styles.SmallHeader marginBottom="30px">personas</styles.SmallHeader>
        <styles.SpacerDiv marginBottom="30px">
          <MaxWidthImage imageUrl={constants.magnetPersonaFE2x} modalImageUrl={constants.magnetPersonaFE2x} />
        </styles.SpacerDiv>
        <styles.Text>
          This is Raymond, a fictional Forensic Examiner. He’s extremely detail-oriented and has a backlog of over forty
          devices he needs to process. Each one could take anywhere between two to eight hours to do manually, depending
          on the complexity of the case and the information that he needed to find. But a colleague of his mentioned
          Magnet AXIOM, so he’s looking for a way to get a free trial. He’s looking for something that fits into his
          existing workflow and reduces his workload.
        </styles.Text>
        <styles.SpacerDiv marginTop="45px" marginBottom="25px">
          <MaxWidthImage imageUrl={constants.magnetPersonaPL2x} modalImageUrl={constants.magnetPersonaPL2x} />
        </styles.SpacerDiv>
        <styles.Text>
          Scott represents the chain of command within a police organization and a decision maker in the purchasing
          decision. While forensic examiners like Raymond can influence their organization from the bottom-up, Magnet
          Forensics wanted to cater to police leaders who were responsible for organization-wide decisions. Their
          existing customers include the U.S. Department of Homeland Security and the Department of Justice.
        </styles.Text>
        <styles.Text marginTop="25px">
          This user group was especially difficult to find interviewees, however we were fortunate enough to be put in
          contact with a police advisor. He previously consulted with the Peel Regional Police and spoke to some of the
          pain points that police leaders faced. Their needs were vastly different than the Forensic Examiner; they
          weren’t involved in investigations, but they were concerned on their organizations performance metrics such as
          crime solve rate and resource allocation.
        </styles.Text>
        <styles.SpacerDiv marginTop="50px" marginBottom="30px">
          <MaxWidthImage
            imageUrl={constants.magnetPersonaInvestigator2x}
            modalImageUrl={constants.magnetPersonaInvestigator2x}
          />
        </styles.SpacerDiv>
        <styles.Text>
          Charles is the Investigator - a persona that didn’t immediately surface during my research. During the
          stakeholder interviews, our team learned about Magnet Forensics’ intention to launch a new suite of tools
          designed for investigators. The investigators are in charge of leading the investigation; they coordinate
          between different parties and assign tasks to Forensic Examiners. This persona would be interested in Magnet
          Forensics’ expanded products which doesn’t require certification to use like Magnet AXIOM, but shifts the
          chain of command towards an asynchronous model where Forensic Examiners could automate their workflow and
          report their progress in an effective manner.
        </styles.Text>
        <styles.SmallHeader marginTop="50px">journey mapping</styles.SmallHeader>
        <styles.Text marginTop="15px">
          I created customer journey maps of the existing site for the different personas and printed them out and
          pinned them to the wall to make it easier to review in a meeting. This made it easier for the team to get
          together and analyze each step in the journey; where were users dropping off, where was information being
          duplicated? Each persona was looking for something different from the website and it helped jump-start the
          team to think about the way information was organized on the site.
        </styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetJourneyMap2x} modalImageUrl={constants.magnetJourneyMap2x} />
        </styles.SpacerDiv>
      </styles.SpacerDiv>
    );
  };

  const getIdeateSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="ideate" content={copy.ideate} />
        <styles.SmallHeader marginTop="50px">information architecture</styles.SmallHeader>
        <styles.Text marginTop="15px">
          We tailored the journey to suit the three persona types identified in our research. Our approach to this was
          designing dedicated solutions pages that each persona could self-identify with and find the appropriate tool
          for their skill level and job requirements. By doing so, we helped reduce decision fatigue from the users,
          especially the leadership roles, who didn’t have the time to go through Magnet Forensics’ entire product line.
        </styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetIA2x} modalImageUrl={constants.magnetIA2x} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginTop="50px">wireframes</styles.SmallHeader>
        <styles.Text marginTop="15px">
          I created forty-three screens that covered the primary functions of the website including: the home, product
          overview, and product landing pages, solutions pages, start a free trial, and the blog & resource centre.
        </styles.Text>
        <styles.SpacerDiv marginTop="20px">
          <MaxWidthImage imageUrl={constants.magnetWireframes2x} modalImageUrl={constants.magnetWireframes2x} />
        </styles.SpacerDiv>
        <styles.SmallHeader marginTop="30px">usability testing</styles.SmallHeader>
        <styles.Text marginTop="15px">
          Using an Invision prototype, we conducted three usability tests with recruited participants with varying
          degrees of knowledge of Magnet AXIOM. Participants were instructed to complete four common tasks, with the
          goal of evaluating the user’s understanding of the information architecture.
        </styles.Text>
        <styles.Text marginTop="25px">One concern that was brought up in our testing session:</styles.Text>
        <styles.BulletList>
          <styles.ListItem>
            The content in the prototype did not effectively address Magnet AXIOM’s ability to perform smart phone
            investigations.
          </styles.ListItem>
        </styles.BulletList>
        <styles.Text marginTop="25px">
          After testing, I created a report that summarized the results of the testing and the recommendations to
          improve the user flow. I went back to adjust the wireframes and placed higher emphasis on smart phones by
          following an “F” shaped pattern and moved the smart phone tab on the left-hand side. I also included a section
          on the home page about smart phone investigations with a related customer story as social proof.
        </styles.Text>
        <styles.SpacerDiv marginTop="30px">
          <MaxWidthImage imageUrl={constants.magnetUT2x} modalImageUrl={constants.magnetUT2x} />
        </styles.SpacerDiv>
      </styles.SpacerDiv>
    );
  };

  const getRetroSection = () => {
    return (
      <styles.SpacerDiv marginTop="50px">
        <SectionHeader title="retro" content={copy.retro} />
        <styles.SmallHeader marginTop="50px">results</styles.SmallHeader>
        <styles.Text marginTop="25px">
          After the launch of the new website, we observed the following positive outcomes:
        </styles.Text>
        <styles.BulletList>
          <styles.ListItem>
            Click throughs to “Try Magnet AXIOM” increased from 2470 pre-launch to 2978 post-launch
          </styles.ListItem>
          <styles.ListItem>Increased time-on-page on both the blog and resources.</styles.ListItem>
        </styles.BulletList>
        <styles.SmallHeader marginTop="30px">next steps</styles.SmallHeader>
        <styles.Text marginTop="25px">
          While our initial project scope only extended as far as the marketing website, we plan to observe the site’s
          health and continually engage with Magnet Forensics to improve site performance and usability. Given more time
          and resources, I’d like to incorporate in-depth research practices in the discovery such as conducting field
          studies and conducting open card sorting exercises to better categorize engaging content such as resources and
          blog posts.
        </styles.Text>
        <styles.Text marginTop="25px">
          See the live website
          <styles.Link href="https://www.magnetforensics.com/">here</styles.Link>
        </styles.Text>
      </styles.SpacerDiv>
    );
  };

  const getContent = () => {
    return (
      <PageContent width={68} widthOffset={115} maxWidth={725}>
        <styles.SpacerDiv marginBottom="50px">
          <MaxWidthImage imageUrl={constants.magnetHeroUrl2x} modalImageUrl={constants.magnetHeroUrl2x} />
        </styles.SpacerDiv>
        {getContextSection()}
        {getResearchSection()}
        {getDefineSection()}
        {getIdeateSection()}
        {getRetroSection()}
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

export default MagnentCaseStudyPage;

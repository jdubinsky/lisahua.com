import { h, Component, Fragment } from "preact";
import { Link } from "react-router-dom";

import * as constants from "../../constants";
import ArrowlessIcon from "../../icons/Arrowless";

import * as styles from "./styles";

import contextString from "./context.txt";
import problemString from "./problem.txt";
import competitiveAnalysisString from "./competitive-analysis.txt";
import challengesString from "./challenges.txt";

const description = `
Redesigning the experience of buying and training investigative forensic equipment.
`;

export default class MagnentCaseStudyPage extends Component {
  buildList(header: string, listItems: string[]) {
    const listComponents = listItems.map(item => {
      return <styles.Text>{item}</styles.Text>;
    });

    return (
      <Fragment>
        <styles.SubHeader>{header}</styles.SubHeader>
        {listComponents}
      </Fragment>
    );
  }

  getProjectInfo() {
    return (
      <styles.Table marginBottom="30px">
        <styles.Column width="60%">
          {this.buildList("role", [
            "information architecture",
            "user personas",
            "journey mapping",
            "wireframes",
            "stakeholder interviews",
            "user testing"
          ])}
        </styles.Column>
        <styles.Column width="40%">
          <styles.SubHeader>project type</styles.SubHeader>
          <styles.Text>marketing</styles.Text>
          <styles.Text>website</styles.Text>
          <styles.SubHeader marginTop="30px">timeline</styles.SubHeader>
          <styles.Text>june - aug 2018</styles.Text>
        </styles.Column>
      </styles.Table>
    );
  }

  getToolsInfo() {
    const list = this.buildList("tools", [
      "sketch",
      "invision",
      "highfive",
      "skype for teams"
    ]);
    return <styles.Column marginBottom="30px">{list}</styles.Column>;
  }

  getCredits() {
    const credits = [
      { name: "alison ma", title: "(product manager)" },
      { name: "joshua van boxtel", title: "(lead wordpress developer)" },
      { name: "rennie chun", title: "(lead visual designer)" },
      { name: "justin damer", title: "(visual designer)" },
      { name: "lisa hua", title: "(user experience designer)" }
    ];

    const creditTexts = credits.map(credit => {
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
  }

  getContributionsList() {
    return this.buildList("contribution to the project", [
      "UX designer in charge of the discovery process which was new at the time",
      "stakeholder interviews, customer journey mapping, personas, IA, and wireframes",
      "user testing & recruitment",
      "handed off designs to visual"
    ]);
  }

  getCompetitiveAnalysisList() {
    return this.buildList("competitive analysis", [
      "did our own analysis",
      "looked at their competitor’s (mostly product offering) and what magnet was doing differently, how their story was different",
      "most companies did bits and pieces of the examination process, but axiom covered everything",
      "distrusted using a single tool because they were taught to check their work with multiple tools (and didn’t want to replace their existing toolset)",
      "was used to using a mix of open source and other tools along with manual processes instead of automation"
    ]);
  }

  getChallenges() {
    return this.buildList("challenges", [
      "finding SMEs was difficult because if the niche market",
      "We were limited by our time to find more respondents -- joined slack channels, linkedin groups, forums and posted looking for people to interview"
    ]);
  }

  getStakeholderInterviews() {
    return this.buildList("stakeholder interviews", [
      "Interviewed with multiple of the VPs and Directors of different departments including the CEO and the Founder/CTO to understand their pain points with the existing site"
    ]);
  }

  getCustomerInterviews() {
    return this.buildList("customer interviews", [
      "spoke with former forensic examiners from Magnet as well",
      "conducted small surveys to get an understanding of what type of products were in the market for FE, the type of investigations they worked on, and how open were they to trynig out new tools, as well as who were the decision makers in the buying process"
    ]);
  }

  getPersonasList() {
    return this.buildList("personas", [
      "forensic examiner, mid level careers, very techncial (corporate and police version)",
      "investigator, would be using the other magnet tools, and leading investigations",
      "police chief - lower knowledge of tool, primary decision maker",
      "explored a few other ones like the leaders/promoters who would act as the coaches/thought leaders in the industry but left them out as they weren’t the primary audiences Magnet was looking for",
      "presented to client and matched very similar personas they used internally"
    ]);
  }

  getPersonasChallengesList() {
    return this.buildList("challenges", [
      "lots of different audiences and marketing team had a hard time segmenting their messaging to the police/corporate",
      "corporate had the money that the client wanted but the police had the mission that the client aligned with older generation of FE didn’t like changing their processes and trying new tools",
      "newer examiners were open to using automated tools and influece their organization’s purchasing decisions"
    ]);
  }

  getSpacedList(header: string, items: string[]) {
    const itemComponents = items.map(item => {
      return <styles.Text marginTop="15px">{item}</styles.Text>;
    });

    return (
      <Fragment>
        <styles.SmallHeader>{header}</styles.SmallHeader>
        {itemComponents}
      </Fragment>
    );
  }

  getSidebar() {
    return (
      <styles.SidebarContainer>
        <styles.Title>Magnet</styles.Title>
        <styles.Title marginBottom="40px">Forensics</styles.Title>
        <styles.Text marginBottom="30px">{description}</styles.Text>
        {this.getProjectInfo()}
        {this.getToolsInfo()}
        {this.getCredits()}
      </styles.SidebarContainer>
    );
  }

  getProjectGoals() {
    return (
      <Fragment>
        <styles.SmallHeader marginBottom="15px">
          project goals
        </styles.SmallHeader>
        <styles.Text marginBottom="30px">
          During our initial discovery session, we identified the following
          goals for the website:
        </styles.Text>
        <styles.Text marginBottom="15px">
          • Distinguish between Magnet Forensics’ diverse product offering
        </styles.Text>
        <styles.Text marginBottom="15px">
          • Organize resources in a matter that made it easy to find and use on
          a regular basis
        </styles.Text>
        <styles.Text marginBottom="15px">
          • Help users understand the differences between their previous product
          (Magnet IEF) and their new offerings (Magnet AXIOM and beyond)
        </styles.Text>
        <styles.Text marginBottom="30px">
          • Book demos with sales reps
        </styles.Text>
        <styles.BlackBackgroundImage>
          <img height="271" width="471" src={constants.magnetWhiteboardUrl} />
        </styles.BlackBackgroundImage>
        <styles.Text marginTop="30px">
          And after speaking with our stakeholders, we uncovered the following
          secondary goals that would support the above:
        </styles.Text>
        <styles.Text marginTop="30px">
          • Create different journeys to help users find the product offering
          that suited their needs.
        </styles.Text>
        <styles.Text marginTop="15px" marginBottom="50px">
          • Get the appropriate training to use the tools in their workflow
        </styles.Text>
      </Fragment>
    );
  }

  getContextTable() {
    return (
      <styles.Table marginBottom="50px">
        <styles.Column width="20%">
          <styles.Section>context</styles.Section>
        </styles.Column>
        <styles.Column width="80%">
          <styles.BigText>{contextString}</styles.BigText>
        </styles.Column>
      </styles.Table>
    );
  }

  getContextSection() {
    return (
      <Fragment>
        {this.getContextTable()}
        <styles.SmallHeader marginBottom="15px">problem</styles.SmallHeader>
        <styles.Text marginBottom="30px">{problemString}</styles.Text>
        {/* <styles.ImgWrapper src={constants.magnetHomeUrl} /> */}
        <styles.SmallHeader marginBottom="15px">approach</styles.SmallHeader>
        <styles.Text marginBottom="30px">
          I joined the project as the UX designer, and my involvement spanned
          across the discovery phase.
        </styles.Text>
        <styles.SubHeader marginBottom="10px">research</styles.SubHeader>
        <styles.Text marginBottom="30px">
          My work consisted of conducting stakeholder interviews, recruiting
          users and developing surveys, creating personas.
        </styles.Text>
        <styles.SubHeader marginBottom="10px">synthesis</styles.SubHeader>
        <styles.Text marginBottom="30px">
          Working with the product manager and Magnet Forensic’s marketing team,
          we synthesized the research findings to develop a strategy for the
          website during this phase. We collaborated on mapping out customer
          journeys, building the site’s information architecture, creating
          wireframes and iterated on our work to ensure it aligned with the
          business’ goals.
        </styles.Text>
        <styles.SubHeader marginBottom="10px">testing</styles.SubHeader>
        <styles.Text marginBottom="30px">
          We began testing the wireframes with existing users, and used their
          feedback to iterate on the website’s experience on desktop and mobile
          devices.
        </styles.Text>
        {this.getProjectGoals()}
      </Fragment>
    );
  }

  getCustomerInterviewsSubSection() {
    const items = [
      "•spoke with former forensic examiners from Magnet as well",
      "•conducted small surveys to get an understanding of what type of products were in the market for FE, the type of investigations they worked on, and how open were they to trying out new tools, as well as who were the decision makers in the buying process",
      "•low cash (not decision maker), difficult job. lots of burn out",
      "•was used to using a mix of open source and other tools along with manual processes instead of automation",
      "•expensive product that was supposed to replace others, but difficult to do"
    ];

    return this.getSpacedList("customer interviews", items);
  }

  getResearchSection() {
    return (
      <Fragment>
        <styles.Table marginBottom="50px">
          <styles.Column width="20%">
            <styles.Section>research</styles.Section>
          </styles.Column>
          <styles.Column width="80%">
            <styles.BigText>
              I’ll be the first to admit that I had no idea of what happens
              during an investigation. My goal was to learn everything I
              possibly could in the life of a forensic examiner- the good, the
              bad, and the ugly.
            </styles.BigText>
          </styles.Column>
        </styles.Table>
        <styles.SmallHeader>competitive analysis</styles.SmallHeader>
        <styles.Text marginTop="15px">{competitiveAnalysisString}</styles.Text>
        <styles.BigQuote marginTop="30px" marginBottom="30px">
          “No one tool is perfect, there's always room for improvement which is
          why we utilise several tools for analysis.”
        </styles.BigQuote>
        <styles.SmallHeader marginBottom="15px">challenges</styles.SmallHeader>
        <styles.Text>{challengesString}</styles.Text>
        <styles.SmallHeader marginTop="30px">
          stakeholder interviews
        </styles.SmallHeader>
        <styles.Text marginTop="15px">
          Interviewed with multiple of the VPs and Directors of different
          departments including the CEO and the Founder/CTO to understand their
          pain points with the existing site
        </styles.Text>
        <styles.BlackBackgroundImage marginTop="30px" marginBottom="30px">
          <img src={constants.magnetStakeholderUrl} height="350" width="700" />
        </styles.BlackBackgroundImage>
        {this.getCustomerInterviewsSubSection()}
        <styles.BlackBackgroundImage marginTop="30px">
          <img src={constants.magnetCustomerUrl} height="350" width="700" />
        </styles.BlackBackgroundImage>
      </Fragment>
    );
  }

  getContent() {
    return (
      <styles.Content>
        <styles.CenteredTable marginBottom="30px">
          <ArrowlessIcon />
          <styles.BoldText marginLeft="12px">
            <Link to="/">back to all projects</Link>
          </styles.BoldText>
        </styles.CenteredTable>
        <img src={constants.magnetHeroUrl} />
        {this.getContextSection()}
        {this.getResearchSection()}
      </styles.Content>
    );
  }

  getOldContent() {
    return (
      <Fragment>
        <styles.Text>• advocated for a strong discovery phase</styles.Text>
        {this.getContributionsList()}
        <styles.Table>
          <styles.Column width="20%">
            <styles.Section>research</styles.Section>
          </styles.Column>
          <styles.Column width="80%">Lorem ipsum</styles.Column>
        </styles.Table>
        {this.getCompetitiveAnalysisList()}
        {this.getChallenges()}
        <div>
          {this.getStakeholderInterviews()}
          <styles.ImgWrapper src={constants.magnetStakeholderUrl} />
        </div>
        <div>
          {this.getCustomerInterviews()}
          <styles.ImgWrapper src={constants.magnetCustomerUrl} />
        </div>
        <styles.Table>
          <styles.Column width="20%">
            <styles.Section>define</styles.Section>
          </styles.Column>
          <styles.Column width="80%">Lorem ipsum</styles.Column>
        </styles.Table>
        {this.getPersonasList()}
        {this.getPersonasChallengesList()}
        <styles.Table>
          <styles.Column width="20%">
            <styles.Section>ideate</styles.Section>
          </styles.Column>
          <styles.Column width="80%">Lorem ipsum</styles.Column>
        </styles.Table>
        <styles.Table>
          <styles.Column width="20%">
            <styles.Section>retro</styles.Section>
          </styles.Column>
          <styles.Column width="80%">
            <styles.Text>
              internal retro - first big discovery project, was tough client
              retro
            </styles.Text>
          </styles.Column>
        </styles.Table>
      </Fragment>
    );
  }

  render() {
    return (
      <styles.Container>
        {this.getSidebar()}
        {this.getContent()}
      </styles.Container>
    );
  }
}

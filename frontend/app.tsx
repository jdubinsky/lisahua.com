import { h, render, Fragment } from "preact";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import isMobile from "./is-mobile";

import CanvassAICaseStudyPage from "./pages/CanvassAICaseStudy";
import EsightCaseStudy from "./pages/EsightCaseStudy";
import HomepageV2 from "./pages/HomepageV2";
import MagnetCaseStudyPage from "./pages/MagentCaseStudyPage";
import OnCallCaseStudy from "./pages/OnCallCaseStudy";
import GoBackHeader from "./components/GoBackHeader";

import GlobalFonts from "./globalStyles";

function getMobileHeader() {
  if (isMobile()) {
    return <GoBackHeader />;
  }

  return <Fragment />;
}

function getApp() {
  return (
    <Fragment>
      <GlobalFonts />
      <Router>
        {getMobileHeader()}
        <Switch>
          <Route path="/magnet" component={MagnetCaseStudyPage} />
          <Route path="/canvass" component={CanvassAICaseStudyPage} />
          <Route path="/oncall" component={OnCallCaseStudy} />
          <Route path="/esight" component={EsightCaseStudy} />
          <Route exact path="/" component={HomepageV2} />
          <Route path="/404">
            <div />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
}

let appEl = document.getElementById("app");
if (!appEl) {
  appEl = document.createElement("app");
}

render(getApp(), appEl);

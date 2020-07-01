import { h, render, Fragment } from "preact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import isMobile from "./is-mobile";

import Container from "./pages/Homepage/Container";
import CanvassAICaseStudyPage from "./pages/CanvassAICaseStudy";
import EsightCaseStudy from "./pages/EsightCaseStudy";
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
          <Route path="/magnet">
            <MagnetCaseStudyPage />
          </Route>
          <Route path="/canvass">
            <CanvassAICaseStudyPage />
          </Route>
          <Route path="/oncall">
            <OnCallCaseStudy />
          </Route>
          <Route path="/esight">
            <EsightCaseStudy />
          </Route>
          <Route path="">
            <Container />
          </Route>
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

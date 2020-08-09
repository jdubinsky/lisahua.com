import { h, render, Fragment } from "preact";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import CanvassAICaseStudyPage from "./pages/CanvassAICaseStudy";
import EsightCaseStudy from "./pages/EsightCaseStudy";
import HomepageV2 from "./pages/HomepageV2";
import MagnetCaseStudyPage from "./pages/MagentCaseStudyPage";
import NotFound from "./pages/NotFound";
import OnCallCaseStudy from "./pages/OnCallCaseStudy";
import PasswordProtectedPage from "./components/PasswordProtectedPage";
import SyrupCaseStudy from "./pages/SyrupCaseStudy";

import GlobalFonts from "./globalStyles";

function getApp() {
  return (
    <Fragment>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/magnet" component={MagnetCaseStudyPage} />
          <Route path="/canvass" component={CanvassAICaseStudyPage} />
          <Route path="/oncall" component={OnCallCaseStudy} />
          <Route path="/esight" component={EsightCaseStudy} />
          <Route path="/syrup">
            <PasswordProtectedPage path="syrup">
              <SyrupCaseStudy />
            </PasswordProtectedPage>
          </Route>
          <Route exact path="/" component={HomepageV2} />
          <Route path="/404" component={NotFound} />
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

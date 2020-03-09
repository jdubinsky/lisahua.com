import { h, render, Fragment } from "preact";
import {
BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Container from "./Container";
import MagnetCaseStudyPage from "./caseStudies/MagentCaseStudyPage";

import GlobalFonts from "./globalStyles";

function getApp() {
    return (
        <Fragment>
            <GlobalFonts />
            <Router>
                <Switch>
                    <Route path="/magnet">
                        <MagnetCaseStudyPage />
                    </Route>
                    <Route path="">
                        <Container />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

let appEl = document.getElementById("app");
if (!appEl) {
    appEl = document.createElement("app");
}

render(getApp(), appEl);

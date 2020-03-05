import "core-js";
import "regenerator-runtime/runtime";

import { h, render } from "preact";

import Container from "./Container";

import GlobalFonts from "./globalStyles";

let appEl = document.getElementById("app");
if (!appEl) {
    appEl = document.createElement("app");
}

render(
    (
        <Container>
            <GlobalFonts />
        </Container>
    ),
    appEl
);

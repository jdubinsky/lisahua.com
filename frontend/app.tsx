import { h, render } from "preact";

import Container from "./Container";

import GlobalFonts from "./globalStyles";

let appEl = document.getElementById("app");
console.log(appEl)
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

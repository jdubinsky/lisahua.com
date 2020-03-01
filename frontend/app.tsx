import { h, render } from "preact";

import Container from "./Container";

let appEl = document.getElementById("app");
console.log(appEl)
if (!appEl) {
    appEl = document.createElement("app");
}

render(
    <Container />,
    appEl
);

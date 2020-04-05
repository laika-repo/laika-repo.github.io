import { r as registerInstance, h } from './core-0a59c081.js';

const DevStatusbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ul", null, h("li", { class: "screen--small" }, "small screen"), h("li", { class: "screen--medium" }, "medium screen"), h("li", { class: "screen--large" }, "large screen"), h("li", { class: "screen--x-large" }, "x-large screen")));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: block;\n  padding: 2px;\n  background: #f5f5f5;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  display: inline;\n  padding: 2px 4px;\n  background: red;\n  color: white;\n  font-size: 10px;\n  font-family: monospace;\n}\n\n.screen--small {\n  background-color: green;\n}\n\@media (min-width: 375px) {\n  .screen--small {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 375px) {\n  .screen--medium {\n    background-color: green;\n  }\n}\n\@media (min-width: 768px) {\n  .screen--medium {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 768px) {\n  .screen--large {\n    background-color: green;\n  }\n}\n\@media (min-width: 1024px) {\n  .screen--large {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 1024px) {\n  .screen--x-large {\n    background-color: green;\n  }\n}"; }
};

export { DevStatusbar as umc_dev_statusbar };

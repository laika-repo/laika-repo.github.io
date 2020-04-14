import { r as registerInstance, h } from './core-029ba0c7.js';

const DevStatusbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ul", null, h("li", { class: "screen--small" }, "Mobile and up"), h("li", { class: "screen--medium" }, "Tablet portrait and up"), h("li", { class: "screen--large" }, "Tablet landscape and up"), h("li", { class: "screen--x-large" }, "Desktop and up")));
    }
    static get style() { return ":host {\n  display: block;\n  padding: 2px;\n  background: #f5f5f5;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  display: inline;\n  padding: 2px 4px;\n  background: red;\n  color: white;\n  font-size: 10px;\n  font-family: monospace;\n  margin-right: 4px;\n}\n\n.screen--small {\n  background-color: green;\n}\n\@media (min-width: 768px) {\n  .screen--small {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 768px) {\n  .screen--medium {\n    background-color: green;\n  }\n}\n\@media (min-width: 1024px) {\n  .screen--medium {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 1024px) {\n  .screen--large {\n    background-color: green;\n  }\n}\n\@media (min-width: 1440px) {\n  .screen--large {\n    background-color: red;\n  }\n}\n\n\@media (min-width: 1440px) {\n  .screen--x-large {\n    background-color: green;\n  }\n}"; }
};

export { DevStatusbar as umc_dev_statusbar };

import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: block;\n  width: 375px;\n  margin: 0 auto;\n}\n\@media (min-width: 768px) {\n  :host {\n    width: 656px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 912px;\n  }\n}"; }
};

export { Header as umc_header };

import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const Section = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: pink;\n  display: block;\n  --background-color--default: $white;\n  background-color: var(--background-color, var(--background-color--default));\n  width: 100%;\n}"; }
};

export { Section as umc_section };

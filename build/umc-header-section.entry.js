import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const HeaderSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: "left" }), h("slot", { name: "middle" }), h("slot", { name: "right" })));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  background-color: #fff;\n  --padding-vertical--default: 24px;\n  --padding-horizontal--default: 24px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  border-bottom: 1px solid var(--border-color, var(--border-color--default));\n}"; }
};

export { HeaderSection as umc_header_section };

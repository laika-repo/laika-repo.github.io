import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const HeaderBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("h2", null, h("slot", { name: 'title' }))));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: block;\n}"; }
};

export { HeaderBlock as umc_header_block };

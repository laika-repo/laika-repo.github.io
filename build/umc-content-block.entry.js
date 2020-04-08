import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const ContentBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: 1.125rem;\n  margin: 0;\n  line-height: 1.75rem;\n  color: #131516;\n  width: 549px;\n}\n\@media (min-width: 768px) {\n  :host {\n    margin: 0;\n    margin-right: 56px;\n  }\n}"; }
};

export { ContentBlock as umc_content_block };

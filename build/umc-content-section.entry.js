import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const ContentSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'main' }), h("slot", { name: 'sidebar' })));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  --margin-bottom--default: 56px;\n  margin-top: 56px;\n  margin-bottom: var(--margin-bottom, var(--margin-bottom--default));\n}"; }
};

export { ContentSection as umc_content_section };

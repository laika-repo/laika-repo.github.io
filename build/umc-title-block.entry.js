import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const TitleBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, this.title));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 3rem;\n  margin: 0;\n  line-height: 3.5rem;\n  color: #131516;\n}"; }
};

export { TitleBlock as umc_title_block };

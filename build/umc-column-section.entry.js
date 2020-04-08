import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const ColumnSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0 auto;\n  --background-color--default: $white;\n  --padding-vertical--default: 20px;\n  --padding-horizontal--default: 0px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  background-color: var(--background-color, var(--background-color--default));\n  border-bottom: 1px solid var(--border-color, var(--border-color--default));\n}\n\@media (min-width: 768px) {\n  :host {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n}\n\@media (min-width: 768px) {\n  :host {\n    width: 656px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 912px;\n  }\n}"; }
};

export { ColumnSection as umc_column_section };

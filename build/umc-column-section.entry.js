import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const ColumnSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: '1' }), h("slot", { name: '2' }), h("slot", { name: '3' })));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  --background-color--default: $white;\n  --padding-vertical--default: 20px;\n  --padding-horizontal--default: 0px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  background-color: var(--background-color, var(--background-color--default));\n  border-bottom: 1px solid var(--border-color, var(--border-color--default));\n}\n\@media (min-width: 768px) {\n  :host {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n}"; }
};

export { ColumnSection as umc_column_section };

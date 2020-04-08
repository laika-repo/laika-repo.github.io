import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const Sidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'content' })));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 307px;\n  --background-color--default: #f0f5f5;\n  --padding-vertical--default: 24px;\n  --padding-horizontal--default: 24px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  background-color: var(--background-color, var(--background-color--default));\n}"; }
};

export { Sidebar as umc_sidebar };

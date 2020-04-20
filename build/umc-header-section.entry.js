import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const HeaderSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: "left" }), h("slot", { name: "middle" }), h("slot", { name: "right" })));
    }
    static get style() { return ":host {\n  background-color: #fff;\n  --padding-vertical--default: 24px;\n  --padding-horizontal--default: 24px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  border-bottom: 1px solid var(--border-color, var(--border-color--default));\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 327px;\n}\n\@media (min-width: 375px) {\n  :host {\n    width: 100%;\n  }\n}\n\@media (min-width: 768px) {\n  :host {\n    -ms-flex-direction: row;\n    flex-direction: row;\n    width: 656px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 912px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host {\n    width: 1328px;\n  }\n}\n\n:host(.justify-columns) {\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}"; }
};

export { HeaderSection as umc_header_section };

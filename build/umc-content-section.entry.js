import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ContentSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'main' }), h("slot", { name: 'sidebar' })));
    }
    static get style() { return ":host {\n  --margin-bottom--default: 56px;\n  --margin-bottom--default: 56px;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 327px;\n}\n\@media (min-width: 375px) {\n  :host {\n    width: 100%;\n  }\n}\n\@media (min-width: 768px) {\n  :host {\n    -ms-flex-direction: row;\n    flex-direction: row;\n    width: 656px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 912px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host {\n    width: 1328px;\n  }\n}"; }
};

export { ContentSection as umc_content_section };

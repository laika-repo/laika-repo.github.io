import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const ContentSidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { ContentSidebar as umc_content_sidebar };

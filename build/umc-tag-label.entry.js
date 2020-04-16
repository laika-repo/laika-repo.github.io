import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Tag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ""; }
};

export { Tag as umc_tag_label };

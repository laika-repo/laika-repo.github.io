import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ListHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "umc-list-header {\n  display: block;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 1.375rem;\n  line-height: 3.5rem;\n}"; }
};

export { ListHeader as umc_list_header };

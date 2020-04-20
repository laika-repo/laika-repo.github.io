import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  --text-color--default: $black;\n  --text-size--default: 14px;\n  --margin-bottom--default: 0;\n  margin-bottom: var(--margin-bottom, var(--margin-bottom--default));\n}\n:host h3 {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1.5rem;\n  color: #131516;\n}"; }
};

export { List as umc_list };

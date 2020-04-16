import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Tag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, this.label));
    }
    static get style() { return ":host {\n  display: inline-block;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  margin: 0 4px;\n  border: 1px dotted green;\n  padding: 2px 4px;\n  border-radius: 2px;\n  background-color: #e6ffe6;\n  color: green;\n}"; }
};

export { Tag as umc_tag };

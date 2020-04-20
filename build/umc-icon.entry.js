import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "umc-icon {\n  display: inline;\n}\numc-icon svg {\n  width: 18px;\n  height: 18px;\n}\n\numc-icon.diapositive svg {\n  fill: white;\n}"; }
};

export { Icon as umc_icon };

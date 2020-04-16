import { r as registerInstance, h } from './core-029ba0c7.js';

const Section = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
    static get style() { return ":host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: pink;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  --background-color--default: $white;\n  background-color: var(--background-color, var(--background-color--default));\n  width: 100%;\n}"; }
};

export { Section as umc_section };

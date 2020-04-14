import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n  width: 375px;\n  margin: 0 auto;\n}\n\@media (min-width: 768px) {\n  :host {\n    width: 656px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 912px;\n  }\n}"; }
};

export { Header as umc_header };

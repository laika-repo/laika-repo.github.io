import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Logo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.src = "logo-aumc.svg";
    }
    render() {
        return (h(Host, null, h("img", { src: this.src })));
    }
    static get style() { return ":host {\n  display: block;\n}\n\nimg {\n  width: 200px;\n}\n\@media (min-width: 768px) {\n  img {\n    width: 260px;\n  }\n}"; }
};

export { Logo as umc_logo };

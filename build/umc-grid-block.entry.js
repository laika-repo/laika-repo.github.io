import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const GridBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("h4", null, h("slot", { name: "1" }))));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { GridBlock as umc_grid_block };

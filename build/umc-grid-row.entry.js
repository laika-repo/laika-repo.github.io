import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const GridRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { GridRow as umc_grid_row };

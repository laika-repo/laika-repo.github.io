import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const TitleBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, this.title));
    }
    static get style() { return ":host {\n  font-weight: 500;\n  font-size: 3rem;\n  margin: 0;\n  line-height: 3.5rem;\n  color: #131516;\n}"; }
};

export { TitleBlock as umc_title_block };

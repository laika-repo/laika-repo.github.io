import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const TitleBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'regular';
    }
    render() {
        return (h(Host, { class: this.size }, this.title));
    }
    static get style() { return ":host {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: 3rem;\n  margin: 0;\n  line-height: 3.5rem;\n  color: #131516;\n}\n\n:host(.large) {\n  font-size: 3rem;\n}\n\n:host(.regular) {\n  font-size: 2rem;\n}"; }
};

export { TitleBlock as umc_title_block };

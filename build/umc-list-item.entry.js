import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'icon-before' }), this.label, h("slot", { name: 'icon-after' })));
    }
    static get style() { return ":host {\n  display: list-item;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: var(--text-size, var(--text-size--default));\n  color: var(--text-color, var(--text-color--default));\n  line-height: 1.5rem;\n}"; }
};

export { ListItem as umc_list_item };

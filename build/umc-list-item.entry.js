import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'icon-before' }), this.href
            ? h("a", { href: this.href }, this.label)
            : this.label, h("slot", { name: 'icon-after' })));
    }
    static get style() { return ":host {\n  display: list-item;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: var(--text-size, var(--text-size--default));\n  color: var(--text-color, var(--text-color--default));\n  line-height: 1.5rem;\n}\n:host a {\n  color: var(--text-color, var(--text-color--default));\n  text-decoration: none;\n}\n:host a:hover {\n  text-decoration: underline;\n}\n\n:host(.align--horizontal) {\n  display: inline;\n}"; }
};

export { ListItem as umc_list_item };

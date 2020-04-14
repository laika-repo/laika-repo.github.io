import { r as registerInstance, h, H as Host, c as getElement } from './core-029ba0c7.js';

const LinkList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.items = [];
    }
    componentWillLoad() {
        this.items = Array.from(this.el.querySelectorAll('umc-link-list-item'));
        if (this.items.length == 0) {
            throw new Error('[umc-tabs] must have at least one tab');
        }
    }
    render() {
        return (h(Host, null, this.title ? h("h3", null, this.title) : '', h("ul", { class: this.orientation }, this.items.map((item) => {
            return h("li", { class: item.active ? 'active ' : '' }, h("slot", { name: 'icon' }), " ", item.label, " ");
        }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  --text-color--default: $black;\n  --text-size--default: 14px;\n  --margin-bottom--default: 24px;\n  margin-bottom: var(--margin-bottom, var(--margin-bottom--default));\n  display: block;\n}\n:host h3 {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1.5rem;\n  color: #131516;\n}\n:host ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\@media (min-width: 768px) {\n  :host .horizontal li {\n    display: inline;\n  }\n}\n:host .always-horizontal li {\n  display: inline;\n}\n:host li {\n  margin-right: 24px;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: var(--text-size, var(--text-size--default));\n  color: var(--text-color, var(--text-color--default));\n  line-height: 1.5rem;\n}\n:host li.active {\n  font-weight: 500;\n}\n:host .icon {\n  fill: white;\n}"; }
};

export { LinkList as umc_link_list };

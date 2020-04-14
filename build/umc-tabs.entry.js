import { r as registerInstance, h, H as Host, c as getElement } from './core-029ba0c7.js';

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabs = [];
    }
    componentWillLoad() {
        this.tabs = Array.from(this.el.querySelectorAll('umc-tab'));
        if (this.tabs.length == 0) {
            throw new Error('[umc-tabs] must have at least one tab');
        }
    }
    render() {
        return (h(Host, null, h("ul", null, this.tabs.map((tab) => {
            return h("li", { class: tab.active ? 'active ' : '' }, tab.label);
        }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}\n:host ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n:host li {\n  display: inline;\n  margin-right: 24px;\n  font-weight: 300;\n  font-size: 0.875rem;\n  color: #005261;\n}"; }
};

export { Tabs as umc_tabs };

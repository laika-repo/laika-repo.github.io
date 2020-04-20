import { r as registerInstance, h } from './core-029ba0c7.js';

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "umc-list-item {\n  display: list-item;\n  list-style-type: none;\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: var(--text-size, var(--text-size--default));\n  color: var(--text-color, var(--text-color--default));\n  line-height: 1.5rem;\n}\numc-list-item a {\n  color: var(--text-color, var(--text-color--default));\n  text-decoration: none;\n}\numc-list-item a:hover {\n  text-decoration: underline;\n}\n\n\@media (min-width: 768px) {\n  .umc-list_horizontal umc-list-item,\n.umc-list_horizontal--always umc-list-item {\n    display: inline;\n    margin-right: 24px;\n  }\n}\n\n.umc-list_horizontal umc-list-item:last-child,\n.umc-list_horizontal--always umc-list-item:last-child {\n  margin-right: 0;\n}\n\n.font-style--big umc-list-item {\n  font-size: 1.375rem;\n  line-height: 3.5rem;\n  font-weight: 500;\n  border-bottom: 1px solid #00778a;\n}\n.font-style--big umc-list-item:last-child {\n  border-bottom-width: 0;\n}\n\n.font-style--regular umc-list-item {\n  font-size: 1.125rem;\n  line-height: 2.5rem;\n}"; }
};

export { ListItem as umc_list_item };

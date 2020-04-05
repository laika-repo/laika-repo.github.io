import { r as registerInstance, h } from './core-0a59c081.js';

const MenuToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = "Required prop 'title' missing";
        this.icon = "icon-hamburger.svg";
        this.reverse = false;
    }
    render() {
        return (h("h3", { class: this.reverse ? 'icon--before ' : '' }, h("span", { class: "label" }, this.label), h("img", { class: 'icon', slot: "2", src: this.icon })));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: inline-block;\n}\n\nh3 {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 1.25rem;\n  color: #00778a;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n}\n\n.icon--before {\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.label {\n  display: none;\n}\n\@media (min-width: 768px) {\n  .label {\n    display: inline;\n  }\n}\n\n.icon {\n  height: 24px;\n}\n\n.icon--before .icon {\n  margin-left: 0;\n}"; }
};

export { MenuToggle as umc_menu_toggle };

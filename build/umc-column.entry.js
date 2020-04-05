import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const Column = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colspan = '1';
        this.alignment = 'left';
    }
    render() {
        return (h(Host, { class: 'align--' + this.alignment }, h("slot", { name: 'content' })));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  display: inline-block;\n  width: column-width(3, 56px);\n  margin-bottom: 24px;\n}\n\@media (min-width: 768px) {\n  :host {\n    margin: 0;\n    margin-right: 56px;\n  }\n}\n\n:host(:last-child) {\n  margin: 0;\n}\n\n:host(.align--center) {\n  text-align: center;\n  -ms-flex-positive: 3;\n  flex-grow: 3;\n}"; }
};

export { Column as umc_column };

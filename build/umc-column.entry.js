import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const Column = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colspan = '1';
        this.alignment = 'left';
    }
    render() {
        return (h(Host, { class: 'align--' + this.alignment }, h("slot", null)));
    }
    static get style() { return "\@font-face {\n  font-family: \"Museo Sans Rounded\";\n  src: url(\"assets/museosansrounded-300.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback;\n}\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 65px;\n  margin-bottom: 24px;\n}\n\@media (min-width: 768px) {\n  :host {\n    margin: 0;\n    margin-right: 56px;\n  }\n}\n\n:host(.cols--3) {\n  width: 307px;\n}\n\n:host(.cols--2) {\n  width: 186px;\n}\n\n:host(.cols--4) {\n  width: 428px;\n}\n\n:host(.cols--5) {\n  width: 549px;\n}\n\n:host(.cols--8) {\n  width: 912px;\n}\n\n:host(.gutterless) {\n  margin-right: 0;\n}\n\n:host(:last-child) {\n  margin: 0;\n}\n\n:host(.align--center) {\n  text-align: center;\n}"; }
};

export { Column as umc_column };

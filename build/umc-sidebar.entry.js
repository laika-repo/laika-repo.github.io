import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const Sidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", { name: 'content' })));
    }
    static get style() { return ":host {\n  --background-color--default: #f0f5f5;\n  --padding-vertical--default: 24px;\n  --padding-horizontal--default: 24px;\n  --border-color--default: transparent;\n  padding: var(--padding-vertical, var(--padding-vertical--default)) var(--padding-horizontal, var(--padding-horizontal--default));\n  background-color: var(--background-color, var(--background-color--default));\n  color: red;\n}\n\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n}\n\@media (min-width: 768px) {\n  :host {\n    width: 33px;\n    margin-right: 56px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 65px;\n    margin-right: 56px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host {\n    width: 59px;\n    margin-right: 56px;\n  }\n}\n\n:host(:last-child) {\n  margin-right: 0;\n}\n\n\@media (min-width: 375px) {\n  :host(.empty) {\n    visibility: hidden;\n  }\n}\n\n:host(.width--full) {\n  width: 100%;\n}\n\n\@media (min-width: 768px) {\n  :host(.width--small) {\n    width: 122px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--small) {\n    width: 186px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--small) {\n    width: 289px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--medium) {\n    width: 211px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--medium) {\n    width: 307px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--medium) {\n    width: 404px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--large) {\n    width: 300px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--large) {\n    width: 428px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--large) {\n    width: 519px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--x-large) {\n    width: 300px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--x-large) {\n    width: 428px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--x-large) {\n    width: 634px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--xx-large) {\n    width: 389px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--xx-large) {\n    width: 519px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--xx-large) {\n    width: 749px;\n  }\n}\n\n\@media (min-width: 1440px) {\n  :host(.width--xxx-large) {\n    width: 864px;\n  }\n}\n\n:host(.gutterless) {\n  margin-right: 0;\n}\n\n:host(.align--center) {\n  text-align: center;\n}"; }
};

export { Sidebar as umc_sidebar };

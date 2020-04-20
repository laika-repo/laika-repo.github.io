import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ContentBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 300;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n:host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n}\n\@media (min-width: 768px) {\n  :host {\n    width: 33px;\n    margin-right: 56px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host {\n    width: 65px;\n    margin-right: 56px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host {\n    width: 59px;\n    margin-right: 56px;\n  }\n}\n\n:host(.direction--horizontal) {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n:host(:last-child) {\n  margin-right: 0;\n}\n\n\@media (min-width: 375px) {\n  :host(.empty) {\n    visibility: hidden;\n  }\n}\n\n:host(.width--full) {\n  width: 100%;\n}\n\n\@media (min-width: 768px) {\n  :host(.width--small) {\n    width: 122px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--small) {\n    width: 186px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--small) {\n    width: 289px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--medium) {\n    width: 211px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--medium) {\n    width: 307px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--medium) {\n    width: 404px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--large) {\n    width: 300px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--large) {\n    width: 428px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--large) {\n    width: 519px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--x-large) {\n    width: 300px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--x-large) {\n    width: 428px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--x-large) {\n    width: 634px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--xx-large) {\n    width: 389px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--xx-large) {\n    width: 519px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--xx-large) {\n    width: 749px;\n  }\n}\n\n\@media (min-width: 768px) {\n  :host(.width--xxx-large) {\n    width: 478px;\n  }\n}\n\@media (min-width: 1024px) {\n  :host(.width--xxx-large) {\n    width: 634px;\n  }\n}\n\@media (min-width: 1440px) {\n  :host(.width--xxx-large) {\n    width: 864px;\n  }\n}\n\n:host(.gutterless) {\n  margin-right: 0;\n}\n\n:host(.align--center) {\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n:host(.align--right) {\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}"; }
};

export { ContentBlock as umc_content_block };

import { r as registerInstance, d as createEvent, h, H as Host } from './core-029ba0c7.js';

const Section = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = false;
        this.onToggle = createEvent(this, "onToggle", 7);
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (h(Host, { class: this.toggle ? 'open' : 'closed' }, h("slot", null)));
    }
    static get style() { return "umc-section {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  --background-color--default: white;\n  background-color: var(--background-color, var(--background-color--default));\n  width: 100%;\n}\n\numc-section.content-section {\n  margin-top: 56px;\n}\n\n.closed umc-section {\n  display: none;\n  overflow: hidden;\n}"; }
};

export { Section as umc_section };

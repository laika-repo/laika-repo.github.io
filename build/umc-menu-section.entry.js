import { r as registerInstance, d as createEvent, h, H as Host } from './core-029ba0c7.js';

const MenuSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = true;
        this.onToggle = createEvent(this, "onToggle", 7);
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (h(Host, { class: this.toggle ? 'open' : 'closed' }, h("slot", { name: 'navigation' }), h("slot", { name: 'menu' })));
    }
    static get style() { return "umc-menu-section {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background-color: white;\n  width: 100%;\n}\n\numc-menu-section.umc-section--sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}"; }
};

export { MenuSection as umc_menu_section };

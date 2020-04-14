import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const ColorSwatch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "Required prop 'name' missing";
    }
    render() {
        return (h(Host, { class: 'swatch' + ' ' + this.name }));
    }
    static get style() { return ":host {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 0.5rem;\n  vertical-align: middle;\n}\n\n:host(.azure-blue) {\n  background-color: #009cb4;\n}\n\n:host(.grenadier-orange) {\n  background-color: #d14200;\n}\n\n:host(.cypres-blue) {\n  background-color: #003741;\n}\n\n:host(.stone-blue) {\n  background-color: #005261;\n}\n\n:host(.blue-lagoon) {\n  background-color: #00778a;\n}\n\n:host(.botticelli-gray) {\n  background-color: #ced9e5;\n}"; }
};

export { ColorSwatch as umc_color_swatch };

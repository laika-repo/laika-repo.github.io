import { r as registerInstance, d as createEvent, h, H as Host } from './core-029ba0c7.js';

const StyleSection = class {
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
        return (h(Host, { class: this.toggle ? 'open' : 'closed' }, h("div", { class: 'section-header', onClick: () => this.toggleComponent() }, this.title ? h("h3", null, this.title, " ", h("span", { class: 'arrow closed' }, "\u25C2"), " ", h("span", { class: 'arrow open' }, "\u25BE")) : ''), h("div", { class: 'section-content' }, h("slot", null))));
    }
    static get style() { return ":host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: pink;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  --background-color--default: $white;\n  background-color: var(--background-color, var(--background-color--default));\n  width: 100%;\n  margin-bottom: 12px;\n}\n:host .section-header {\n  width: 100%;\n  padding: 4px 0;\n  text-align: center;\n  background-color: #fafafa;\n  border-top: 1px dotted gray;\n  border-bottom: 1px dotted gray;\n}\n:host .section-header {\n  background-color: #fafafa;\n}\n:host .section-header:hover {\n  cursor: pointer;\n}\n:host h3 {\n  font-family: \"Museo Sans Rounded\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  margin: 0;\n  color: #666;\n}\n:host h3 .arrow {\n  font-size: 14px;\n}\n\n:host(.closed) .section-content {\n  height: 0;\n  overflow: hidden;\n}\n\n:host(.closed) .arrow.closed {\n  display: inline;\n}\n:host(.closed) .arrow.open {\n  display: none;\n}\n\n:host(.open) .arrow.open {\n  display: inline;\n}\n:host(.open) .arrow.closed {\n  display: none;\n}"; }
};
{ /* <button class="accordion"
      style={{
        width: this.width,
        backgroundColor: this.color,
      }}
      onClick={() => this.toggleComponent()}>
      {this.label}
      {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>
      <div class={`content-box ${this.toggle ? 'open' : 'close'}`} */
}

export { StyleSection as umc_style_section };

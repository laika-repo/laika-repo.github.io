import { r as registerInstance, h, H as Host } from './core-0a59c081.js';

const RichTextBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null, "hello?")));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { RichTextBlock as umc_rich_text_block };

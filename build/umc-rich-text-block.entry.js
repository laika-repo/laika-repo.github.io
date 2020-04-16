import { r as registerInstance, h, H as Host } from './core-029ba0c7.js';

const RichTextBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null, "hello?")));
    }
    static get style() { return ":host {\n  font-family: \'Museo Sans Rounded\', sans-serif;\n  font-weight: 300;\n  font-size: rem-calc(18px);\n  line-height: rem-calc(28px);\n}"; }
};

export { RichTextBlock as umc_rich_text_block };

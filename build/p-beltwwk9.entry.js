import{r as t,h as s,H as l,g as e,c as r}from"./p-11061111.js";const c=class{constructor(s){t(this,s),this.colspan="1",this.alignment="left",this.width="single"}render(){return s("div",{class:"width--"+this.width+" align--"+this.alignment},s("slot",null))}static get style(){return":host{--background-color--default:$white;--border-color--default:$white;--text-color--default:$black;background-color:var(--background-color,var(--background-color--default));color:var(--text-color,var(--text-color--default));-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%}\@media (min-width:768px){:host{width:33px;margin-right:56px}}\@media (min-width:1024px){:host{width:65px;margin-right:56px}}\@media (min-width:1440px){:host{width:59px;margin-right:56px}}:host(:last-child){margin-right:0}\@media (min-width:375px){:host(.empty){visibility:hidden}}:host(.width--full){width:100%}\@media (min-width:768px){:host(.width--small){width:122px}}\@media (min-width:1024px){:host(.width--small){width:186px}}\@media (min-width:1440px){:host(.width--small){width:289px}}\@media (min-width:768px){:host(.width--medium){width:211px}}\@media (min-width:1024px){:host(.width--medium){width:307px}}\@media (min-width:1440px){:host(.width--medium){width:404px}}\@media (min-width:768px){:host(.width--large){width:300px}}\@media (min-width:1024px){:host(.width--large){width:428px}}\@media (min-width:1440px){:host(.width--large){width:519px}}\@media (min-width:768px){:host(.width--x-large){width:300px}}\@media (min-width:1024px){:host(.width--x-large){width:428px}}\@media (min-width:1440px){:host(.width--x-large){width:634px}}\@media (min-width:768px){:host(.width--xx-large){width:389px}}\@media (min-width:1024px){:host(.width--xx-large){width:519px}}\@media (min-width:1440px){:host(.width--xx-large){width:749px}}\@media (min-width:768px){:host(.width--xxx-large){width:478px}}\@media (min-width:1024px){:host(.width--xxx-large){width:634px}}\@media (min-width:1440px){:host(.width--xxx-large){width:864px}}:host(.gutterless){margin-right:0}:host(.align--center){text-align:center}"}},i=class{constructor(s){t(this,s)}render(){return s("div",null,s("slot",null))}static get style(){return"div{--background-color--default:$white;--padding-vertical--default:20px;--padding-horizontal--default:0px;--border-color--default:transparent;padding:var(--padding-vertical,var(--padding-vertical--default)) var(--padding-horizontal,var(--padding-horizontal--default));background-color:var(--background-color,var(--background-color--default));border-bottom:1px solid var(--border-color,var(--border-color--default))}:host{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column;width:327px}\@media (min-width:375px){:host{width:100%}}\@media (min-width:768px){:host{-ms-flex-direction:row;flex-direction:row;width:656px}}\@media (min-width:1024px){:host{width:912px}}\@media (min-width:1440px){:host{width:1328px}}"}},n=class{constructor(s){t(this,s),this.orientation="vertical",this.items=[]}componentWillLoad(){if(this.items=Array.from(this.el.querySelectorAll("umc-link-list-item")),0==this.items.length)throw new Error("[umc-tabs] must have at least one tab")}render(){return s(l,null,this.title?s("h3",null,this.title):"",s("ul",{class:this.orientation},this.items.map(t=>s("li",{class:t.active?"active ":""},s("slot",{name:"icon"})," ",t.label," "))))}get el(){return e(this)}static get style(){return":host{--text-color--default:$black;--text-size--default:14px;--margin-bottom--default:24px;margin-bottom:var(--margin-bottom,var(--margin-bottom--default));display:block}:host h3{font-family:Museo Sans Rounded,sans-serif;font-weight:500;font-size:18px;margin:0;line-height:1.5rem;color:#131516}:host ul{list-style-type:none;padding:0;margin:0}\@media (min-width:768px){:host .horizontal li{display:inline}}:host .always-horizontal li{display:inline}:host li{margin-right:24px;font-family:Museo Sans Rounded,sans-serif;font-weight:300;font-size:var(--text-size,var(--text-size--default));color:var(--text-color,var(--text-color--default));line-height:1.5rem}:host li.active{font-weight:500}:host .icon{fill:#fff}"}},u=class{constructor(s){t(this,s),this.active=!1}},o=class{constructor(s){t(this,s),this.orientation="vertical"}render(){return s(l,{class:"align--"+this.orientation},this.title?s("h3",null,this.title):"",s("ul",null,s("slot",null)))}static get style(){return":host{--text-color--default:$black;--text-size--default:14px;--margin-bottom--default:0;margin-bottom:var(--margin-bottom,var(--margin-bottom--default));display:block}:host h3{font-family:Museo Sans Rounded,sans-serif;font-weight:500;font-size:18px;margin:0;line-height:1.5rem;color:#131516}:host ul{list-style-type:none;padding:0;margin:0}"}},a=class{constructor(s){t(this,s)}render(){return s(l,null,s("slot",{name:"icon-before"}),this.href?s("a",{href:this.href},this.label):this.label,s("slot",{name:"icon-after"}))}static get style(){return":host{display:list-item;font-family:Museo Sans Rounded,sans-serif;font-weight:300;font-size:var(--text-size,var(--text-size--default));line-height:1.5rem}:host,:host a{color:var(--text-color,var(--text-color--default))}:host a{text-decoration:none}:host a:hover{text-decoration:underline}:host(.align--horizontal){display:inline}"}},h=class{constructor(s){t(this,s),this.src="logo-aumc.svg"}render(){return s(l,null,s("img",{src:this.src}))}static get style(){return":host{display:block}img{width:200px}\@media (min-width:768px){img{width:260px}}"}},E=class{constructor(s){t(this,s)}render(){return s(l,null,s("slot",null,"hello?"))}static get style(){return":host{font-family:Museo Sans Rounded,sans-serif;font-weight:300;font-size:rem-calc(18px);line-height:rem-calc(28px)}"}},m=class{constructor(s){t(this,s)}render(){return s("div",null,s("slot",null))}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;background:pink;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;--background-color--default:$white;background-color:var(--background-color,var(--background-color--default));width:100%}"}},_=class{constructor(s){t(this,s),this.toggle=!1,this.onToggle=r(this,"onToggle",7)}toggleComponent(){this.toggle=!this.toggle,this.onToggle.emit({visible:this.toggle})}render(){return s(l,{class:this.toggle?"open":"closed"},s("div",{class:"section-header",onClick:()=>this.toggleComponent()},this.title?s("h3",null,this.title," ",s("span",{class:"arrow closed"},"◂")," ",s("span",{class:"arrow open"},"▾")):""),s("div",{class:"section-content"},s("slot",null)))}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;background:pink;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-direction:column;flex-direction:column;--background-color--default:$white;background-color:var(--background-color,var(--background-color--default));width:100%}:host .section-header{width:100%;padding:4px 0;text-align:center;border-top:1px dotted grey;border-bottom:1px dotted grey;background-color:#fafafa}:host .section-header:hover{cursor:pointer}:host h2{font-size:24px}:host h2,:host h3{font-family:Museo Sans Rounded,sans-serif;font-weight:500}:host h3{font-size:16px;margin:0;color:#666}:host h3 .arrow{font-size:14px}:host pre{margin:0}.section-content{padding:8px 0}:host(.closed) .section-content{display:none;overflow:hidden}:host(.closed) .arrow.closed{display:inline}:host(.closed) .arrow.open{display:none}:host(.open) .arrow.open{display:inline}:host(.open) .arrow.closed{display:none}"}},L=class{constructor(s){t(this,s)}render(){return s(l,null,this.label)}static get style(){return":host{display:inline-block;font-family:Museo Sans Rounded,sans-serif;font-weight:300;font-size:14px;margin:0 4px;border:1px dotted green;padding:2px 4px;border-radius:2px;background-color:#e6ffe6;color:green}"}},T=class{constructor(s){t(this,s),this.size="regular"}render(){return s("slot",null)}static get style(){return"h2{font-family:Museo Sans Rounded,sans-serif;font-weight:300;margin:0;line-height:3.5rem;color:#131516}h2,h2.large{font-size:3rem}.regular{font-size:2rem}"}};export{c as umc_column,i as umc_column_section,n as umc_link_list,u as umc_link_list_item,o as umc_list,a as umc_list_item,h as umc_logo,E as umc_rich_text_block,m as umc_section,_ as umc_style_section,L as umc_tag,T as umc_title_block};
import{r as t,h as s,H as i,g as l}from"./p-7fac9afc.js";const r=class{constructor(s){t(this,s),this.orientation="vertical",this.items=[]}componentWillLoad(){if(this.items=Array.from(this.el.querySelectorAll("umc-link-list-item")),0==this.items.length)throw new Error("[umc-tabs] must have at least one tab")}render(){return s(i,null,this.title?s("h3",null,this.title):"",s("ul",{class:this.orientation},this.items.map(t=>s("li",{class:t.active?"active ":""},s("slot",{name:"icon"})," ",t.label," "))))}get el(){return l(this)}static get style(){return":host{--text-color--default:$black;--text-size--default:14px;--margin-bottom--default:24px;margin-bottom:var(--margin-bottom,var(--margin-bottom--default));display:block}:host h3{font-family:Museo Sans Rounded,sans-serif;font-weight:500;font-size:18px;margin:0;line-height:1.5rem;color:#131516}:host ul{list-style-type:none;padding:0;margin:0}\@media (min-width:768px){:host .horizontal li{display:inline}}:host .always-horizontal li{display:inline}:host li{margin-right:24px;font-family:Museo Sans Rounded,sans-serif;font-weight:300;font-size:var(--text-size,var(--text-size--default));color:var(--text-color,var(--text-color--default));line-height:1.5rem}:host li.active{font-weight:500}:host .icon{fill:#fff}"}};export{r as umc_link_list};
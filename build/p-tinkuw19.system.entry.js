System.register(["./p-7a3e14c1.system.js"],(function(e){"use strict";var t,n,o,i;return{setters:[function(e){t=e.r;n=e.c;o=e.h;i=e.H}],execute:function(){var s=e("umc_menu_section",function(){function e(e){t(this,e);this.toggle=true;this.onToggle=n(this,"onToggle",7)}e.prototype.toggleComponent=function(){this.toggle=!this.toggle;this.onToggle.emit({visible:this.toggle})};e.prototype.render=function(){return o(i,{class:this.toggle?"open":"closed"},o("slot",{name:"navigation"}),o("slot",{name:"menu"}))};Object.defineProperty(e,"style",{get:function(){return"umc-menu-section{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;background-color:#fff;width:100%}umc-menu-section.umc-section--sticky{position:-webkit-sticky;position:sticky;top:0}umc-menu-section umc-section.closed{display:none;overflow:hidden}"},enumerable:true,configurable:true});return e}())}}}));
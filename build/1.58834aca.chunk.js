(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(1).createContext)();t.default=a},1829:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10));function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l=function(e){return Object.keys(e).map((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[t],{name:t,index:n})}))};t.default=l},1830:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(1)),l=a(n(2)),i=n(12),u=n(171),d=a(n(94)),c=a(n(1894)),f=a(n(84)),s=a(n(1895)),p=a(n(1831)),m=n(1833),g=a(n(1900));function b(e){var t=e.className,n=e.customRowComponent,a=e.items,l=e.addComponentToDZ,b=e.targetUid,v=e.mainTypeName,y=e.editTarget,h=e.isFromDynamicZone,x=e.isMain,C=e.firstLoopComponentName,w=e.firstLoopComponentUid,E=e.secondLoopComponentName,k=e.secondLoopComponentUid,T=e.isSub,N=(0,i.useGlobalContext)().formatMessage,O=(0,f.default)().isInDevelopmentMode,P=(0,c.default)().openModalAddField,D=function(){var e=v;C&&(e=C),k&&(e=E),P(y,b,e,w?v:null,E?C:null,k?w:null)},L={icon:!T&&r.default.createElement(u.Plus,{fill:"#007eff",width:"11px",height:"11px"}),color:"primary",label:O?N({id:T?"".concat(d.default,".form.button.add.field.to.component"):"".concat(d.default,".form.button.add.field.to.").concat(y)}):null,onClick:D};return b?r.default.createElement(r.default.Fragment,null,r.default.createElement(g.default,{className:t,isFromDynamicZone:h},r.default.createElement("table",null,r.default.createElement("tbody",null,a.map((function(e){var t=e.type,a=n;return r.default.createElement(r.default.Fragment,{key:e.name},r.default.createElement(a,(0,o.default)({},e,{targetUid:b,mainTypeName:v,editTarget:y,firstLoopComponentName:C,firstLoopComponentUid:w,isFromDynamicZone:h,secondLoopComponentName:E,secondLoopComponentUid:k})),"component"===t&&r.default.createElement(p.default,(0,o.default)({},e,{customRowComponent:n,targetUid:b,mainTypeName:v,editTarget:y,firstLoopComponentName:C,firstLoopComponentUid:w})),"dynamiczone"===t&&r.default.createElement(s.default,(0,o.default)({},e,{customRowComponent:n,addComponent:l,targetUid:b,mainTypeName:v})))})))),x&&O&&r.default.createElement(m.ListButton,L),!x&&r.default.createElement(m.ListButton,L)),T&&r.default.createElement("div",{className:"plus-icon",onClick:D},O&&r.default.createElement(u.Plus,{fill:h?"#007EFF":"#b4b6ba"}))):null}b.defaultProps={addField:function(){},addComponentToDZ:function(){},className:null,customRowComponent:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentName:null,secondLoopComponentUid:null,targetUid:null},b.propTypes={addComponentToDZ:l.default.func,className:l.default.string,customRowComponent:l.default.func,editTarget:l.default.string.isRequired,firstLoopComponentName:l.default.string,firstLoopComponentUid:l.default.string,isFromDynamicZone:l.default.bool,isMain:l.default.bool,items:l.default.instanceOf(Array),mainTypeName:l.default.string.isRequired,secondLoopComponentName:l.default.string,secondLoopComponentUid:l.default.string,targetUid:l.default.string,isSub:l.default.bool};var v=b;t.default=v},1831:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1)),r=n(8),l=a(n(2)),i=a(n(1830)),u=a(n(84)),d=a(n(1829)),c=a(n(1832));function f(e){var t=e.customRowComponent,n=e.component,a=e.mainTypeName,l=e.isFromDynamicZone,f=e.firstLoopComponentName,s=e.firstLoopComponentUid,p=(0,u.default)().modifiedData,m=(0,r.get)(p,["components",n],{schema:{attributes:{}}}).schema,g=m.name,b=m.attributes;return o.default.createElement("tr",{className:"component-row"},o.default.createElement(c.default,{colSpan:12,isChildOfDynamicZone:l},o.default.createElement(i.default,{customRowComponent:t,items:(0,d.default)(b),targetUid:n,mainTypeName:a,firstLoopComponentName:f||g,firstLoopComponentUid:s||n,editTarget:"components",isFromDynamicZone:l,isSub:!0,secondLoopComponentName:f?g:null,secondLoopComponentUid:s?n:null})))}f.defaultProps={component:null,customRowComponent:null,isFromDynamicZone:!1},f.propTypes={component:l.default.string,customRowComponent:l.default.func,firstLoopComponentName:l.default.string,firstLoopComponentUid:l.default.string,isFromDynamicZone:l.default.bool,mainTypeName:l.default.string.isRequired,targetUid:l.default.string.isRequired};var s=f;t.default=s},1832:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7));function r(){var e=(0,o.default)(["\n  &::before {\n    content: '&';\n    width: 5px;\n    height: calc(100% - 15px);\n    position: absolute;\n    top: -7px;\n    left: 45px;\n    color: transparent;\n    ","\n\n    border-radius: 3px;\n  }\n"]);return r=function(){return e},e}var l=a(n(4)).default.td(r(),(function(e){var t=e.isFromDynamicZone;return e.isChildOfDynamicZone?"\n          z-index: -1;\n          background-color: transparent !important;\n        ":t?"\n        background-color: #AED4FB !important;\n        ":"\n      background-color: #f3f4f4 !important;\n      "}));t.default=l},1833:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ListHeaderButton=t.ListButton=void 0;var o=a(n(7)),r=a(n(4)),l=n(77);function i(){var e=(0,o.default)(["\n  background-color: #e6f0fb;\n  width: 100%;\n  height: 54px;\n  border-top: 1px solid #aed4fb;\n  color: #007eff;\n  font-weight: 500;\n  border-radius: 0;\n  text-transform: uppercase;\n\n  svg {\n    vertical-align: initial;\n  }\n  &:hover {\n    box-shadow: none;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return i=function(){return e},e}function u(){var e=(0,o.default)(["\n  padding-left: 15px;\n  padding-right: 15px;\n"]);return u=function(){return e},e}var d=(0,r.default)(l.Button)(u());t.ListHeaderButton=d;var c=(0,r.default)(l.Button)(i());t.ListButton=c},1891:function(e,t,n){"use strict";var a=n(0),o=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.ListRow=v,t.default=void 0;var r=o(n(1)),l=a(n(2)),i=n(8),u=n(20),d=n(77),c=n(45),f=a(n(94)),s=a(n(84)),p=a(n(66)),m=a(n(1892)),g=a(n(172)),b=a(n(1893));function v(e){var t=e.configurable,n=e.name,a=e.nature,o=e.onClick,l=e.plugin,v=e.target,y=e.targetUid,h=e.type,x=e.mainTypeName,C=e.editTarget,w=e.firstLoopComponentName,E=e.firstLoopComponentUid,k=e.isFromDynamicZone,T=e.repeatable,N=e.secondLoopComponentName,O=e.secondLoopComponentUid,P=(0,s.default)(),D=P.contentTypes,L=P.isInDevelopmentMode,j=P.removeAttribute,M=["integer","biginteger","float","decimal"].includes(h)?"number":h,_=h;["integer","biginteger","float","decimal"].includes(h)?_="number":["string"].includes(h)&&(_="text");var F,U=(0,i.get)(D,[v,"schema","name"],""),R=v?"relation":M,Z=function(){if(!1!==t){var e=x;w&&(e=w),O&&(e=N),o(C,O||E||y,n,a?"relation":h,e,E?x:null,N?w:null,O?E:null)}};return F=O&&E?2:E?1:0,r.default.createElement(b.default,{onClick:Z,className:[v?"relation-row":"",t?"clickable":""],loopNumber:F},r.default.createElement("td",null,r.default.createElement(d.AttributeIcon,{key:R,type:R}),r.default.createElement(m.default,{fill:k?"#AED4FB":"#f3f4f4"})),r.default.createElement("td",{style:{fontWeight:600}},r.default.createElement("p",null,n)),r.default.createElement("td",null,v?r.default.createElement("div",null,r.default.createElement(u.FormattedMessage,{id:"".concat(f.default,".modelPage.attribute.relationWith")}),"\xa0",r.default.createElement(u.FormattedMessage,{id:"".concat(f.default,".from")},(function(e){return r.default.createElement("span",{style:{fontStyle:"italic"}},r.default.createElement(g.default,{content:U}),"\xa0",l&&"(".concat(e,": ").concat(l,")"))}))):r.default.createElement(r.default.Fragment,null,r.default.createElement(u.FormattedMessage,{id:"".concat(f.default,".attribute.").concat(_)}),"\xa0",T&&r.default.createElement(u.FormattedMessage,{id:(0,p.default)("component.repeatable")}))),r.default.createElement("td",{className:"button-container"},L&&r.default.createElement(r.default.Fragment,null,t?r.default.createElement(r.default.Fragment,null,r.default.createElement("button",{type:"button",onClick:Z},r.default.createElement(c.FontAwesomeIcon,{className:"link-icon",icon:"pencil-alt"})),r.default.createElement("button",{type:"button",onClick:function(e){e.stopPropagation(),j(C,n,O||E||"")}},r.default.createElement(c.FontAwesomeIcon,{className:"link-icon",icon:"trash"}))):r.default.createElement("button",{type:"button"},r.default.createElement(c.FontAwesomeIcon,{icon:"lock"})))))}v.defaultProps={configurable:!0,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:!1,nature:null,onClick:function(){},onClickDelete:function(){},plugin:null,repeatable:!1,secondLoopComponentName:null,secondLoopComponentUid:null,target:null,targetUid:null,type:null},v.propTypes={configurable:l.default.bool,editTarget:l.default.string.isRequired,firstLoopComponentName:l.default.string,firstLoopComponentUid:l.default.string,isFromDynamicZone:l.default.bool,mainTypeName:l.default.string.isRequired,name:l.default.string.isRequired,nature:l.default.string,onClick:l.default.func,plugin:l.default.string,repeatable:l.default.bool,secondLoopComponentName:l.default.string,secondLoopComponentUid:l.default.string,target:l.default.string,targetUid:l.default.string,type:l.default.string};var y=(0,r.memo)(v);t.default=y},1892:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(1)),l=a(n(2)),i=function(e){return r.default.createElement("svg",(0,o.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.08 21"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"M2.58 2.5q-1.2 16 16 16",fill:"none",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"5"})))};i.defaultProps={fill:"#f3f4f4"},i.propTypes={fill:l.default.string};var u=i;t.default=u},1893:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(12);function i(){var e=(0,o.default)(["\n  background-color: transparent;\n  p {\n    margin-bottom: 0;\n  }\n  img {\n    width: 35px;\n  }\n  button {\n    cursor: pointer;\n  }\n  td:first-of-type {\n    padding-left: 3rem;\n    position: relative;\n    img {\n      width: 35px;\n      height: 20px;\n      position: absolute;\n      top: calc(50% - 10px);\n      left: 3rem;\n    }\n    img + p {\n      width: 237px;\n      padding-left: calc(3rem + 35px);\n    }\n  }\n  td:nth-child(2) {\n    ","\n    p {\n      font-weight: 500;\n      text-transform: capitalize;\n    }\n  }\n  td:last-child {\n    text-align: right;\n    &:not(:first-of-type) {\n      font-size: 10px;\n    }\n  }\n  &.relation-row {\n    background: linear-gradient(\n      135deg,\n      rgba(28, 93, 231, 0.05),\n      rgba(239, 243, 253, 0)\n    );\n  }\n  &.clickable {\n    &:hover {\n      cursor: pointer;\n      background-color: ",";\n      & + tr {\n        &::before {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .button-container {\n    svg {\n      color: #333740;\n    }\n  }\n"]);return i=function(){return e},e}var u=r.default.tr(i(),(function(e){var t=e.loopNumber;return"\n        width: calc(25rem - ".concat(5*t,"rem);\n      ")}),l.colors.grey);t.default=u},1894:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),r=a(n(1828)),l=function(){return(0,o.useContext)(r.default)};t.default=l},1895:function(e,t,n){"use strict";var a=n(9),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(19)),l=o(n(43)),i=a(n(1)),u=o(n(2)),d=n(20),c=n(113),f=n(171),s=o(n(84)),p=o(n(66)),m=o(n(1831)),g=o(n(1896)),b=o(n(1897)),v=o(n(1832));function y(e){var t=e.customRowComponent,n=e.components,a=e.addComponent,o=e.mainTypeName,u=e.name,y=e.targetUid,h=(0,s.default)().isInDevelopmentMode,x=(0,i.useState)("0"),C=(0,l.default)(x,2),w=C[0],E=C[1];return i.default.createElement("tr",{className:"dynamiczone-row"},i.default.createElement(v.default,{colSpan:12,isFromDynamicZone:!0},i.default.createElement("div",null,i.default.createElement("div",{className:"tabs-wrapper"},i.default.createElement(c.Nav,{tabs:!0},h&&i.default.createElement("li",null,i.default.createElement(g.default,{onClick:function(){a(u)}},i.default.createElement("div",null,i.default.createElement(f.Plus,{style:{height:15,width:15}})),i.default.createElement("p",null,i.default.createElement(d.FormattedMessage,{id:(0,p.default)("button.component.add")})))),n.map((function(e,t){return i.default.createElement("li",{key:e},i.default.createElement(b.default,{dzName:u,index:t,component:e,isActive:w==="".concat(t),isInDevelopmentMode:h,onClick:function(){var e;e="".concat(t),w!==e&&E(e)}}))})))),i.default.createElement(c.TabContent,{activeTab:w},n.map((function(e,n){var a={customRowComponent:t,component:e};return i.default.createElement(c.TabPane,{tabId:"".concat(n),key:e},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement(m.default,(0,r.default)({},a,{isFromDynamicZone:!0,mainTypeName:o,targetUid:y,key:e})))))}))))))}y.defaultProps={addComponent:function(){},components:[],customRowComponent:null,name:null},y.propTypes={addComponent:u.default.func,components:u.default.instanceOf(Array),customRowComponent:u.default.func,mainTypeName:u.default.string.isRequired,name:u.default.string,targetUid:u.default.string.isRequired};var h=y;t.default=h},1896:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7));function r(){var e=(0,o.default)(["\n  width: 139px;\n  height: 90px;\n  padding-top: 7px;\n  &:focus {\n    outline: 0;\n  }\n\n  div {\n    width: 35px;\n    height: 35px;\n    border-radius: 18px;\n    background-color: #2c3138;\n    display: flex;\n    margin: auto;\n    svg {\n      margin auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n  p {\n    margin-top: 5px;\n    font-size: 13px;\n    font-weight: bold;\n    color: #2c3138;\n    line-height: normal;\n  }\n"]);return r=function(){return e},e}var l=a(n(4)).default.button(r());t.default=l},1897:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1)),r=n(8),l=a(n(2)),i=n(45),u=a(n(84)),d=a(n(1898)),c=a(n(1899));function f(e){var t=e.component,n=e.dzName,a=e.index,l=e.isActive,f=e.isInDevelopmentMode,s=e.onClick,p=(0,u.default)(),m=p.modifiedData,g=p.removeComponentFromDynamicZone,b=(0,r.get)(m,["components",t],{schema:{icon:null}}).schema,v=b.icon,y=b.name;return o.default.createElement(d.default,{onClick:s,className:l?"active":""},o.default.createElement("div",null,o.default.createElement(i.FontAwesomeIcon,{icon:v})),o.default.createElement("p",null,y),o.default.createElement("div",{className:"close-btn",onClick:function(e){e.stopPropagation(),g(n,a)}},f&&o.default.createElement(c.default,{width:"7px",height:"7px"})))}f.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick:function(){}},f.propTypes={component:l.default.string,dzName:l.default.string.isRequired,index:l.default.number.isRequired,isActive:l.default.bool,isInDevelopmentMode:l.default.bool,onClick:l.default.func};var s=f;t.default=s},1898:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7));function r(){var e=(0,o.default)(["\n  width: 139px;\n  height: 90px;\n  position: relative;\n  padding: 0;\n  padding-top: 5px;\n  border-radius: 2px;\n  border: 0;\n  text-align: center;\n  border: solid 1px #fafafb;\n  background-color: #fafafb;\n\n  &:focus {\n    outline: 0;\n  }\n\n\n  div:first-of-type {\n    display: flex;\n    width: 35px;\n    height: 35px;\n    margin: auto;\n    border-radius: 18px;\n    background-color: #e9eaeb;\n    color: #919bae;\n    font-size: 12px;\n\n    svg {\n      margin auto;\n    }\n  }\n\n  div:last-of-type {\n    position: absolute;\n    padding: 0 7px;\n    top: 0;\n    right: 0;\n    display: none;\n  }\n\n  p {\n    margin-top: 5px;\n    padding-left: 5px;\n    padding-right: 5px;\n    line-height: normal;\n    font-size: 13px;\n    font-weight: bold;\n    color: #919bae;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  &.active {\n    cursor: initial;\n  }\n\n  &:hover, &.active {\n    border-color: #aed4fb;\n    background-color: #e6f0fb;\n\n    div:first-of-type  {\n      background-color: #aed4fb;\n      color: #007eff;\n    }\n\n    div:last-of-type {\n      display: block;\n    }\n\n    p {\n      color: #007eff;\n    }\n  }\n"]);return r=function(){return e},e}var l=a(n(4)).default.button(r());t.default=l},1899:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(171);function i(){var e=(0,o.default)(["\n  > g {\n    > path {\n      fill: #007eff;\n    }\n  }\n"]);return i=function(){return e},e}var u=(0,r.default)(l.Remove)(i());t.default=u},1900:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(23);function i(){var e=(0,o.default)(["\n  table-layout: fixed;\n\n  tbody {\n    td:first-of-type:not(:last-of-type) {\n      width: 73px;\n      padding-left: 30px;\n      > svg {\n        width: auto;\n        height: 16px;\n        position: absolute;\n        left: -4px;\n        top: 16px;\n        display: none;\n      }\n    }\n    td[colspan='12'] {\n      position: relative;\n      padding: 0 0 0 50px;\n      > div {\n        box-shadow: none;\n      }\n    }\n    tr.component-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      table tr td:first-of-type:not(:last-of-type) {\n        width: 79px;\n        padding-left: 36px;\n        svg {\n          display: block;\n        }\n      }\n    }\n    table + button {\n      position: relative;\n      background-color: transparent;\n      text-transform: initial;\n      color: #9ea7b8;\n      text-align: left;\n      padding-left: 35px;\n      border-color: transparent;\n      svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    }\n    tr.dynamiczone-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      > td[colspan='12'] {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      .tabs-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        // height: 90px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        padding-top: 18px;\n        padding-left: 86px;\n        padding-right: 30px;\n        .nav-tabs {\n          border-bottom: 0;\n        }\n        ul.nav {\n          width: 100%;\n          // height: 90px;\n          display: flex;\n          flex-wrap: nowrap;\n          overflow-x: auto;\n          overflow-y: hidden;\n          li {\n            margin-right: 9px;\n          }\n        }\n        & + .tab-content {\n          padding-top: 126px;\n          position: relative;\n          z-index: 1;\n        }\n      }\n    }\n  }\n  & + .plus-icon {\n    width: 27px;\n    height: 27px;\n    border-radius: 18px;\n    position: absolute;\n    bottom: 14px;\n    left: 34px;\n    background-color: ",";\n\n    color: transparent;\n    text-align: center;\n    line-height: 27px;\n    display: flex;\n    cursor: pointer;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n"]);return i=function(){return e},e}var u=(0,r.default)(l.List)(i(),(function(e){return e.isFromDynamicZone?"#AED4FB":"#f3f4f4"}));u.defaultProps={isFromDynamicZone:!1};var d=u;t.default=d},1901:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(1)),l=a(n(2)),i=n(1833),u=a(n(1902)),d=a(n(1903));function c(e){var t=e.actions,n=e.title;return r.default.createElement(d.default,null,r.default.createElement("div",{className:"list-header-actions"},t.map((function(e){var t=e.disabled,n=e.label,a=e.onClick;return r.default.createElement(i.ListHeaderButton,(0,o.default)({key:n,onClick:a,disabled:t||!1},e),n)}))),r.default.createElement("div",{className:"list-header-title"},n.map((function(e){return r.default.createElement(u.default,{key:e},e,"\xa0")}))))}c.defaultProps={actions:[],title:[]},c.propTypes={actions:l.default.arrayOf(l.default.shape({disabled:l.default.bool,onClick:l.default.func,title:l.default.string})),title:l.default.arrayOf(l.default.string)};var f=c;t.default=f},1902:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(12);function i(){var e=(0,o.default)(["\n  margin-bottom: 0;\n  color: ",";\n  font-family: 'Lato';\n  font-size: 1.8rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n"]);return i=function(){return e},e}var u=r.default.p(i(),l.colors.blueTxt);t.default=u},1903:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7));function r(){var e=(0,o.default)(["\n  position: relative;\n  padding: 2.1rem 6rem 1.7rem 3rem;\n  background-color: white;\n  .list-header-actions {\n    position: absolute;\n    top: 1.8rem;\n    right: 3rem;\n    button {\n      outline: 0;\n      margin-left: 10px;\n    }\n  }\n"]);return r=function(){return e},e}var l=a(n(4)).default.div(r());t.default=l},1904:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(58)),l=a(n(170)),i=a(n(1)),u=a(n(2)),d=n(8),c=n(35),f=n(12),s=a(n(94)),p=a(n(66)),m=a(n(1905)),g=a(n(84)),b=a(n(353)),v=a(n(1908));function y(e){var t=e.wait,n=(0,g.default)(),a=n.components,u=n.componentsGroupedByCategory,y=n.contentTypes,h=n.isInDevelopmentMode,x=n.sortedContentTypesList,C=(0,f.useGlobalContext)(),w=C.emitEvent,E=C.formatMessage,k=(0,c.useHistory)().push,T=(0,d.sortBy)(Object.keys(u).map((function(e){return{name:e,title:e,isEditable:h,onClickEdit:function(e,t){e.stopPropagation();var n=(0,b.default)({actionType:"edit",modalType:"editCategory",categoryName:t.name,headerDisplayName:t.name,headerDisplayCategory:E({id:(0,p.default)("modalForm.header.categories")}),settingType:"base"});k({search:n})},links:(0,d.sortBy)(u[e].map((function(t){return{name:t.uid,to:"/plugins/".concat(s.default,"/component-categories/").concat(e,"/").concat(t.uid),title:t.schema.name}})),(function(e){return e.title}))}})),(function(e){return e.title})),N=function(){var e=(0,l.default)(r.default.mark((function e(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.keys(y).some((function(e){return!0===y[e].isTemporary}))||Object.keys(a).some((function(e){return!0===a[e].isTemporary}))){e.next=8;break}return w("contentType"===n?"willCreateContentType":"willCreateComponent"),e.next=5,t();case 5:k({search:"modalType=".concat(n,"&actionType=create&settingType=base&forTarget=").concat(n)}),e.next=9;break;case 8:strapi.notification.info("".concat(s.default,".notification.info.creating.notSaved"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=[{name:"models",title:{id:"".concat(s.default,".menu.section.models.name.")},searchable:!0,customLink:h?{Component:m.default,componentProps:{id:"".concat(s.default,".button.model.create"),onClick:function(){N("contentType")}}}:null,links:x},{name:"components",title:{id:"".concat(s.default,".menu.section.components.name.")},searchable:!0,customLink:h?{Component:m.default,componentProps:{id:"".concat(s.default,".button.component.create"),onClick:function(){N("component")}}}:null,links:T}];return i.default.createElement(v.default,{className:"col-md-3"},O.map((function(e){return i.default.createElement(f.LeftMenuList,(0,o.default)({},e,{key:e.name}))})))}y.defaultProps={wait:function(){}},y.propTypes={wait:u.default.func};var h=y;t.default=h},1905:function(e,t,n){"use strict";var a=n(0),o=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.CustomLink=t.default=void 0;var r=o(n(1)),l=n(20),i=a(n(2)),u=n(171),d=a(n(1906)),c=a(n(1907)),f=function(e){var t=e.disabled,n=e.id,a=e.onClick;return r.default.createElement(c.default,{disabled:t},r.default.createElement("button",{onClick:a,role:"button",disabled:t},r.default.createElement(d.default,null,r.default.createElement(u.Plus,{fill:"#007EFF",width:"11px",height:"11px"}),n&&r.default.createElement(l.FormattedMessage,{id:n}))))};t.CustomLink=f,f.defaultProps={disabled:!1,id:null},f.propTypes={disabled:i.default.bool,id:i.default.string,onClick:i.default.func.isRequired};var s=(0,r.memo)(f);t.default=s},1906:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(12);function i(){var e=(0,o.default)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: left;\n  > svg {\n    margin-right: 7px;\n    vertical-align: initial;\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n"]);return i=function(){return e},e}var u=r.default.p(i(),l.colors.blue);t.default=u},1907:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7));function r(){var e=(0,o.default)(["\n  padding-left: 15px;\n  padding-top: 9px;\n  line-height: 0;\n  margin-left: -3px;\n\n  button {\n    cursor: ",";\n    padding: 0;\n    line-height: 16px;\n  }\n"]);return r=function(){return e},e}var l=a(n(4)).default.div(r(),(function(e){return e.disabled?"not-allowed":"pointer"}));t.default=l},1908:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(12);function i(){var e=(0,o.default)(["\n  width: 100%;\n  min-height: calc(100vh - ",");\n  background-color: ",";\n  padding-top: 3.1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n"]);return i=function(){return e},e}var u=r.default.div(i(),l.sizes.header.height,l.colors.leftMenu.mediumGrey);t.default=u},1909:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(7)),r=a(n(4)),l=n(12);function i(){var e=(0,o.default)(["\n  .button-secondary {\n    &:hover {\n      background-color: #ffffff !important;\n      box-shadow: 0 0 0 #fff;\n    }\n  }\n  .button-submit {\n    min-width: 140px;\n  }\n  .add-button {\n    line-height: 30px;\n    svg {\n      height: 11px;\n      width: 11px;\n      vertical-align: initial;\n    }\n  }\n"]);return i=function(){return e},e}var u=(0,r.default)(l.ViewContainer)(i());t.default=u},644:function(e,t,n){"use strict";var a=n(9),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(19)),l=o(n(10)),i=o(n(58)),u=o(n(170)),d=o(n(43)),c=a(n(1)),f=n(35),s=o(n(2)),p=n(8),m=n(12),g=n(83),b=o(n(1828)),v=o(n(1829)),y=o(n(66)),h=o(n(353)),x=o(n(1891)),C=o(n(1830)),w=o(n(84)),E=o(n(94)),k=o(n(1901)),T=o(n(1904)),N=o(n(1909));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(){var e=(0,w.default)(),t=e.initialData,n=e.modifiedData,a=e.isInDevelopmentMode,o=e.isInContentTypeView,l=e.submitData,O=e.toggleModalCancel,D=(0,m.useGlobalContext)(),L=D.emitEvent,j=D.formatMessage,M=(0,f.useHistory)(),_=M.push,F=M.goBack,U=(0,f.useLocation)().search,R=(0,c.useState)(!0),Z=(0,d.default)(R,2),B=Z[0],A=Z[1];(0,c.useEffect)((function(){""===U&&A(!0)}),[U]),(0,c.useEffect)((function(){""!==U&&A(!1)}),[]);var z=o?"contentType":"component",I=[z,"schema","attributes"],q=(0,p.get)(n,[z,"uid"]),S=(0,p.get)(n,I,{}),H=Object.keys(S).length,G=(0,p.get)(t,[z,"schema","name"],""),W=(0,p.has)(t,[z,"plugin"]),J=!(0,p.isEqual)(n,t),V=o?"contentType":"component",K=function(){var e=(0,u.default)(i.default.mark((function e(t,n,a){var o,r,l,u,d=arguments;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=d.length>3&&void 0!==d[3]?d[3]:null,r=d.length>4&&void 0!==d[4]?d[4]:null,l=d.length>5&&void 0!==d[5]?d[5]:null,u={modalType:"chooseAttribute",forTarget:t,targetUid:n,headerDisplayName:a,headerDisplayCategory:o,headerDisplaySubCategory:r,subTargetUid:l},e.next=6,Y();case 6:_({search:(0,h.default)(u,!0)});case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Q=function(){var e=(0,u.default)(i.default.mark((function e(t){var n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={modalType:"addComponentToDynamicZone",forTarget:"contentType",targetUid:q,headerDisplayCategory:G,dynamicZoneTarget:t,settingType:"base",step:"1",actionType:"edit",headerDisplayName:t},e.next=3,Y();case 3:_({search:(0,h.default)(n,!0)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=(0,u.default)(i.default.mark((function e(t,n,a,o,r){var l,u,d,c,f,s=arguments;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=s.length>5&&void 0!==s[5]?s[5]:null,u=s.length>6&&void 0!==s[6]?s[6]:null,d=s.length>7&&void 0!==s[7]?s[7]:null,e.t0=o,e.next="integer"===e.t0?6:"biginteger"===e.t0?6:"decimal"===e.t0?6:"float"===e.t0?6:"string"===e.t0?8:"text"===e.t0?8:""===e.t0?10:12;break;case 6:return c="number",e.abrupt("break",13);case 8:return c="text",e.abrupt("break",13);case 10:return c="relation",e.abrupt("break",13);case 12:c=o;case 13:return e.next=15,Y();case 15:return f={modalType:"attribute",actionType:"edit",settingType:"base",forTarget:t,targetUid:n,attributeName:a,attributeType:c,headerDisplayName:r,headerDisplayCategory:l,headerDisplaySubCategory:u,step:"component"===o?"2":null,subTargetUid:d},e.next=18,Y();case 18:_({search:(0,h.default)(f,!0)});case 19:case"end":return e.stop()}}),e)})));return function(t,n,a,o,r){return e.apply(this,arguments)}}(),Y=function(){var e=(0,u.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!1),e.abrupt("return",new Promise((function(e){return setTimeout(e,100)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=(0,p.get)(n,[z,"schema","name"],""),ee={actions:a?[{color:"cancel",onClick:function(){O()},title:j({id:"".concat(E.default,".form.button.cancel")}),type:"button",disabled:!!(0,p.isEqual)(n,t)},{className:"button-submit",color:"success",onClick:function(){return l()},title:j({id:"".concat(E.default,".form.button.save")}),type:"submit",disabled:!!(0,p.isEqual)(n,t)}]:[],title:{label:$,cta:a&&!W?{icon:"pencil-alt",onClick:function(){var e=(0,u.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:"contentType"===z&&L("willEditNameOfContentType"),_({search:(0,h.default)({modalType:z,actionType:"edit",settingType:"base",forTarget:z,targetUid:q,headerDisplayName:$})});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}:null},content:function(){var e=(0,p.get)(n,[z,"schema","description"],null);return e||j({id:"".concat(E.default,".modelPage.contentHeader.emptyDescription.description")})}()},te=[j({id:"".concat(E.default,".table.attributes.title.").concat(H>1?"plural":"singular")},{number:H})],ne={icon:!0,className:"add-button",color:"primary",label:j({id:"".concat(E.default,".button.attributes.add.another")}),onClick:function(){K(V,q,G)}},ae={icon:c.default.createElement(m.LayoutIcon,{className:"colored",fill:"#007eff"}),color:"secondary",label:j({id:"".concat(E.default,".form.button.configure-view")}),onClick:function(){var e=o?"/plugins/content-manager/".concat(q,"/ctm-configurations/edit-settings/content-types"):"/plugins/content-manager/ctm-configurations/edit-settings/components/".concat(q,"/");_(e)},style:{height:"30px",marginTop:"1px"},className:"button-secondary"},oe=a?[P({},ae),P({},ne)]:[ae],re=function(){},le=function(e){var t=e.name;return c.default.createElement(x.default,(0,r.default)({},e,{attributeName:t,name:t,onClick:X,onClickDelete:re}))};return le.defaultProps={name:null},le.propTypes={name:s.default.string},c.default.createElement(b.default.Provider,{value:{openModalAddField:K}},c.default.createElement(N.default,null,c.default.createElement(m.BackHeader,{onClick:F}),c.default.createElement(f.Prompt,{message:j({id:(0,y.default)("prompt.unsaved")}),when:J&&B}),c.default.createElement("div",{className:"container-fluid"},c.default.createElement("div",{className:"row"},c.default.createElement(T.default,{wait:Y}),c.default.createElement("div",{className:"col-md-9 content",style:{paddingLeft:"30px",paddingRight:"30px"}},c.default.createElement(g.Header,ee),c.default.createElement(m.ListWrapper,{style:{marginBottom:80}},c.default.createElement(k.default,{actions:oe,title:te}),c.default.createElement(C.default,{items:(0,v.default)(S),customRowComponent:function(e){return c.default.createElement(le,e)},addComponentToDZ:Q,targetUid:q,dataType:V,dataTypeName:G,mainTypeName:G,editTarget:V,isMain:!0})))))))};t.default=D}}]);
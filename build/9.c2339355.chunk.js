(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1765:function(t,e,n){"use strict";var u=n(9),a=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=a(n(19)),r=u(n(1)),c=n(35),o=n(12),i=(0,r.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.t.bind(null,1910,7))})),d=(0,r.lazy)((function(){return n.e(0).then(n.t.bind(null,1761,7))})),f=(0,r.lazy)((function(){return n.e(6).then(n.t.bind(null,2096,7))})),s=(0,r.lazy)((function(){return n.e(7).then(n.t.bind(null,2131,7))})),p=function(t){var e=(0,c.useRouteMatch)().url,n=(0,c.useParams)().slug,u=function(e,u){return r.default.createElement(u,(0,l.default)({},t,e,{slug:n}))},a=[{path:"ctm-configurations/list-settings",comp:s},{path:"ctm-configurations/edit-settings/:type",comp:d},{path:":id",comp:i},{path:"",comp:f}].map((function(t){var n=t.path,a=t.comp;return r.default.createElement(c.Route,{key:n,path:"".concat(e,"/").concat(n),render:function(t){return u(t,a)}})}));return r.default.createElement(r.Suspense,{fallback:r.default.createElement(o.LoadingIndicatorPage,null)},r.default.createElement(c.Switch,null,a))};e.default=p}}]);
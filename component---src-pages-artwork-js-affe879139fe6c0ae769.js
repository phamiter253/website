"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[102],{7408:function(e,t,r){var n=r(70885),o=r(4942),a=r(45987),i=r(75900),c=r.n(i),l=r(67294),s=r(99541),u=r(85893),f=["as","bsPrefix","className"],p=["className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=l.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,n=e.className,o=(0,a.Z)(e,f);r=(0,s.vE)(r,"col");var i=(0,s.pi)(),l=[],u=[];return i.forEach((function(e){var t,n,a,i=o[e];delete o[e],"object"==typeof i&&null!=i?(t=i.span,n=i.offset,a=i.order):t=i;var c="xs"!==e?"-".concat(e):"";t&&l.push(!0===t?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(t)),null!=a&&u.push("order".concat(c,"-").concat(a)),null!=n&&u.push("offset".concat(c,"-").concat(n))})),[b(b({},o),{},{className:c().apply(void 0,[n].concat(l,u))}),{as:t,bsPrefix:r,spans:l}]}(e),o=(0,n.Z)(r,2),i=o[0],l=i.className,d=(0,a.Z)(i,p),m=o[1],v=m.as,y=void 0===v?"div":v,g=m.bsPrefix,h=m.spans;return(0,u.jsx)(y,b(b({},d),{},{ref:t,className:c()(l,!h.length&&g)}))}));m.displayName="Col",t.Z=m},49643:function(e,t,r){var n=r(4942),o=r(45987),a=r(75900),i=r.n(a),c=r(67294),l=r(45697),s=r.n(l),u=r(99541),f=r(85893),p=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}s().string,s().bool,s().bool,s().bool,s().bool;var m=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.fluid,c=e.rounded,l=e.roundedCircle,s=e.thumbnail,d=(0,o.Z)(e,p);return r=(0,u.vE)(r,"img"),(0,f.jsx)("img",b(b({ref:t},d),{},{className:i()(n,a&&"".concat(r,"-fluid"),c&&"rounded",l&&"rounded-circle",s&&"".concat(r,"-thumbnail"))}))}));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=m},20994:function(e,t,r){var n=r(4942),o=r(45987),a=r(75900),i=r.n(a),c=r(67294),l=r(99541),s=r(85893),u=["bsPrefix","className","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,f=(0,o.Z)(e,u),d=(0,l.vE)(r,"row"),b=(0,l.pi)(),m="".concat(d,"-cols"),v=[];return b.forEach((function(e){var t,r=f[e];delete f[e],t=null!=r&&"object"==typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(m).concat(n,"-").concat(t))})),(0,s.jsx)(c,p(p({ref:t},f),{},{className:i().apply(void 0,[n,d].concat(v))}))}));d.displayName="Row",t.Z=d},56441:function(e,t,r){r.r(t),r.d(t,{default:function(){return rt}});var n=r(67294),o=r(80352),a=r(60262),i=r(4942),c=r(45987),l=r(42982),s=r(70885),u=r(90424),f=r(76400),p=r(59129),d=Math.pow(2,31)-1;function b(e,t,r){var n=r-Date.now();e.current=n<=d?setTimeout(t,n):setTimeout((function(){return b(e,t,r)}),d)}function m(){var e=(0,f.Z)(),t=(0,n.useRef)();return(0,p.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(n,o){void 0===o&&(o=0),e()&&(r(),o<=d?t.current=setTimeout(n,o):b(t,n,Date.now()+o))},clear:r}}),[])}var v=r(42473),y=r.n(v),g=r(45210),h=r(51822),w=r(75900),O=r.n(w),j=r(73935),E=r(33924);function Z(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=Object.prototype.hasOwnProperty;function C(e,t,r){var n,o=Z(e.keys());try{for(o.s();!(n=o.n()).done;)if(k(r=n.value,t))return r}catch(a){o.e(a)}finally{o.f()}}function k(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&k(e[n],t[n]););return-1===n}if(r===Set){if(e.size!==t.size)return!1;var a,i=Z(e);try{for(i.s();!(a=i.n()).done;){if((o=n=a.value)&&"object"==typeof o&&!(o=C(t,o)))return!1;if(!t.has(o))return!1}}catch(s){i.e(s)}finally{i.f()}return!0}if(r===Map){if(e.size!==t.size)return!1;var c,l=Z(e);try{for(l.s();!(c=l.n()).done;){if((o=(n=c.value)[0])&&"object"==typeof o&&!(o=C(t,o)))return!1;if(!k(n[1],t.get(o)))return!1}}catch(s){l.e(s)}finally{l.f()}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return-1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}if(!r||"object"==typeof e){for(r in n=0,e){if(x.call(e,r)&&++n&&!x.call(t,r))return!1;if(!(r in t)||!k(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!=e&&t!=t}var S=function(e){var t=(0,f.Z)();return[e[0],(0,n.useCallback)((function(r){if(t())return e[1](r)}),[t,e[1]])]},D=r(37096),A=r(16928),R=r(56575),B=r(34751),N=r(40008),T=r(79460),M=r(54049),_=r(33615),z=(0,r(75430).kZ)({defaultModifiers:[N.Z,M.Z,A.Z,R.Z,T.Z,B.Z,_.Z,D.Z]}),F=["enabled","placement","strategy","modifiers"];function I(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var L={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},U={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,r=e.reference,n=e.popper;if("removeAttribute"in r){var o=(r.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==n.id}));o.length?r.setAttribute("aria-describedby",o.join(",")):r.removeAttribute("aria-describedby")}}},fn:function(e){var t,r=e.state.elements,n=r.popper,o=r.reference,a=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(n.id))return;o.setAttribute("aria-describedby",i?"".concat(i,",").concat(n.id):n.id)}}},G=[];var H=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.enabled,a=void 0===o||o,i=r.placement,c=void 0===i?"bottom":i,u=r.strategy,f=void 0===u?"absolute":u,p=r.modifiers,d=void 0===p?G:p,b=I(r,F),m=(0,n.useRef)(d),v=(0,n.useRef)(),y=(0,n.useCallback)((function(){var e;null==(e=v.current)||e.update()}),[]),g=(0,n.useCallback)((function(){var e;null==(e=v.current)||e.forceUpdate()}),[]),h=S((0,n.useState)({placement:c,update:y,forceUpdate:g,attributes:{},styles:{popper:{},arrow:{}}})),w=(0,s.Z)(h,2),O=w[0],j=w[1],E=(0,n.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,r={},n={};Object.keys(t.elements).forEach((function(e){r[e]=t.styles[e],n[e]=t.attributes[e]})),j({state:t,styles:r,attributes:n,update:y,forceUpdate:g,placement:t.placement})}}}),[y,g,j]),Z=(0,n.useMemo)((function(){return k(m.current,d)||(m.current=d),m.current}),[d]);return(0,n.useEffect)((function(){v.current&&a&&v.current.setOptions({placement:c,strategy:f,modifiers:[].concat((0,l.Z)(Z),[E,L])})}),[f,c,E,a,Z]),(0,n.useEffect)((function(){if(a&&null!=e&&null!=t)return v.current=z(e,t,Object.assign({},b,{placement:c,strategy:f,modifiers:[].concat((0,l.Z)(Z),[U,E])})),function(){null!=v.current&&(v.current.destroy(),v.current=void 0,j((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[a,e,t]),O},W=r(38076),K=r(67216),V=r(85655),$=function(){};function q(e){return 0===e.button}function J(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Q=function(e){return e&&("current"in e?e.current:e)},X={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.disabled,a=r.clickTrigger,i=void 0===a?"click":a,c=(0,n.useRef)(!1),l=(0,n.useRef)(!1),s=(0,n.useCallback)((function(t){var r=Q(e);y()(!!r,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),c.current=!r||J(t)||!q(t)||!!(0,u.Z)(r,t.target)||l.current,l.current=!1}),[e]),f=(0,V.Z)((function(t){var r=Q(e);r&&(0,u.Z)(r,t.target)&&(l.current=!0)})),p=(0,V.Z)((function(e){c.current||t(e)}));(0,n.useEffect)((function(){if(!o&&null!=e){var t=(0,K.Z)(Q(e)),r=(t.defaultView||window).event,n=null;X[i]&&(n=(0,W.Z)(t,X[i],f,!0));var a=(0,W.Z)(t,i,s,!0),c=(0,W.Z)(t,i,(function(e){e!==r?p(e):r=void 0})),l=[];return"ontouchstart"in t.documentElement&&(l=[].slice.call(t.body.children).map((function(e){return(0,W.Z)(e,"mousemove",$)}))),function(){null==n||n(),a(),c(),l.forEach((function(e){return e()}))}}}),[e,o,i,s,f,p])},ee=function(){};var te=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.disabled,a=r.clickTrigger,i=t||ee;Y(e,i,{disabled:o,clickTrigger:a});var c=(0,V.Z)((function(e){27===e.keyCode&&i(e)}));(0,n.useEffect)((function(){if(!o&&null!=e){var t=(0,K.Z)(Q(e)),r=(t.defaultView||window).event,n=(0,W.Z)(t,"keyup",(function(e){e!==r?c(e):r=void 0}));return function(){n()}}}),[e,o,c])},re=r(11228);function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function oe(e){var t,r,n,o,a=e.enabled,i=e.enableEvents,c=e.placement,l=e.flip,s=e.offset,u=e.fixed,f=e.containerPadding,p=e.arrowElement,d=e.popperConfig,b=void 0===d?{}:d,m=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(b.modifiers);return Object.assign({},b,{placement:c,enabled:a,strategy:u?"fixed":b.strategy,modifiers:ne(Object.assign({},m,{eventListeners:{enabled:i},preventOverflow:Object.assign({},m.preventOverflow,{options:f?Object.assign({padding:f},null==(t=m.preventOverflow)?void 0:t.options):null==(r=m.preventOverflow)?void 0:r.options}),offset:{options:Object.assign({offset:s},null==(n=m.offset)?void 0:n.options)},arrow:Object.assign({},m.arrow,{enabled:!!p,options:Object.assign({},null==(o=m.arrow)?void 0:o.options,{element:p})}),flip:Object.assign({enabled:!!l},m.flip)}))})}var ae=r(85893),ie=n.forwardRef((function(e,t){var r=e.flip,o=e.offset,a=e.placement,i=e.containerPadding,c=e.popperConfig,l=void 0===c?{}:c,u=e.transition,f=(0,E.Z)(),p=(0,s.Z)(f,2),d=p[0],b=p[1],m=(0,E.Z)(),v=(0,s.Z)(m,2),y=v[0],g=v[1],w=(0,h.Z)(b,t),O=(0,re.Z)(e.container),Z=(0,re.Z)(e.target),P=(0,n.useState)(!e.show),x=(0,s.Z)(P,2),C=x[0],k=x[1],S=H(Z,d,oe({placement:a,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:o,arrowElement:y,popperConfig:l}));e.show?C&&k(!1):e.transition||C||k(!0);var D=e.show||u&&!C;if(te(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var A=e.children(Object.assign({},S.attributes.popper,{style:S.styles.popper,ref:w}),{popper:S,placement:a,show:!!e.show,arrowProps:Object.assign({},S.attributes.arrow,{style:S.styles.arrow,ref:g})});if(u){var R=e.onExit,B=e.onExiting,N=e.onEnter,T=e.onEntering,M=e.onEntered;A=(0,ae.jsx)(u,{in:e.show,appear:!0,onExit:R,onExiting:B,onExited:function(){k(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:N,onEntering:T,onEntered:M,children:A})}return O?j.createPortal(A,O):null}));ie.displayName="Overlay";var ce=ie,le=r(11132),se=r(99541),ue=r(38870),fe=(0,ue.Z)("popover-header"),pe=(0,ue.Z)("popover-body"),de=r(43144),be=r(15671),me=r(60136),ve=r(6215),ye=r(61120);function ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,ye.Z)(e);if(t){var o=(0,ye.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,ve.Z)(this,r)}}n.Component;var he=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"];function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.placement,o=e.className,a=e.style,i=e.children,l=e.body,u=e.arrowProps,f=(e.popper,e.show,(0,c.Z)(e,he)),p=(0,se.vE)(r,"popover"),d=(0,se.SC)(),b=(null==n?void 0:n.split("-"))||[],m=(0,s.Z)(b,1)[0],v=function(e,t){var r=e;return"left"===e?r=t?"end":"start":"right"===e&&(r=t?"start":"end"),r}(m,d);return(0,ae.jsxs)("div",Oe(Oe({ref:t,role:"tooltip",style:a,"x-placement":m,className:O()(o,p,m&&"bs-popover-".concat(v))},f),{},{children:[(0,ae.jsx)("div",Oe({className:"popover-arrow"},u)),l?(0,ae.jsx)(pe,{children:i}):i]}))}));je.defaultProps={placement:"right"};var Ee=Object.assign(je,{Header:fe,Body:pe,POPPER_OFFSET:[0,8]});var Ze=r(563),Pe=r(18305),xe=["children","transition","popperConfig"];function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se={transition:Ze.Z,rootClose:!1,show:!1,placement:"top"};var De=n.forwardRef((function(e,t){var r=e.children,o=e.transition,a=e.popperConfig,i=void 0===a?{}:a,l=(0,c.Z)(e,xe),u=(0,n.useRef)({}),f=function(e){var t=(0,n.useRef)(null),r=(0,se.vE)(void 0,"popover"),o=(0,n.useMemo)((function(){return{name:"offset",options:{offset:function(){return t.current&&(0,le.Z)(t.current,r)?e||Ee.POPPER_OFFSET:e||[0,0]}}}}),[e,r]);return[t,[o]]}(l.offset),p=(0,s.Z)(f,2),d=p[0],b=p[1],m=(0,h.Z)(t,d),v=!0===o?Ze.Z:o||void 0;return(0,ae.jsx)(ce,ke(ke({},l),{},{ref:m,popperConfig:ke(ke({},i),{},{modifiers:b.concat(i.modifiers||[])}),transition:v,children:function(e,t){var a,i,c=t.arrowProps,l=t.popper,s=t.show;!function(e,t){var r=e.ref,n=t.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,Pe.Z)(e))}),t.ref=n.__wrapped||(n.__wrapped=function(e){return n((0,Pe.Z)(e))})}(e,c);var f=null==l?void 0:l.placement,p=Object.assign(u.current,{state:null==l?void 0:l.state,scheduleUpdate:null==l?void 0:l.update,placement:f,outOfBoundaries:(null==l||null==(a=l.state)||null==(i=a.modifiersData.hide)?void 0:i.isReferenceHidden)||!1});return"function"==typeof r?r(ke(ke(ke({},e),{},{placement:f,show:s},!o&&s&&{className:"show"}),{},{popper:p,arrowProps:c})):n.cloneElement(r,ke(ke({},e),{},{placement:f,arrowProps:c,popper:p,className:O()(r.props.className,!o&&s&&"show"),style:ke(ke({},r.props.style),e.style)}))}}))}));De.displayName="Overlay",De.defaultProps=Se;var Ae=De,Re=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Te(e,t,r){var n=(0,s.Z)(t,1)[0],o=n.currentTarget,a=n.relatedTarget||n.nativeEvent[r];a&&a===o||(0,u.Z)(o,a)||e.apply(void 0,(0,l.Z)(t))}function Me(e){var t=e.trigger,r=e.overlay,o=e.children,a=e.popperConfig,i=void 0===a?{}:a,l=e.show,u=e.defaultShow,f=void 0!==u&&u,p=e.onToggle,d=e.delay,b=e.placement,v=e.flip,y=void 0===v?b&&-1!==b.indexOf("auto"):v,w=(0,c.Z)(e,Re),O=(0,n.useRef)(null),j=(0,h.Z)(O,o.ref),E=m(),Z=(0,n.useRef)(""),P=(0,g.$c)(l,f,p),x=(0,s.Z)(P,2),C=x[0],k=x[1],S=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}}(d),D="function"!=typeof o?n.Children.only(o).props:{},A=D.onFocus,R=D.onBlur,B=D.onClick,N=(0,n.useCallback)((function(){E.clear(),Z.current="show",S.show?E.set((function(){"show"===Z.current&&k(!0)}),S.show):k(!0)}),[S.show,k,E]),T=(0,n.useCallback)((function(){E.clear(),Z.current="hide",S.hide?E.set((function(){"hide"===Z.current&&k(!1)}),S.hide):k(!1)}),[S.hide,k,E]),M=(0,n.useCallback)((function(){N(),null==A||A.apply(void 0,arguments)}),[N,A]),_=(0,n.useCallback)((function(){T(),null==R||R.apply(void 0,arguments)}),[T,R]),z=(0,n.useCallback)((function(){k(!C),null==B||B.apply(void 0,arguments)}),[B,k,C]),F=(0,n.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];Te(N,t,"fromElement")}),[N]),I=(0,n.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];Te(T,t,"toElement")}),[T]),L=null==t?[]:[].concat(t),U={ref:function(e){j((0,Pe.Z)(e))}};return-1!==L.indexOf("click")&&(U.onClick=z),-1!==L.indexOf("focus")&&(U.onFocus=M,U.onBlur=_),-1!==L.indexOf("hover")&&(U.onMouseOver=F,U.onMouseOut=I),(0,ae.jsxs)(ae.Fragment,{children:["function"==typeof o?o(U):(0,n.cloneElement)(o,U),(0,ae.jsx)(Ae,Ne(Ne({},w),{},{show:C,onHide:T,flip:y,placement:b,popperConfig:i,target:O.current,children:r}))]})}Me.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var _e=Me,ze=r(20994),Fe=r(7408),Ie=r(49643),Le=r.p+"static/birchtree-705137d87c804f8fd976adf0c5fbaf82.jpg",Ue=r.p+"static/maze-196af6d0468694b2550b3d4bb7f7d1c4.jpg",Ge=r.p+"static/illusion-f4728e11e683d67719bb8fbcfb83daad.jpg",He=r.p+"static/lena-flowers-3d65e541d76bae1c9af4b6cdcd99d12a.jpg",We=r.p+"static/skeleton-49b5cdb6642ef61ff5cc66049e24bcf7.jpg",Ke=r.p+"static/bookcase-5f815454776b814acfa883cc652ee19e.jpg",Ve=r.p+"static/taco-727525de26ad9d52744c050283e3b849.jpg",$e=r.p+"static/christmas2020-3-2d1dced60d149157cca45514d5876669.jpg",qe=r.p+"static/christmas2020-2-e215aee15bd577ae02df19f7dcaae90c.jpg",Je=r.p+"static/christmas2020-4-bc996596fcdfe6dce7a0b6a351b4f513.jpg",Qe=r.p+"static/christmas2020-5-c70ddd05eff784d0c55ad5c1925007b5.jpg",Xe=r.p+"static/sidetable-e6cbfdd1b547c3ee3bcf12760690828c.jpg",Ye=r.p+"static/piano-122709156f16eb8690c7a55eb23e572f.jpg",et=r.p+"static/lion-8fbd869d7e5f1c4a2ab1aaaf9b011e6d.jpg",tt=r.p+"static/table-debc950aabe0f4d11ff0a8f9b8da35b8.jpg",rt=function(){return n.createElement(o.Z,{width:window.innerWidth,height:2400},n.createElement(a.Z,{title:"Artwork"}),n.createElement(ze.Z,null,n.createElement(Fe.Z,null,n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Birch Trees Painting- 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Le,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Bookcase - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Ke,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Crochet Taco Pillow - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Ve,fluid:!0}))),n.createElement(Fe.Z,null,n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Paper California Tree Poppies - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:He,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Maze Painting - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Ue,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Guitar Giftbox - 2020")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:$e,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Piano - 2014")},n.createElement(Ie.Z,{src:Ye,fluid:!0}))),n.createElement(Fe.Z,null,n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Illusion Painting - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Ge,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cheeseburger Gift Wrapping - 2020")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Qe,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Toilet Giftbox - 2020")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Je,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Magazine Collage Table - 2014")},n.createElement(Ie.Z,{src:tt,fluid:!0}))),n.createElement(Fe.Z,null,n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Skeleton Painting - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:We,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Hershey's Chocolate Bar Gift Wrapping - 2021")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:qe,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Cardboard Sidetable - 2017")},n.createElement(Ie.Z,{style:{marginBottom:"2vh"},src:Xe,fluid:!0})),n.createElement(_e,{placement:"bottom-end",delay:{show:250,hide:400},overlay:n.createElement("div",{style:{backgroundColor:"rgba(25, 25, 25, 0.85)",padding:"2px 10px",color:"white",position:"absolute"}},"Paper Mache Glitter Lion Statue - 2014")},n.createElement(Ie.Z,{src:et,fluid:!0})))))}},42473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-artwork-js-affe879139fe6c0ae769.js.map
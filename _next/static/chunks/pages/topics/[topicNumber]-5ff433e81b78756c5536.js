(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{2167:function(e,n,t){"use strict";var r=t(3848),o=t(9448);n.default=void 0;var a=o(t(7294)),c=t(9414),u=t(4651),i=t(7426),f={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=(0,u.useRouter)(),s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,_=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),m=r(g,2),L=m[0],w=m[1],k=a.default.useCallback((function(e){L(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,L]);(0,a.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:o&&o.locale,r=f[d+"%"+p+(n?"%"+n:"")];e&&!r&&l(o,d,p,{locale:n})}),[p,d,w,b,t,o]);var M={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,_,y,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof b?b:o&&o.locale,N=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,C,o&&o.locales,o&&o.domainLocales);M.href=N||(0,c.addBasePath)((0,c.addLocale)(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},5501:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var r=t(5893),o=t(6616),a=!0;n.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{theme:"transparent"}),(0,r.jsx)("div",{children:"\u0e23\u0e31\u0e10\u0e2a\u0e20\u0e32\u0e44\u0e17\u0e22...\u0e04\u0e27\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e1a\u0e1a\u0e44\u0e2b\u0e19"})]})}},4164:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topics/[topicNumber]",function(){return t(5501)}])},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[616,774,888,179],(function(){return n=4164,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
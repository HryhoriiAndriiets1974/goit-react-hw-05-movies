"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{468:function(n,t,e){e.d(t,{Z:function(){return o}});var r,i=e(168),a=e(31).ZP.h1(r||(r=(0,i.Z)(["\nwidth: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5px;\nmargin-top: 0;\nmargin-bottom: 20px;\nmargin-left: auto;\nmargin-right: auto;\nborder-radius: 10px;\ntext-align: center;\nbox-shadow: 0 0 10px 1px #7bd4eb;\nbackground-image: repeating-linear-gradient(\n  -45deg,\n  #7bd4eb,\n  #7bd4eb 15px,\n  #fcfcfc 15px,\n  #fcfcfc 30px\n);\n"]))),c=e(184);function o(n){var t=n.text;return(0,c.jsx)(a,{children:t})}},478:function(n,t,e){e.d(t,{Z:function(){return r.Z}});var r=e(468)},75:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),i=e(791),a=e(871),c=e(501),o=e(478),u=e(207),s=e(77),d=e(184);function f(){var n=(0,a.TH)(),t=(0,i.useState)(""),e=(0,r.Z)(t,2),f=e[0],p=e[1];(0,i.useEffect)((function(){u.Hg().then((function(n){return p(n.results)}))}),[]);var l=function(n){return null===n?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":"https://image.tmdb.org/t/p/w300".concat(n)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{text:"TRENDING TODAY"}),f&&(0,d.jsx)(s.ri,{children:f.map((function(t){var e=t.id,r=t.poster_path,i=t.title;return(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/movies/".concat(e),state:n,children:(0,d.jsxs)(s.Zb,{children:[(0,d.jsx)("img",{src:"".concat(l(r)),alt:i,width:"300",height:"450"}),(0,d.jsx)(s.Dx,{children:i})]})})},e)}))})]})}},77:function(n,t,e){e.d(t,{Dx:function(){return d},Zb:function(){return s},ri:function(){return u}});var r,i,a,c=e(168),o=e(31),u=o.ZP.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  flex-basis: calc((100% - 8 * 15px) / 3);\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 16px;\n  margin-top: 20px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=o.ZP.div(i||(i=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nalign-content: center;\njustify-content: center;\nflex-direction: column;\npadding: 5px;\nborder-radius: 10px;\nbox-shadow: 0 0 10px 1px #7bd4eb;\ntransition: transform var(--animation-duration) var(--timing-function);\n&:hover {\n  box-shadow: 0 0 13px 3px #de14b9;\n  transform: scale(1.03);\n}\n"]))),d=o.ZP.p(a||(a=(0,c.Z)(["\ndisplay: flex;\npadding: 5px;\ncolor: #de14b9;\n"])))},207:function(n,t,e){e.d(t,{Hg:function(){return d},IQ:function(){return l},Jh:function(){return x},NV:function(){return f},yK:function(){return p}});var r=e(861),i=e(757),a=e.n(i),c="ccff67b17da8d42d9549aa2bea27fbb2",o="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function d(){return u("".concat(o,"/trending/movie/day?api_key=").concat(c))}function f(n){return u("".concat(o,"/search/movie?query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"))}function p(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(c))}function l(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c))}function x(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&page=1"))}}}]);
//# sourceMappingURL=75.17287a85.chunk.js.map
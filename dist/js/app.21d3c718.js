(function(e){function t(t){for(var r,u,i=t[0],s=t[1],d=t[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);a&&a(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var a=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"32be":function(e,t,n){},"3dd1":function(e,t,n){},4203:function(e,t,n){},4971:function(e,t,n){"use strict";n("b808")},"4c52":function(e,t,n){"use strict";n("9028")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,u){var i=Object(r["o"])("the-header"),s=Object(r["o"])("the-resources");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i,{title:"Remember Me"}),Object(r["h"])(s)],64)}function o(e,t,n,c,o,u){return Object(r["j"])(),Object(r["e"])("header",null,[Object(r["f"])("h1",null,Object(r["q"])(n.title),1)])}var u={props:["title"]},i=(n("4971"),n("6b0d")),s=n.n(i);const d=s()(u,[["render",o],["__scopeId","data-v-18be8fe6"]]);var a=d,l=Object(r["g"])("Stored Resources"),f=Object(r["g"])("Add resource");function b(e,t,n,c,o,u){var i=Object(r["o"])("base-button"),s=Object(r["o"])("base-card");return Object(r["j"])(),Object(r["d"])(s,null,{default:Object(r["r"])((function(){return[Object(r["h"])(i,{onClick:t[0]||(t[0]=function(e){return u.setSelectedTab("stored-resources")}),mode:u.storedResButtonMode},{default:Object(r["r"])((function(){return[l]})),_:1},8,["mode"]),Object(r["h"])(i,{onClick:t[1]||(t[1]=function(e){return u.setSelectedTab("add-resource")}),mode:u.addResButtonMode},{default:Object(r["r"])((function(){return[f]})),_:1},8,["mode"]),(Object(r["j"])(),Object(r["d"])(r["b"],null,[(Object(r["j"])(),Object(r["d"])(Object(r["p"])(o.selectedTab)))],1024))]})),_:1})}n("a4d3"),n("e01a"),n("9911");function j(e,t,n,c,o,u){var i=Object(r["o"])("LearningResource");return Object(r["j"])(),Object(r["e"])("ul",null,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(u.resources,(function(e){return Object(r["j"])(),Object(r["d"])(i,{key:e.id,title:e.title,description:e.description,link:e.link},null,8,["title","description","link"])})),128))])}var O=Object(r["g"])("Delete"),p=["href"];function v(e,t,n,c,o,u){var i=Object(r["o"])("base-button"),s=Object(r["o"])("base-card");return Object(r["j"])(),Object(r["e"])("li",null,[Object(r["h"])(s,null,{default:Object(r["r"])((function(){return[Object(r["f"])("header",null,[Object(r["f"])("h3",null,Object(r["q"])(n.title),1),Object(r["h"])(i,{mode:"flat"},{default:Object(r["r"])((function(){return[O]})),_:1})]),Object(r["f"])("p",null,Object(r["q"])(n.description),1),Object(r["f"])("nav",null,[Object(r["f"])("a",{href:n.link},"View resource",8,p)])]})),_:1})])}var h={props:["title","description","link"],methods:{}};n("4c52");const m=s()(h,[["render",v],["__scopeId","data-v-1d4daae4"]]);var g=m,_={components:{LearningResource:g},inject:["resources"]};n("8f58");const y=s()(_,[["render",j],["__scopeId","data-v-edd36746"]]);var k=y,R=function(e){return Object(r["l"])("data-v-3889c29e"),e=e(),Object(r["k"])(),e},T={class:"form-control"},w=R((function(){return Object(r["f"])("label",{for:"title"},"Title",-1)})),I={id:"title",name:"title",type:"text",ref:"titleInput"},S={class:"form-control"},M=R((function(){return Object(r["f"])("label",{for:"description"},"Description",-1)})),x={id:"description",name:"description",rows:"3",ref:"descInput"},P={class:"form-control"},D=R((function(){return Object(r["f"])("label",{for:"link"},"link",-1)})),$={id:"link",name:"link",type:"url",ref:"linkInput"},B=Object(r["g"])("Add resource");function q(e,t,n,c,o,u){var i=Object(r["o"])("base-button"),s=Object(r["o"])("base-card");return Object(r["j"])(),Object(r["d"])(s,null,{default:Object(r["r"])((function(){return[Object(r["f"])("form",{onSubmit:t[0]||(t[0]=Object(r["s"])((function(){return u.submitData&&u.submitData.apply(u,arguments)}),["prevent"]))},[Object(r["f"])("div",T,[w,Object(r["f"])("input",I,null,512)]),Object(r["f"])("div",S,[M,Object(r["f"])("textarea",x,null,512)]),Object(r["f"])("div",P,[D,Object(r["f"])("input",$,null,512)]),Object(r["f"])("div",null,[Object(r["h"])(i,{type:"submit"},{default:Object(r["r"])((function(){return[B]})),_:1})])],32)]})),_:1})}n("498a");var A={emits:["new-resource"],inject:["addResource"],methods:{submitData:function(){var e=this.$refs.titleInput.value,t=this.$refs.descInput.value,n=this.$refs.linkInput.value;""!==e.trim()&&""!==t.trim()&&""!==n.trim()&&this.addResource(e,t,n)}}};n("ad52");const L=s()(A,[["render",q],["__scopeId","data-v-3889c29e"]]);var C=L,J={components:{storedResources:k,AddResource:C},data:function(){return{storedResources:[{id:"official-guide",title:"Official guide",description:"The official vue js documentation",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Learn to google...",link:"https://google.com"}],selectedTab:"stored-resources"}},provide:function(){return{resources:this.storedResources,addResource:this.addResource}},computed:{storedResButtonMode:function(){return"stored-resources"===this.selectedTab?null:"flat"},addResButtonMode:function(){return"add-resource"===this.selectedTab?null:"flat"}},methods:{setSelectedTab:function(e){this.selectedTab=e},addResource:function(e,t,n){var r={id:(new Date).toISOString(),title:e,description:t,link:n};this.storedResources.unshift(r),this.selectedTab="stored-resources"}}};const G=s()(J,[["render",b]]);var H=G,V={components:{TheHeader:a,TheResources:H}};n("c5c7");const z=s()(V,[["render",c]]);var E=z;function F(e,t){return Object(r["j"])(),Object(r["e"])("div",null,[Object(r["n"])(e.$slots,"default",{},void 0,!0)])}n("67f1");const K={},N=s()(K,[["render",F],["__scopeId","data-v-af38052e"]]);var Q=N;function U(e,t,n,c,o,u){return Object(r["j"])(),Object(r["e"])("button",{class:Object(r["i"])(n.mode)},[Object(r["n"])(e.$slots,"default",{},void 0,!0)],2)}var W={props:["mode"]};n("cff4");const X=s()(W,[["render",U],["__scopeId","data-v-3add6110"]]);var Y=X,Z=Object(r["c"])(E);Z.component("base-card",Q),Z.component("base-button",Y),Z.mount("#app")},"67f1":function(e,t,n){"use strict";n("32be")},"8f58":function(e,t,n){"use strict";n("3dd1")},9028:function(e,t,n){},ac43:function(e,t,n){},ad52:function(e,t,n){"use strict";n("4203")},b808:function(e,t,n){},c5c7:function(e,t,n){"use strict";n("d2d4")},cff4:function(e,t,n){"use strict";n("ac43")},d2d4:function(e,t,n){}});
//# sourceMappingURL=app.21d3c718.js.map
"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Requests for Comments",s={unversionedId:"rfc/README",id:"rfc/README",title:"Requests for Comments",description:"A Request for Comments (RFC) is a record of discussion on an open-ended topic",source:"@site/docs/rfc/README.md",sourceDirName:"rfc",slug:"/rfc/",permalink:"/main/rfc/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ADR {ADR-NUMBER}:",permalink:"/main/architecture/adr-template"},next:{title:"RFC Creation Process",permalink:"/main/rfc/PROCESS"}},c={},l=[{value:"RFC Content",id:"rfc-content",level:2},{value:"Table of Contents",id:"table-of-contents",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requests-for-comments"},"Requests for Comments"),(0,o.kt)("p",null,"A Request for Comments (RFC) is a record of discussion on an open-ended topic\nrelated to the design and implementation of the Cosmos SDK, for which no\nimmediate decision is required."),(0,o.kt)("p",null,"The purpose of an RFC is to serve as a historical record of a high-level\ndiscussion that might otherwise only be recorded in an ad-hoc way (for example,\nvia gists or Google docs) that are difficult to discover for someone after the\nfact. An RFC ",(0,o.kt)("em",{parentName:"p"},"may")," give rise to more specific architectural ",(0,o.kt)("em",{parentName:"p"},"decisions")," for\nthe Cosmos SDK, but those decisions must be recorded separately in\n",(0,o.kt)("a",{parentName:"p",href:"../architecture/"},"Architecture Decision Records (ADR)"),"."),(0,o.kt)("p",null,"As a rule of thumb, if you can articulate a specific question that needs to be\nanswered, write an ADR. If you need to explore the topic and get input from\nothers to know what questions need to be answered, an RFC may be appropriate."),(0,o.kt)("h2",{id:"rfc-content"},"RFC Content"),(0,o.kt)("p",null,"An RFC should provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"changelog"),", documenting when and how the RFC has changed."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"abstract"),", briefly summarizing the topic so the reader can quickly tell\nwhether it is relevant to their interest."),(0,o.kt)("li",{parentName:"ul"},"Any ",(0,o.kt)("strong",{parentName:"li"},"background")," a reader will need to understand and participate in the\nsubstance of the discussion (links to other documents are fine here)."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"discussion"),", the primary content of the document.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/main/rfc/rfc-template"},"rfc-template.md")," file includes placeholders for these\nsections."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/rfc/rfc-002-zero-copy-encoding"},"RFC-002: Zero Copy Encoding"))))}u.isMDXComponent=!0}}]);
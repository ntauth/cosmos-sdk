"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[2155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=o,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const i={},r="ADR 024: Coin Metadata",s={unversionedId:"architecture/adr-024-coin-metadata",id:"architecture/adr-024-coin-metadata",title:"ADR 024: Coin Metadata",description:"Changelog",source:"@site/docs/architecture/adr-024-coin-metadata.md",sourceDirName:"architecture",slug:"/architecture/adr-024-coin-metadata",permalink:"/main/architecture/adr-024-coin-metadata",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 023: Protocol Buffer Naming and Versioning Conventions",permalink:"/main/architecture/adr-023-protobuf-naming"},next:{title:"ADR 027: Deterministic Protobuf Serialization",permalink:"/main/architecture/adr-027-deterministic-protobuf-serialization"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Future Work",id:"future-work",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-024-coin-metadata"},"ADR 024: Coin Metadata"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"05/19/2020: Initial draft")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"ACCEPTED"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Assets in the Cosmos SDK are represented via a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coins")," type that consists of an ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"denom"),",\nwhere the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," can be any arbitrarily large or small value. In addition, the Cosmos SDK uses an\naccount-based model where there are two types of primary accounts -- basic accounts and module accounts.\nAll account types have a set of balances that are composed of ",(0,o.kt)("inlineCode",{parentName:"p"},"Coins"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," module keeps\ntrack of all balances for all accounts and also keeps track of the total supply of balances in an\napplication."),(0,o.kt)("p",null,"With regards to a balance ",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),", the Cosmos SDK assumes a static and fixed unit of denomination,\nregardless of the denomination itself. In other words, clients and apps built atop a Cosmos-SDK-based\nchain may choose to define and use arbitrary units of denomination to provide a richer UX, however, by\nthe time a tx or operation reaches the Cosmos SDK state machine, the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," is treated as a single\nunit. For example, for the Cosmos Hub (Gaia), clients assume 1 ATOM = 10^6 uatom, and so all txs and\noperations in the Cosmos SDK work off of units of 10^6."),(0,o.kt)("p",null,"This clearly provides a poor and limited UX especially as interoperability of networks increases and\nas a result the total amount of asset types increases. We propose to have ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," additionally keep\ntrack of metadata per ",(0,o.kt)("inlineCode",{parentName:"p"},"denom")," in order to help clients, wallet providers, and explorers improve their\nUX and remove the requirement for making any assumptions on the unit of denomination."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," module will be updated to store and index metadata by ",(0,o.kt)("inlineCode",{parentName:"p"},"denom"),', specifically the "base" or\nsmallest unit -- the unit the Cosmos SDK state-machine works with.'),(0,o.kt)("p",null,"Metadata may also include a non-zero length list of denominations. Each entry contains the name of\nthe denomination ",(0,o.kt)("inlineCode",{parentName:"p"},"denom"),", the exponent to the base and a list of aliases. An entry is to be\ninterpreted as ",(0,o.kt)("inlineCode",{parentName:"p"},"1 denom = 10^exponent base_denom")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ETH = 10^18 wei")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1 uatom = 10^0 uatom"),")."),(0,o.kt)("p",null,"There are two denominations that are of high importance for clients: the ",(0,o.kt)("inlineCode",{parentName:"p"},"base"),", which is the smallest\npossible unit and the ",(0,o.kt)("inlineCode",{parentName:"p"},"display"),", which is the unit that is commonly referred to in human communication\nand on exchanges. The values in those fields link to an entry in the list of denominations."),(0,o.kt)("p",null,"The list in ",(0,o.kt)("inlineCode",{parentName:"p"},"denom_units")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," entry may be changed via governance."),(0,o.kt)("p",null,"As a result, we can define the type as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message DenomUnit {\n  string denom    = 1;\n  uint32 exponent = 2;  \n  repeated string aliases = 3;\n}\n\nmessage Metadata {\n  string description = 1;\n  repeated DenomUnit denom_units = 2;\n  string base = 3;\n  string display = 4;\n}\n")),(0,o.kt)("p",null,"As an example, the ATOM's metadata can be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "atom",\n  "description": "The native staking token of the Cosmos Hub.",\n  "denom_units": [\n    {\n      "denom": "uatom",\n      "exponent": 0,\n      "aliases": [\n        "microatom"\n      ],\n    },\n    {\n      "denom": "matom",\n      "exponent": 3,\n      "aliases": [\n        "milliatom"\n      ]\n    },\n    {\n      "denom": "atom",\n      "exponent": 6,\n    }\n  ],\n  "base": "uatom",\n  "display": "atom",\n}\n')),(0,o.kt)("p",null,"Given the above metadata, a client may infer the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4.3atom = 4.3 * (10^6) = 4,300,000uatom"),(0,o.kt)("li",{parentName:"ul"},'The string "atom" can be used as a display name in a list of tokens.'),(0,o.kt)("li",{parentName:"ul"},"The balance 4300000 can be displayed as 4,300,000uatom or 4,300matom or 4.3atom.\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"display")," denomination 4.3atom is a good default if the authors of the client don't make\nan explicit decision to choose a different representation.")),(0,o.kt)("p",null,"A client should be able to query for metadata by denom both via the CLI and REST interfaces. In\naddition, we will add handlers to these interfaces to convert from any unit to another given unit,\nas the base framework for this already exists in the Cosmos SDK."),(0,o.kt)("p",null,"Finally, we need to ensure metadata exists in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GenesisState")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/bank")," module which is also\nindexed by the base ",(0,o.kt)("inlineCode",{parentName:"p"},"denom"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type GenesisState struct {\n  SendEnabled   bool        `json:"send_enabled" yaml:"send_enabled"`\n  Balances      []Balance   `json:"balances" yaml:"balances"`\n  Supply        sdk.Coins   `json:"supply" yaml:"supply"`\n  DenomMetadata []Metadata  `json:"denom_metadata" yaml:"denom_metadata"`\n}\n')),(0,o.kt)("h2",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"In order for clients to avoid having to convert assets to the base denomination -- either manually or\nvia an endpoint, we may consider supporting automatic conversion of a given unit input."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provides clients, wallet providers and block explorers with additional data on\nasset denomination to improve UX and remove any need to make assumptions on\ndenomination units.")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A small amount of required additional storage in the ",(0,o.kt)("inlineCode",{parentName:"li"},"x/bank")," module. The amount\nof additional storage should be minimal as the amount of total assets should not\nbe large.")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[5462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},l="x/nft",o={unversionedId:"modules/nft/README",id:"modules/nft/README",title:"x/nft",description:"Contents",source:"@site/docs/modules/nft/README.md",sourceDirName:"modules/nft",slug:"/modules/nft/",permalink:"/main/modules/nft/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"x/mint",permalink:"/main/modules/mint/"},next:{title:"x/params",permalink:"/main/modules/params/"}},s={},p=[{value:"Contents",id:"contents",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Class",id:"class",level:3},{value:"NFT",id:"nft",level:3},{value:"State",id:"state",level:2},{value:"Class",id:"class-1",level:3},{value:"NFT",id:"nft-1",level:3},{value:"NFTOfClassByOwner",id:"nftofclassbyowner",level:3},{value:"Owner",id:"owner",level:3},{value:"TotalSupply",id:"totalsupply",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgSend",id:"msgsend",level:3},{value:"Events",id:"events",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xnft"},(0,i.kt)("inlineCode",{parentName:"h1"},"x/nft")),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"x/nft")," is an implementation of a Cosmos SDK module, per ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 43"),", that allows you to create nft classification, create nft, transfer nft, update nft, and support various queries by integrating the module. It is fully compatible with the ERC721 specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#class"},"Class")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nft"},"NFT")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#state"},"State"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#class-1"},"Class")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nft-1"},"NFT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nftofclassbyowner"},"NFTOfClassByOwner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#owner"},"Owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#totalsupply"},"TotalSupply")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#messages"},"Messages"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#msgsend"},"MsgSend")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#events"},"Events"))),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"class"},"Class"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"x/nft")," module defines a struct ",(0,i.kt)("inlineCode",{parentName:"p"},"Class")," to describe the common characteristics of a class of nft, under this class, you can create a variety of nft, which is equivalent to an erc721 contract for Ethereum. The design is defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 043"),"."),(0,i.kt)("h3",{id:"nft"},"NFT"),(0,i.kt)("p",null,"The full name of NFT is Non-Fungible Tokens. Because of the irreplaceable nature of NFT, it means that it can be used to represent unique things. The nft implemented by this module is fully compatible with Ethereum ERC721 standard."),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("h3",{id:"class-1"},"Class"),(0,i.kt)("p",null,"Class is mainly composed of ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri_hash"),",",(0,i.kt)("inlineCode",{parentName:"p"},"data")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is the unique identifier of the class, similar to the Ethereum ERC721 contract address, the others are optional."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x01 | classID | -> ProtocolBuffer(Class)"))),(0,i.kt)("h3",{id:"nft-1"},"NFT"),(0,i.kt)("p",null,"NFT is mainly composed of ",(0,i.kt)("inlineCode",{parentName:"p"},"class_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uri_hash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),". Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"class_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," are two-tuples that identify the uniqueness of nft, ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uri_hash")," is optional, which identifies the off-chain storage location of the nft, and ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is an Any type. Use Any chain of ",(0,i.kt)("inlineCode",{parentName:"p"},"x/nft")," modules can be customized by extending this field"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NFT: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x02 | classID | 0x00 | nftID |-> ProtocolBuffer(NFT)"))),(0,i.kt)("h3",{id:"nftofclassbyowner"},"NFTOfClassByOwner"),(0,i.kt)("p",null,"NFTOfClassByOwner is mainly to realize the function of querying all nfts using classID and owner, without other redundant functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NFTOfClassByOwner: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x03 | owner | 0x00 | classID | 0x00 | nftID |-> 0x01"))),(0,i.kt)("h3",{id:"owner"},"Owner"),(0,i.kt)("p",null,"Since there is no extra field in NFT to indicate the owner of nft, an additional key-value pair is used to save the ownership of nft. With the transfer of nft, the key-value pair is updated synchronously."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OwnerKey: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x04 | classID | 0x00  | nftID |-> owner"))),(0,i.kt)("h3",{id:"totalsupply"},"TotalSupply"),(0,i.kt)("p",null,"TotalSupply is responsible for tracking the number of all nfts under a certain class. Mint operation is performed under the changed class, supply increases by one, burn operation, and supply decreases by one."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OwnerKey: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x05 | classID |-> totalSupply"))),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("p",null,"In this section we describe the processing of messages for the NFT module."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The validation of ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NftID")," is left to the app developer.",(0,i.kt)("br",{parentName:"p"}),"\n","The SDK does not provide any validation for these fields.")),(0,i.kt)("h3",{id:"msgsend"},"MsgSend"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgSend")," message to transfer the ownership of nft. This is a function provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"x/nft")," module. Of course, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," method to implement your own transfer logic, but you need to pay extra attention to the transfer permissions."),(0,i.kt)("p",null,"The message handling should fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"provided ",(0,i.kt)("inlineCode",{parentName:"li"},"ClassID")," does not exist."),(0,i.kt)("li",{parentName:"ul"},"provided ",(0,i.kt)("inlineCode",{parentName:"li"},"Id")," does not exist."),(0,i.kt)("li",{parentName:"ul"},"provided ",(0,i.kt)("inlineCode",{parentName:"li"},"Sender")," does not the owner of nft.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The nft module emits proto events defined in ",(0,i.kt)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.nft.v1beta1"},"the Protobuf reference"),"."))}u.isMDXComponent=!0}}]);
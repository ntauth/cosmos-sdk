"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:1},o="x/feegrant",i={unversionedId:"modules/feegrant/README",id:"version-v0.50/modules/feegrant/README",title:"x/feegrant",description:"Abstract",source:"@site/versioned_docs/version-v0.50/modules/feegrant/README.md",sourceDirName:"modules/feegrant",slug:"/modules/feegrant/",permalink:"/v0.50/modules/feegrant/",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"x/evidence",permalink:"/v0.50/modules/evidence/"},next:{title:"x/gov",permalink:"/v0.50/modules/gov/"}},s={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Grant",id:"grant",level:3},{value:"Fee Allowance types",id:"fee-allowance-types",level:3},{value:"BasicAllowance",id:"basicallowance",level:3},{value:"PeriodicAllowance",id:"periodicallowance",level:3},{value:"AllowedMsgAllowance",id:"allowedmsgallowance",level:3},{value:"FeeGranter flag",id:"feegranter-flag",level:3},{value:"Granted Fee Deductions",id:"granted-fee-deductions",level:3},{value:"Gas",id:"gas",level:3},{value:"Pruning",id:"pruning",level:3},{value:"State",id:"state",level:2},{value:"FeeAllowance",id:"feeallowance",level:3},{value:"FeeAllowanceQueue",id:"feeallowancequeue",level:3},{value:"Messages",id:"messages",level:2},{value:"Msg/GrantAllowance",id:"msggrantallowance",level:3},{value:"Msg/RevokeAllowance",id:"msgrevokeallowance",level:3},{value:"Events",id:"events",level:2},{value:"Msg Server",id:"msg-server",level:2},{value:"MsgGrantAllowance",id:"msggrantallowance-1",level:3},{value:"MsgRevokeAllowance",id:"msgrevokeallowance-1",level:3},{value:"Exec fee allowance",id:"exec-fee-allowance",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"grant",id:"grant-1",level:5},{value:"grants",id:"grants",level:5},{value:"Transactions",id:"transactions",level:4},{value:"grant",id:"grant-2",level:5},{value:"revoke",id:"revoke",level:5},{value:"gRPC",id:"grpc",level:3},{value:"Allowance",id:"allowance",level:4},{value:"Allowances",id:"allowances",level:4}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xfeegrant"},(0,l.kt)("inlineCode",{parentName:"h1"},"x/feegrant")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"This document specifies the fee grant module. For the full ADR, please see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-029-fee-grant-module.md"},"Fee Grant ADR-029"),"."),(0,l.kt)("p",null,"This module allows accounts to grant fee allowances and to use fees from their accounts. Grantees can execute any transaction without the need to maintain sufficient fees."),(0,l.kt)("h2",{id:"contents"},"Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#concepts"},"Concepts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#state"},"State"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#feeallowance"},"FeeAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#feeallowancequeue"},"FeeAllowanceQueue")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#messages"},"Messages"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#msggrantallowance"},"Msg/GrantAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#msgrevokeallowance"},"Msg/RevokeAllowance")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#events"},"Events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#msg-server"},"Msg Server"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#msggrantallowance-1"},"MsgGrantAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#msgrevokeallowance-1"},"MsgRevokeAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#exec-fee-allowance"},"Exec fee allowance")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client"},"Client"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cli"},"CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#grpc"},"gRPC"))))),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("h3",{id:"grant"},"Grant"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Grant")," is stored in the KVStore to record a grant with full context. Every grant will contain ",(0,l.kt)("inlineCode",{parentName:"p"},"granter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," and what kind of ",(0,l.kt)("inlineCode",{parentName:"p"},"allowance")," is granted. ",(0,l.kt)("inlineCode",{parentName:"p"},"granter")," is an account address who is giving permission to ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," (the beneficiary account address) to pay for some or all of ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee"),"'s transaction fees. ",(0,l.kt)("inlineCode",{parentName:"p"},"allowance")," defines what kind of fee allowance (",(0,l.kt)("inlineCode",{parentName:"p"},"BasicAllowance")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"PeriodicAllowance"),", see below) is granted to ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"allowance")," accepts an interface which implements ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeAllowanceI"),", encoded as ",(0,l.kt)("inlineCode",{parentName:"p"},"Any")," type. There can be only one existing fee grant allowed for a ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"granter"),", self grants are not allowed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/feegrant.proto#L83-L93\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FeeAllowanceI")," looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/feegrant/fees.go#L9-L32\n")),(0,l.kt)("h3",{id:"fee-allowance-types"},"Fee Allowance types"),(0,l.kt)("p",null,"There are two types of fee allowances present at the moment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BasicAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PeriodicAllowance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AllowedMsgAllowance"))),(0,l.kt)("h3",{id:"basicallowance"},"BasicAllowance"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BasicAllowance")," is permission for ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," to use fee from a ",(0,l.kt)("inlineCode",{parentName:"p"},"granter"),"'s account. If any of the ",(0,l.kt)("inlineCode",{parentName:"p"},"spend_limit")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"expiration")," reaches its limit, the grant will be removed from the state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/feegrant.proto#L15-L28\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"spend_limit")," is the limit of coins that are allowed to be used from the ",(0,l.kt)("inlineCode",{parentName:"p"},"granter")," account. If it is empty, it assumes there's no spend limit, ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," can use any number of available coins from ",(0,l.kt)("inlineCode",{parentName:"p"},"granter")," account address before the expiration.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"expiration")," specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When a grant is created with empty values for ",(0,l.kt)("inlineCode",{parentName:"p"},"spend_limit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"expiration"),", it is still a valid grant. It won't restrict the ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," to use any number of coins from ",(0,l.kt)("inlineCode",{parentName:"p"},"granter")," and it won't have any expiration. The only way to restrict the ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," is by revoking the grant."))),(0,l.kt)("h3",{id:"periodicallowance"},"PeriodicAllowance"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PeriodicAllowance")," is a repeating fee allowance for the mentioned period, we can mention when the grant can expire as well as when a period can reset. We can also define the maximum number of coins that can be used in a mentioned period of time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/feegrant.proto#L34-L68\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"basic")," is the instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"BasicAllowance")," which is optional for periodic fee allowance. If empty, the grant will have no ",(0,l.kt)("inlineCode",{parentName:"p"},"expiration")," and no ",(0,l.kt)("inlineCode",{parentName:"p"},"spend_limit"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"period")," is the specific period of time, after each period passes, ",(0,l.kt)("inlineCode",{parentName:"p"},"period_can_spend")," will be reset.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"period_spend_limit")," specifies the maximum number of coins that can be spent in the period.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"period_can_spend")," is the number of coins left to be spent before the period_reset time.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"period_reset")," keeps track of when a next period reset should happen."))),(0,l.kt)("h3",{id:"allowedmsgallowance"},"AllowedMsgAllowance"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AllowedMsgAllowance")," is a fee allowance, it can be any of ",(0,l.kt)("inlineCode",{parentName:"p"},"BasicFeeAllowance"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PeriodicAllowance")," but restricted only to the allowed messages mentioned by the granter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/feegrant.proto#L70-L81\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allowance")," is either ",(0,l.kt)("inlineCode",{parentName:"p"},"BasicAllowance")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"PeriodicAllowance"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allowed_messages")," is array of messages allowed to execute the given allowance."))),(0,l.kt)("h3",{id:"feegranter-flag"},"FeeGranter flag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"feegrant")," module introduces a ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeGranter")," flag for CLI for the sake of executing transactions with fee granter. When this flag is set, ",(0,l.kt)("inlineCode",{parentName:"p"},"clientCtx")," will append the granter account address for transactions generated through CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/cmd.go#L249-L260\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx/tx.go#L109-L109\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/tx/builder.go#L275-L284\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L203-L224\n")),(0,l.kt)("p",null,"Example cmd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'./simd tx gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --from validator-key --fee-granter=cosmos1xh44hxt7spr67hqaa7nyx5gnutrz5fraw6grxn --chain-id=testnet --fees="10stake"\n')),(0,l.kt)("h3",{id:"granted-fee-deductions"},"Granted Fee Deductions"),(0,l.kt)("p",null,"Fees are deducted from grants in the ",(0,l.kt)("inlineCode",{parentName:"p"},"x/auth")," ante handler. To learn more about how ante handlers work, read the ",(0,l.kt)("a",{parentName:"p",href:"/v0.50/modules/auth/#antehandlers"},"Auth Module AnteHandlers Guide"),"."),(0,l.kt)("h3",{id:"gas"},"Gas"),(0,l.kt)("p",null,"In order to prevent DoS attacks, using a filtered ",(0,l.kt)("inlineCode",{parentName:"p"},"x/feegrant")," incurs gas. The SDK must assure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee"),"'s transactions all conform to the filter set by the ",(0,l.kt)("inlineCode",{parentName:"p"},"granter"),". The SDK does this by iterating over the allowed messages in the filter and charging 10 gas per filtered message. The SDK will then iterate over the messages being sent by the ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," to ensure the messages adhere to the filter, also charging 10 gas per message. The SDK will stop iterating and fail the transaction if it finds a message that does not conform to the filter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WARNING"),": The gas is charged against the granted allowance. Ensure your messages conform to the filter, if any, before sending transactions using your allowance."),(0,l.kt)("h3",{id:"pruning"},"Pruning"),(0,l.kt)("p",null,"A queue in the state maintained with the prefix of expiration of the grants and checks them on EndBlock with the current block time for every block to prune."),(0,l.kt)("h2",{id:"state"},"State"),(0,l.kt)("h3",{id:"feeallowance"},"FeeAllowance"),(0,l.kt)("p",null,"Fee Allowances are identified by combining ",(0,l.kt)("inlineCode",{parentName:"p"},"Grantee")," (the account address of fee allowance grantee) with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Granter")," (the account address of fee allowance granter)."),(0,l.kt)("p",null,"Fee allowance grants are stored in the state as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Grant: ",(0,l.kt)("inlineCode",{parentName:"li"},"0x00 | grantee_addr_len (1 byte) | grantee_addr_bytes |  granter_addr_len (1 byte) | granter_addr_bytes -> ProtocolBuffer(Grant)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/feegrant/feegrant.pb.go#L222-L230\n")),(0,l.kt)("h3",{id:"feeallowancequeue"},"FeeAllowanceQueue"),(0,l.kt)("p",null,"Fee Allowances queue items are identified by combining the ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeAllowancePrefixQueue")," (i.e., 0x01), ",(0,l.kt)("inlineCode",{parentName:"p"},"expiration"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"grantee")," (the account address of fee allowance grantee), ",(0,l.kt)("inlineCode",{parentName:"p"},"granter")," (the account address of fee allowance granter). Endblocker checks ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeAllowanceQueue")," state for the expired grants and prunes them from  ",(0,l.kt)("inlineCode",{parentName:"p"},"FeeAllowance")," if there are any found."),(0,l.kt)("p",null,"Fee allowance queue keys are stored in the state as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Grant: ",(0,l.kt)("inlineCode",{parentName:"li"},"0x01 | expiration_bytes | grantee_addr_len (1 byte) | grantee_addr_bytes |  granter_addr_len (1 byte) | granter_addr_bytes -> EmptyBytes"))),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"msggrantallowance"},"Msg/GrantAllowance"),(0,l.kt)("p",null,"A fee allowance grant will be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgGrantAllowance")," message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/tx.proto#L25-L39\n")),(0,l.kt)("h3",{id:"msgrevokeallowance"},"Msg/RevokeAllowance"),(0,l.kt)("p",null,"An allowed grant fee allowance can be removed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgRevokeAllowance")," message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/feegrant/v1beta1/tx.proto#L41-L54\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The feegrant module emits the following events:"),(0,l.kt)("h2",{id:"msg-server"},"Msg Server"),(0,l.kt)("h3",{id:"msggrantallowance-1"},"MsgGrantAllowance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"set_feegrant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"granter"),(0,l.kt)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"grantee"),(0,l.kt)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.kt)("h3",{id:"msgrevokeallowance-1"},"MsgRevokeAllowance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"revoke_feegrant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"granter"),(0,l.kt)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"grantee"),(0,l.kt)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.kt)("h3",{id:"exec-fee-allowance"},"Exec fee allowance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"use_feegrant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"granter"),(0,l.kt)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"grantee"),(0,l.kt)("td",{parentName:"tr",align:null},"{granteeAddress}")))),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("h3",{id:"cli"},"CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"feegrant")," module using the CLI."),(0,l.kt)("h4",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"feegrant")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant --help\n")),(0,l.kt)("h5",{id:"grant-1"},"grant"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"grant")," command allows users to query a grant for a given granter-grantee pair."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grant [granter] [grantee] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grant cosmos1.. cosmos1..\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"allowance:\n  '@type': /cosmos.feegrant.v1beta1.BasicAllowance\n  expiration: null\n  spend_limit:\n  - amount: \"100\"\n    denom: stake\ngrantee: cosmos1..\ngranter: cosmos1..\n")),(0,l.kt)("h5",{id:"grants"},"grants"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"grants")," command allows users to query all grants for a given grantee."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grants [grantee] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query feegrant grants cosmos1..\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'allowances:\n- allowance:\n    \'@type\': /cosmos.feegrant.v1beta1.BasicAllowance\n    expiration: null\n    spend_limit:\n    - amount: "100"\n      denom: stake\n  grantee: cosmos1..\n  granter: cosmos1..\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.kt)("h4",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"feegrant")," module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant --help\n")),(0,l.kt)("h5",{id:"grant-2"},"grant"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"grant")," command allows users to grant fee allowances to another account. The fee allowance can have an expiration date, a total spend limit, and/or a periodic spend limit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant [granter] [grantee] [flags]\n")),(0,l.kt)("p",null,"Example (one-time spend limit):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant cosmos1.. cosmos1.. --spend-limit 100stake\n")),(0,l.kt)("p",null,"Example (periodic spend limit):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant grant cosmos1.. cosmos1.. --period 3600 --period-limit 10stake\n")),(0,l.kt)("h5",{id:"revoke"},"revoke"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"revoke")," command allows users to revoke a granted fee allowance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant revoke [granter] [grantee] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx feegrant revoke cosmos1.. cosmos1..\n")),(0,l.kt)("h3",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"feegrant")," module using gRPC endpoints."),(0,l.kt)("h4",{id:"allowance"},"Allowance"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Allowance")," endpoint allows users to query a granted fee allowance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.feegrant.v1beta1.Query/Allowance\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"grantee":"cosmos1..","granter":"cosmos1.."}\' \\\n    localhost:9090 \\\n    cosmos.feegrant.v1beta1.Query/Allowance\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowance": {\n    "granter": "cosmos1..",\n    "grantee": "cosmos1..",\n    "allowance": {"@type":"/cosmos.feegrant.v1beta1.BasicAllowance","spendLimit":[{"denom":"stake","amount":"100"}]}\n  }\n}\n')),(0,l.kt)("h4",{id:"allowances"},"Allowances"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Allowances")," endpoint allows users to query all granted fee allowances for a given grantee."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.feegrant.v1beta1.Query/Allowances\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"address":"cosmos1.."}\' \\\n    localhost:9090 \\\n    cosmos.feegrant.v1beta1.Query/Allowances\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowances": [\n    {\n      "granter": "cosmos1..",\n      "grantee": "cosmos1..",\n      "allowance": {"@type":"/cosmos.feegrant.v1beta1.BasicAllowance","spendLimit":[{"denom":"stake","amount":"100"}]}\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')))}m.isMDXComponent=!0}}]);
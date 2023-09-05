"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1141],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(a),g=r,c=s["".concat(d,".").concat(g)]||s[g]||k[g]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},13288:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Telemetry",o={unversionedId:"core/telemetry",id:"core/telemetry",title:"Telemetry",description:"Gather relevant insights about your application and modules with custom metrics and telemetry.",source:"@site/docs/core/09-telemetry.md",sourceDirName:"core",slug:"/core/telemetry",permalink:"/main/core/telemetry",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/main/core/events"},next:{title:"Object-Capability Model",permalink:"/main/core/ocap"}},d={},m=[{value:"Emitting metrics",id:"emitting-metrics",level:2},{value:"Labels",id:"labels",level:2},{value:"Cardinality",id:"cardinality",level:2},{value:"Supported Metrics",id:"supported-metrics",level:2}],p={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"telemetry"},"Telemetry"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Gather relevant insights about your application and modules with custom metrics and telemetry.")),(0,r.kt)("p",null,"The Cosmos SDK enables operators and developers to gain insight into the performance and behavior of\ntheir application through the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," package. To enable telemetrics, set ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry.enabled = true")," in the app.toml config file."),(0,r.kt)("p",null,"The Cosmos SDK currently supports enabling in-memory and prometheus as telemetry sinks. In-memory sink is always attached (when the telemetry is enabled) with 10 second interval and 1 minute retention. This means that metrics will be aggregated over 10 seconds, and metrics will be kept alive for 1 minute."),(0,r.kt)("p",null,"To query active metrics (see retention note above) you have to enable API server (",(0,r.kt)("inlineCode",{parentName:"p"},"api.enabled = true")," in the app.toml). Single API endpoint is exposed: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1317/metrics?format={text|prometheus}"),", the default being ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,r.kt)("h2",{id:"emitting-metrics"},"Emitting metrics"),(0,r.kt)("p",null,"If telemetry is enabled via configuration, a single global metrics collector is registered via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-metrics"},"go-metrics")," library. This allows emitting and collecting\nmetrics through simple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/telemetry/wrapper.go"},"API"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func EndBlocker(ctx sdk.Context, k keeper.Keeper) {\n  defer telemetry.ModuleMeasureSince(types.ModuleName, time.Now(), telemetry.MetricKeyEndBlocker)\n\n  // ...\n}\n")),(0,r.kt)("p",null,"Developers may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," package directly, which provides wrappers around metric APIs\nthat include adding useful labels, or they must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-metrics")," library directly. It is preferable\nto add as much context and adequate dimensionality to metrics as possible, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," package\nis advised. Regardless of the package or method used, the Cosmos SDK supports the following metrics\ntypes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gauges"),(0,r.kt)("li",{parentName:"ul"},"summaries"),(0,r.kt)("li",{parentName:"ul"},"counters")),(0,r.kt)("h2",{id:"labels"},"Labels"),(0,r.kt)("p",null,"Certain components of modules will have their name automatically added as a label (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlock"),").\nOperators may also supply the application with a global set of labels that will be applied to all\nmetrics emitted using the ",(0,r.kt)("inlineCode",{parentName:"p"},"telemetry")," package (e.g. chain-id). Global labels are supplied as a list\nof ","[name, value]"," tuples."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'global-labels = [\n  ["chain_id", "chain-OfXo4V"],\n]\n')),(0,r.kt)("h2",{id:"cardinality"},"Cardinality"),(0,r.kt)("p",null,"Cardinality is key, specifically label and key cardinality. Cardinality is how many unique values of\nsomething there are. So there is naturally a tradeoff between granularity and how much stress is put\non the telemetry sink in terms of indexing, scrape, and query performance."),(0,r.kt)("p",null,"Developers should take care to support metrics with enough dimensionality and granularity to be\nuseful, but not increase the cardinality beyond the sink's limits. A general rule of thumb is to not\nexceed a cardinality of 10."),(0,r.kt)("p",null,"Consider the following examples with enough granularity and adequate cardinality:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"begin/end blocker time"),(0,r.kt)("li",{parentName:"ul"},"tx gas used"),(0,r.kt)("li",{parentName:"ul"},"block gas used"),(0,r.kt)("li",{parentName:"ul"},"amount of tokens minted"),(0,r.kt)("li",{parentName:"ul"},"amount of accounts created")),(0,r.kt)("p",null,"The following examples expose too much cardinality and may not even prove to be useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transfers between accounts with amount"),(0,r.kt)("li",{parentName:"ul"},"voting/deposit amount from unique addresses")),(0,r.kt)("h2",{id:"supported-metrics"},"Supported Metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_count")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of txs processed via ",(0,r.kt)("inlineCode",{parentName:"td"},"DeliverTx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_successful")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of successful txs processed via ",(0,r.kt)("inlineCode",{parentName:"td"},"DeliverTx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_failed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of failed txs processed via ",(0,r.kt)("inlineCode",{parentName:"td"},"DeliverTx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_gas_used")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of gas used by a tx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gas"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_gas_wanted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of gas requested by a tx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gas"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_send")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens sent in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgSend")," (per denom)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_withdraw_reward")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens withdrawn in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgWithdrawDelegatorReward")," (per denom)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_withdraw_commission")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens withdrawn in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgWithdrawValidatorCommission")," (per denom)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_delegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens delegated in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgDelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_begin_unbonding")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens undelegated in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgUndelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_begin_begin_redelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens redelegated in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgBeginRedelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_ibc_transfer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens transferred via IBC in a ",(0,r.kt)("inlineCode",{parentName:"td"},"MsgTransfer")," (source or sink chain)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_transfer_packet_receive")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total amount of tokens received in a ",(0,r.kt)("inlineCode",{parentName:"td"},"FungibleTokenPacketData")," (source or sink chain)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gauge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"new_account")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of new accounts created"),(0,r.kt)("td",{parentName:"tr",align:"left"},"account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gov_proposal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of governance proposals"),(0,r.kt)("td",{parentName:"tr",align:"left"},"proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gov_vote")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of governance votes for a proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"vote"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gov_deposit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of governance deposits for a proposal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"staking_delegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of delegations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"delegation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"staking_undelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of undelegations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"undelegation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"staking_redelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of redelegations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"redelegation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_transfer_send")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IBC transfers sent from a chain (source or sink)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"transfer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_transfer_receive")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IBC transfers received to a chain (source or sink)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"transfer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_client_create")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of clients created"),(0,r.kt)("td",{parentName:"tr",align:"left"},"create"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_client_update")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of client updates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"update"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_client_upgrade")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of client upgrades"),(0,r.kt)("td",{parentName:"tr",align:"left"},"upgrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_client_misbehaviour")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of client misbehaviours"),(0,r.kt)("td",{parentName:"tr",align:"left"},"misbehaviour"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_connection_open-init")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of connection ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenInit")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_connection_open-try")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of connection ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenTry")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_connection_open-ack")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of connection ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenAck")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_connection_open-confirm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of connection ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenConfirm")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_open-init")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenInit")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_open-try")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenTry")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_open-ack")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenAck")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_open-confirm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenConfirm")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_close-init")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"CloseInit")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_channel_close-confirm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of channel ",(0,r.kt)("inlineCode",{parentName:"td"},"CloseConfirm")," handshakes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handshake"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_ibc_recv_packet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IBC packets received"),(0,r.kt)("td",{parentName:"tr",align:"left"},"packet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tx_msg_ibc_acknowledge_packet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IBC packets acknowledged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"acknowledgement"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ibc_timeout_packet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of IBC timeout packets"),(0,r.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"counter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_get")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Get")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_set")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Set")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_has")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Has")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_delete")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Delete")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_commit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Commit")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"store_iavl_query")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration of an IAVL ",(0,r.kt)("inlineCode",{parentName:"td"},"Store#Query")," call"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"summary")))))}k.isMDXComponent=!0}}]);
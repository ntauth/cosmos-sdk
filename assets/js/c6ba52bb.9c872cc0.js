"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=d(n),g=r,c=h["".concat(l,".").concat(g)]||h[g]||u[g]||o;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Application Upgrade",p={unversionedId:"building-apps/app-upgrade",id:"version-v0.50/building-apps/app-upgrade",title:"Application Upgrade",description:"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the SDK migrations documentation.",source:"@site/versioned_docs/version-v0.50/building-apps/03-app-upgrade.md",sourceDirName:"building-apps",slug:"/building-apps/app-upgrade",permalink:"/v0.50/building-apps/app-upgrade",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Application Mempool",permalink:"/v0.50/building-apps/app-mempool"},next:{title:"Vote Extensions",permalink:"/v0.50/building-apps/vote-extensions"}},l={},d=[{value:"General Workflow",id:"general-workflow",level:2},{value:"Integrating With An App",id:"integrating-with-an-app",level:2},{value:"Performing Upgrades",id:"performing-upgrades",level:2},{value:"Halt Behavior",id:"halt-behavior",level:2},{value:"Automation",id:"automation",level:2},{value:"Canceling Upgrades",id:"canceling-upgrades",level:2},{value:"Pre-Upgrade Handling",id:"pre-upgrade-handling",level:2},{value:"Sample",id:"sample",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-upgrade"},"Application Upgrade"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/migrations/intro"},"SDK migrations documentation"),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is currently incomplete. Track the progress of this document ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/11504"},"here"),".")),(0,r.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/upgrade"},(0,r.kt)("inlineCode",{parentName:"a"},"x/upgrade")," Documentation")))),(0,r.kt)("h2",{id:"general-workflow"},"General Workflow"),(0,r.kt)("p",null,'Let\'s assume we are running v0.38.0 of our software in our testnet and want to upgrade to v0.40.0.\nHow would this look in practice? First of all, we want to finalize the v0.40.0 release candidate\nand there install a specially named upgrade handler (eg. "testnet-v2" or even "v0.40.0"). An upgrade\nhandler should be defined in a new version of the software to define what migrations\nto run to migrate from the older version of the software. Naturally, this is app-specific rather\nthan module specific, and  must be defined in ',(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),", even if it imports logic from various\nmodules to perform the actions. You can register them with ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeKeeper.SetUpgradeHandler"),"\nduring the app initialization (before starting the abci server), and they serve not only to\nperform a migration, but also to identify if this is the old or new version (eg. presence of\na handler registered for the named upgrade)."),(0,r.kt)("p",null,"Once the release candidate along with an appropriate upgrade handler is frozen,\nwe can have a governance vote to approve this upgrade at some future block height (e.g. 200000).\nThis is known as an upgrade.Plan. The v0.38.0 code will not know of this handler, but will\ncontinue to run until block 200000, when the plan kicks in at ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlock"),". It will check\nfor existence of the handler, and finding it missing, know that it is running the obsolete software,\nand gracefully exit."),(0,r.kt)("p",null,"Generally the application binary will restart on exit, but then will execute this BeginBlocker\nagain and exit, causing a restart loop. Either the operator can manually install the new software,\nor you can make use of an external watcher daemon to possibly download and then switch binaries,\nalso potentially doing a backup. The SDK tool for doing such, is called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/cosmovisor"},"Cosmovisor"),"."),(0,r.kt)("p",null,'When the binary restarts with the upgraded version (here v0.40.0), it will detect we have registered the\n"testnet-v2" upgrade handler in the code, and realize it is the new version. It then will run the upgrade handler\nand ',(0,r.kt)("em",{parentName:"p"},"migrate the database in-place"),". Once finished, it marks the upgrade as done, and continues processing\nthe rest of the block as normal. Once 2/3 of the voting power has upgraded, the blockchain will immediately\nresume the consensus mechanism. If the majority of operators add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"do-upgrade")," script, this should\nbe a matter of minutes and not even require them to be awake at that time."),(0,r.kt)("h2",{id:"integrating-with-an-app"},"Integrating With An App"),(0,r.kt)("p",null,"Setup an upgrade Keeper for the app and then define a ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," that calls the upgrade\nkeeper's BeginBlocker method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"}," func (app *myApp) BeginBlocker(ctx sdk.Context, req abci.RequestBeginBlock) (abci.ResponseBeginBlock, error) {\n  app.upgradeKeeper.BeginBlocker(ctx, req)\n  return abci.ResponseBeginBlock{}, nil\n }\n")),(0,r.kt)("p",null,"The app must then integrate the upgrade keeper with its governance module as appropriate. The governance module\nshould call ScheduleUpgrade to schedule an upgrade and ClearUpgradePlan to cancel a pending upgrade."),(0,r.kt)("h2",{id:"performing-upgrades"},"Performing Upgrades"),(0,r.kt)("p",null,'Upgrades can be scheduled at a predefined block height. Once this block height is reached, the\nexisting software will cease to process ABCI messages and a new version with code that handles the upgrade must be deployed.\nAll upgrades are coordinated by a unique upgrade name that cannot be reused on the same blockchain. In order for the upgrade\nmodule to know that the upgrade has been safely applied, a handler with the name of the upgrade must be installed.\nHere is an example handler for an upgrade named "my-fancy-upgrade":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.upgradeKeeper.SetUpgradeHandler("my-fancy-upgrade", func(ctx context.Context, plan upgrade.Plan) {\n // Perform any migrations of the state store needed for this upgrade\n})\n')),(0,r.kt)("p",null,"This upgrade handler performs the dual function of alerting the upgrade module that the named upgrade has been applied,\nas well as providing the opportunity for the upgraded software to perform any necessary state migrations. Both the halt\n(with the old binary) and applying the migration (with the new binary) are enforced in the state machine. Actually\nswitching the binaries is an ops task and not handled inside the sdk / abci app."),(0,r.kt)("p",null,"Here is a sample code to set store migrations with an upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// this configures a no-op upgrade handler for the "my-fancy-upgrade" upgrade\napp.UpgradeKeeper.SetUpgradeHandler("my-fancy-upgrade",  func(ctx context.Context, plan upgrade.Plan) {\n // upgrade changes here\n})\nupgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()\nif err != nil {\n // handle error\n}\nif upgradeInfo.Name == "my-fancy-upgrade" && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n storeUpgrades := store.StoreUpgrades{\n  Renamed: []store.StoreRename{{\n   OldKey: "foo",\n   NewKey: "bar",\n  }},\n  Deleted: []string{},\n }\n // configure store loader that checks if version == upgradeHeight and applies store upgrades\n app.SetStoreLoader(upgrade.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n}\n')),(0,r.kt)("h2",{id:"halt-behavior"},"Halt Behavior"),(0,r.kt)("p",null,"Before halting the ABCI state machine in the BeginBlocker method, the upgrade module will log an error\nthat looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},' UPGRADE "<Name>" NEEDED at height <NNNN>: <Info>\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Info")," are the values of the respective fields on the upgrade Plan."),(0,r.kt)("p",null,"To perform the actual halt of the blockchain, the upgrade keeper simply panics which prevents the ABCI state machine\nfrom proceeding but doesn't actually exit the process. Exiting the process can cause issues for other nodes that start\nto lose connectivity with the exiting nodes, thus this module prefers to just halt but not exit."),(0,r.kt)("h2",{id:"automation"},"Automation"),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/cosmovisor"},"Cosmovisor"),", the tool for automating upgrades."),(0,r.kt)("h2",{id:"canceling-upgrades"},"Canceling Upgrades"),(0,r.kt)("p",null,"There are two ways to cancel a planned upgrade - with on-chain governance or off-chain social consensus.\nFor the first one, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelSoftwareUpgrade")," governance proposal, which can be voted on and will\nremove the scheduled upgrade plan. Of course this requires that the upgrade was known to be a bad idea\nwell before the upgrade itself, to allow time for a vote. If you want to allow such a possibility, you\nshould set the upgrade height to be ",(0,r.kt)("inlineCode",{parentName:"p"},"2 * (votingperiod + depositperiod) + (safety delta)")," from the beginning of\nthe first upgrade proposal. Safety delta is the time available from the success of an upgrade proposal\nand the realization it was a bad idea (due to external testing). You can also start a ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelSoftwareUpgrade"),"\nproposal while the original ",(0,r.kt)("inlineCode",{parentName:"p"},"SoftwareUpgrade")," proposal is still being voted upon, as long as the voting\nperiod ends after the ",(0,r.kt)("inlineCode",{parentName:"p"},"SoftwareUpgrade")," proposal."),(0,r.kt)("p",null,"However, let's assume that we don't realize the upgrade has a bug until shortly before it will occur\n(or while we try it out - hitting some panic in the migration). It would seem the blockchain is stuck,\nbut we need to allow an escape for social consensus to overrule the planned upgrade. To do so, there's\na ",(0,r.kt)("inlineCode",{parentName:"p"},"--unsafe-skip-upgrades")," flag to the start command, which will cause the node to mark the upgrade\nas done upon hitting the planned upgrade height(s), without halting and without actually performing a migration.\nIf over two-thirds run their nodes with this flag on the old binary, it will allow the chain to continue through\nthe upgrade with a manual override. (This must be well-documented for anyone syncing from genesis later on)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<appd> start --unsafe-skip-upgrades <height1> <optional_height_2> ... <optional_height_N>\n")),(0,r.kt)("h2",{id:"pre-upgrade-handling"},"Pre-Upgrade Handling"),(0,r.kt)("p",null,"Cosmovisor supports custom pre-upgrade handling. Use pre-upgrade handling when you need to implement application config changes that are required in the newer version before you perform the upgrade."),(0,r.kt)("p",null,"Using Cosmovisor pre-upgrade handling is optional. If pre-upgrade handling is not implemented, the upgrade continues."),(0,r.kt)("p",null,"For example, make the required new-version changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," settings during the pre-upgrade handling. The pre-upgrade handling process means that the file does not have to be manually updated after the upgrade."),(0,r.kt)("p",null,"Before the application binary is upgraded, Cosmovisor calls a ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command that can  be implemented by the application."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command does not take in any command-line arguments and is expected to terminate with the following exit codes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Exit status code"),(0,r.kt)("th",{parentName:"tr",align:null},"How it is handled in Cosmosvisor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Assumes ",(0,r.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command executed successfully and continues the upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Default exit code when ",(0,r.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command has not been implemented.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. This fails the entire upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"31")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. But the command is retried until exit code ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"30")," are returned.")))),(0,r.kt)("h2",{id:"sample"},"Sample"),(0,r.kt)("p",null,"Here is a sample structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func preUpgradeCommand() *cobra.Command {\n cmd := &cobra.Command{\n  Use:   "pre-upgrade",\n  Short: "Pre-upgrade command",\n        Long: "Pre-upgrade command to implement custom pre-upgrade handling",\n  Run: func(cmd *cobra.Command, args []string) {\n\n   err := HandlePreUpgrade()\n\n   if err != nil {\n    os.Exit(30)\n   }\n\n   os.Exit(0)\n\n  },\n }\n\n return cmd\n}\n')),(0,r.kt)("p",null,"Ensure that the pre-upgrade command has been registered in the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n  // ..\n  preUpgradeCommand(),\n  // ..\n )\n")),(0,r.kt)("p",null,"When not using Cosmovisor, ensure to run ",(0,r.kt)("inlineCode",{parentName:"p"},"<appd> pre-upgrade")," before starting the application binary."))}u.isMDXComponent=!0}}]);
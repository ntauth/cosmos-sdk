"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return n?o.createElement(u,l(l({ref:t},s),{},{components:n})):o.createElement(u,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:1},l="Confix",r={unversionedId:"tooling/confix",id:"version-v0.50/tooling/confix",title:"Confix",description:"Confix is a configuration management tool that allows you to manage your configuration via CLI.",source:"@site/versioned_docs/version-v0.50/tooling/02-confix.md",sourceDirName:"tooling",slug:"/tooling/confix",permalink:"/v0.50/tooling/confix",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cosmovisor",permalink:"/v0.50/tooling/cosmovisor"},next:{title:"Hubl",permalink:"/v0.50/tooling/hubl"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Add Config Command",id:"add-config-command",level:3},{value:"Using Confix Standalone",id:"using-confix-standalone",level:3},{value:"Usage",id:"usage",level:2},{value:"Get",id:"get",level:3},{value:"Set",id:"set",level:3},{value:"Migrate",id:"migrate",level:3},{value:"Diff",id:"diff",level:3},{value:"Maintainer",id:"maintainer",level:3},{value:"Credits",id:"credits",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"confix"},"Confix"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Confix")," is a configuration management tool that allows you to manage your configuration via CLI."),(0,i.kt)("p",null,"It is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/5013bc3f4a6d64dcc2bf02ccc002ebc9881c62e4/docs/rfc/rfc-019-config-version.md"},"CometBFT RFC 019"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"add-config-command"},"Add Config Command"),(0,i.kt)("p",null,"To add the confix tool, it's required to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigCommand")," to your application's root command file (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"<appd>/cmd/root.go"),")."),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"confixCmd")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "cosmossdk.io/tools/confix/cmd"\n')),(0,i.kt)("p",null,"Find the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"initRootCmd(rootCmd, encodingConfig)\n")),(0,i.kt)("p",null,"After that line, add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n    confixcmd.ConfigCommand(),\n)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfixCommand")," function builds the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," root command and is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"confixCmd")," package (",(0,i.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/tools/confix/cmd"),").\nAn implementation example can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"simapp"),"."),(0,i.kt)("p",null,"The command will be available as ",(0,i.kt)("inlineCode",{parentName:"p"},"simd config"),"."),(0,i.kt)("h3",{id:"using-confix-standalone"},"Using Confix Standalone"),(0,i.kt)("p",null,"To use Confix standalone, without having to add it in your application, install it with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go install cosmossdk.io/tools/confix/cmd/confix@latest\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Currently, due to the replace directive in the Confix go.mod, it is not possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"go install"),".\nBuilding from source or importing in an application is required until that replace directive is removed.")),(0,i.kt)("p",null,"Alternatively, for building from source, simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"make confix"),". The binary will be located in ",(0,i.kt)("inlineCode",{parentName:"p"},"tools/confix"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use standalone:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"confix --help\n")),(0,i.kt)("p",null,"Use in simd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"simd config fix --help\n")),(0,i.kt)("h3",{id:"get"},"Get"),(0,i.kt)("p",null,"Get a configuration value, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"simd config get app pruning # gets the value pruning from app.toml\nsimd config get client chain-id # gets the value chain-id from client.toml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"confix get ~/.simapp/config/app.toml pruning # gets the value pruning from app.toml\nconfix get ~/.simapp/config/client.toml chain-id # gets the value chain-id from client.toml\n")),(0,i.kt)("h3",{id:"set"},"Set"),(0,i.kt)("p",null,"Set a configuration value, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'simd config set app pruning "enabled" # sets the value pruning from app.toml\nsimd config set client chain-id "foo-1" # sets the value chain-id from client.toml\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'confix set ~/.simapp/config/app.toml pruning "enabled" # sets the value pruning from app.toml\nconfix set ~/.simapp/config/client.toml chain-id "foo-1" # sets the value chain-id from client.toml\n')),(0,i.kt)("h3",{id:"migrate"},"Migrate"),(0,i.kt)("p",null,"Migrate a configuration file to a new version, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"simd config migrate v0.47 # migrates defaultHome/config/app.toml to the latest v0.47 config\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"confix migrate v0.47 ~/.simapp/config/app.toml # migrate ~/.simapp/config/app.toml to the latest v0.47 config\n")),(0,i.kt)("h3",{id:"diff"},"Diff"),(0,i.kt)("p",null,"Get the diff between a given configuration file and the default configuration file, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"simd config diff v0.47 # gets the diff between defaultHome/config/app.toml and the latest v0.47 config\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"confix diff v0.47 ~/.simapp/config/app.toml # gets the diff between ~/.simapp/config/app.toml and the latest v0.47 config\n")),(0,i.kt)("h3",{id:"maintainer"},"Maintainer"),(0,i.kt)("p",null,"At each SDK modification of the default configuration, add the default SDK config under ",(0,i.kt)("inlineCode",{parentName:"p"},"data/v0.XX-app.toml"),".\nThis allows users to use the tool standalone."),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"This project is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/5013bc3f4a6d64dcc2bf02ccc002ebc9881c62e4/docs/rfc/rfc-019-config-version.md"},"CometBFT RFC 019")," and their own implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.36.x/scripts/confix/confix.go"},"confix"),"."))}m.isMDXComponent=!0}}]);
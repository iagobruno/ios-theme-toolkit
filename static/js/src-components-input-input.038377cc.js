(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Input/Input.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),s=n.n(t),l=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),o=n("./src/index.js");n("./dist/styles.css");function p(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}a.default=function(e){var a=e.components,n=p(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",components:a},s.a.createElement(l.MDXTag,{name:"h1",components:a,props:{id:"input"}},"Input"),s.a.createElement(l.MDXTag,{name:"p",components:a},"To use this component, simply import it into any file and pass the ",s.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#/#props"}},"modifiers")," in the properties."),s.a.createElement(l.MDXTag,{name:"p",components:a},s.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"NOTE: This package does not provide any form of data validation, I recommend you take a look at ",s.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"strong",props:{href:"https://github.com/jaredpalmer/formik"}},"formik"),".")),s.a.createElement(l.MDXTag,{name:"pre",components:a},s.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:""}},"import { Input } from 'ios-theme-toolkit'\n\nexport default () => (\n  <Input value=\"Hello world\" />\n)\n")),s.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"examples"}},"Examples"),s.a.createElement(r.Playground,{__codesandbox:"undefined",__position:0,__code:'<span className="desc">Without filling:</span>\n<Input\n  placeholder="Type your name..."\n  onChange={e => console.log(\'input changed\', e.target.value)}\n/>\n<span className="desc">With fill:</span>\n<Input fill placeholder="Type your email" />\n<span className="desc">Textarea:</span>\n<Input\n  htmlType="textarea"\n  fill\n  block\n  placeholder="Type your text here..."\n  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in vulputate enim. Duis aliquet imperdiet viverra. Suspendisse vestibulum urna eget nisl sollicitudin pulvinar. Suspendisse porta nibh diam, varius accumsan massa sodales sed."\n  style={{ height: 140 }}\n/>\n<span className="desc">Rounded edges:</span>\n<Input fill round placeholder="Input with rounded edges" />\n<span className="desc">Invalid input:</span>\n<Input fill error required defaultValue="Input invalid" />\n<span className="error">Digite um valor v\xe1lido</span>\n<span className="desc">Disabled:</span>\n<Input fill disabled placeholder="Type your new password" />\n<span className="desc">Read-only:</span>\n<Input fill disabled readOnly defaultValue="Read only input" />\n<style>\n  {\n    \'.react-live-preview .desc { display: block; font-weight: bold; margin-top: 20px }\'\n  }\n</style>',__scope:{props:n,Input:o.f}},s.a.createElement("span",{className:"desc"},"Without filling:"),s.a.createElement(o.f,{placeholder:"Type your name...",onChange:function(e){return console.log("input changed",e.target.value)}}),s.a.createElement("span",{className:"desc"},"With fill:"),s.a.createElement(o.f,{fill:!0,placeholder:"Type your email"}),s.a.createElement("span",{className:"desc"},"Textarea:"),s.a.createElement(o.f,{htmlType:"textarea",fill:!0,block:!0,placeholder:"Type your text here...",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in vulputate enim. Duis aliquet imperdiet viverra. Suspendisse vestibulum urna eget nisl sollicitudin pulvinar. Suspendisse porta nibh diam, varius accumsan massa sodales sed.",style:{height:140}}),s.a.createElement("span",{className:"desc"},"Rounded edges:"),s.a.createElement(o.f,{fill:!0,round:!0,placeholder:"Input with rounded edges"}),s.a.createElement("span",{className:"desc"},"Invalid input:"),s.a.createElement(o.f,{fill:!0,error:!0,required:!0,defaultValue:"Input invalid"}),s.a.createElement("span",{className:"error"},"Digite um valor v\xe1lido"),s.a.createElement("span",{className:"desc"},"Disabled:"),s.a.createElement(o.f,{fill:!0,disabled:!0,placeholder:"Type your new password"}),s.a.createElement("span",{className:"desc"},"Read-only:"),s.a.createElement(o.f,{fill:!0,disabled:!0,readOnly:!0,defaultValue:"Read only input"}),s.a.createElement("style",null,".react-live-preview .desc { display: block; font-weight: bold; margin-top: 20px }")),s.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"props"}},"Props"),s.a.createElement(r.PropsTable,{of:o.f}),s.a.createElement(l.MDXTag,{name:"p",components:a},"All the properties which are not listed above will be transferred to the <input",">"," (or <Textarea",">",") tag, so, It accepts all props which native input support."))}}}]);
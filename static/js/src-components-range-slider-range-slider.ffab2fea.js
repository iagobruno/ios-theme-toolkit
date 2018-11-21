(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/RangeSlider/RangeSlider.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),s=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),o=n("./src/index.js");n("./dist/styles.css");function p(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}a.default=function(e){var a=e.components,n=p(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:a},s.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"rangeslider"}},"RangeSlider"),s.a.createElement(r.MDXTag,{name:"p",components:a},"To use this component, simply import it into any file and pass the ",s.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#/#props"}},"modifiers")," in the properties."),s.a.createElement(r.MDXTag,{name:"pre",components:a},s.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metastring:""}},"import { RangeSlider } from 'ios-theme-toolkit'\n\nexport default () => (\n  <RangeSlider value={30} />\n)\n")),s.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"examples"}},"Examples"),s.a.createElement(l.Playground,{__codesandbox:"undefined",__position:0,__code:'<span className="desc">Default:</span>\n<RangeSlider min={0} max={50} defaultValue={25} />\n<span className="desc">Range that occupies the entire horizontal space:</span>\n<RangeSlider block min={0} max={100} defaultValue={30} />\n<span className="desc">Disabled:</span>\n<RangeSlider disabled defaultValue={75} />\n<style>\n  {\n    \'.react-live-preview .desc { display: block; font-weight: bold; margin-top: 20px }\'\n  }\n</style>',__scope:{props:n,RangeSlider:o.i}},s.a.createElement("span",{className:"desc"},"Default:"),s.a.createElement(o.i,{min:0,max:50,defaultValue:25}),s.a.createElement("span",{className:"desc"},"Range that occupies the entire horizontal space:"),s.a.createElement(o.i,{block:!0,min:0,max:100,defaultValue:30}),s.a.createElement("span",{className:"desc"},"Disabled:"),s.a.createElement(o.i,{disabled:!0,defaultValue:75}),s.a.createElement("style",null,".react-live-preview .desc { display: block; font-weight: bold; margin-top: 20px }")),s.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"props"}},"Props"),s.a.createElement(l.PropsTable,{of:o.i}),s.a.createElement(r.MDXTag,{name:"p",components:a},'All the properties which are not listed above will be transferred to the <input type="range"',">"," tag, so, It accepts all props which native input support."))}}}]);
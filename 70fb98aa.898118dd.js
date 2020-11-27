(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},507:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),i=(n(0),n(1006)),o={id:"maskedviewios",title:"\ud83d\udea7 MaskedViewIOS"},c={unversionedId:"maskedviewios",id:"version-0.63/maskedviewios",isDocsHomePage:!1,title:"\ud83d\udea7 MaskedViewIOS",description:"Deprecated. Use @react-native-masked-view/masked-view instead.",source:"@site/versioned_docs/version-0.63/maskedviewios.md",slug:"/maskedviewios",permalink:"/docs/maskedviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/maskedviewios.md",version:"0.63",lastUpdatedAt:1606504222,sidebar:"version-0.63/components",previous:{title:"InputAccessoryView",permalink:"/docs/inputaccessoryview"},next:{title:"SafeAreaView",permalink:"/docs/safeareaview"}},l=[{value:"Example",id:"example",children:[{value:"Props",id:"props",children:[]}]},{value:"Props",id:"props-1",children:[{value:"<code>maskElement</code>",id:"maskelement",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-native-masked-view/masked-view"}),"@react-native-masked-view/masked-view")," instead.")),Object(i.b)("p",null,"Renders the child view with a mask specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"maskElement")," prop."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { MaskedViewIOS, Text, View } from 'react-native';\n\nclass MyMaskedView extends React.Component {\n  render() {\n    return (\n      // Determines shape of the mask\n      <MaskedViewIOS\n        style={{ flex: 1, flexDirection: 'row', height: '100%' }}\n        maskElement={\n          <View\n            style={{\n              // Transparent background because mask is based off alpha channel.\n              backgroundColor: 'transparent',\n              flex: 1,\n              justifyContent: 'center',\n              alignItems: 'center'\n            }}>\n            <Text\n              style={{\n                fontSize: 60,\n                color: 'black',\n                fontWeight: 'bold'\n              }}>\n              Basic Mask\n            </Text>\n          </View>\n        }>\n        {/* Shows behind the mask, you can put anything here, such as an image */}\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#324376'\n          }}\n        />\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#F5DD90'\n          }}\n        />\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#F76C5E'\n          }}\n        />\n      </MaskedViewIOS>\n    );\n  }\n}\n")),Object(i.b)("p",null,"The following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked ",Object(i.b)("inlineCode",{parentName:"p"},"<View>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<Text>"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"<Image>"),"."),Object(i.b)("center",null,Object(i.b)("img",{src:"/docs/assets/MaskedViewIOS/example.png",width:"200"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The alpha channel of the view rendered by the ",Object(i.b)("inlineCode",{parentName:"strong"},"maskElement")," prop determines how much of the view's content and background shows through.")," Fully or partially opaque pixels allow the underlying content to show through but fully transparent pixels block that content."),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/view#props"}),"View props..."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/maskedviewios#maskelement"}),Object(i.b)("inlineCode",{parentName:"a"},"maskElement")))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"props-1"},"Props"),Object(i.b)("h3",{id:"maskelement"},Object(i.b)("inlineCode",{parentName:"h3"},"maskElement")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"element"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")))))}p.isMDXComponent=!0}}]);
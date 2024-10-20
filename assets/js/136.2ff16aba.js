(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{653:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-工程"}},[t._v("#")]),t._v(" TypeScript 工程")]),t._v(" "),s("h2",{attrs:{id:"自动编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动编译"}},[t._v("#")]),t._v(" 自动编译")]),t._v(" "),s("p",[s("strong",[t._v("自动编译文件：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tsc hello.ts "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v("\n")])])]),s("p",[t._v("使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。")]),t._v(" "),s("p",[s("strong",[t._v("自动编译整个项目：")])]),t._v(" "),s("ul",[s("li",[t._v("首先，在根目录下创建一个 TS 的配置文件"),s("code",[t._v("tsconfig.json")])]),t._v(" "),s("li",[t._v("执行"),s("code",[t._v("tsc")]),t._v("命令即可完成对整个项目的编译")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tsc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-init")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Created a new tsconfig.json with:                                                                                 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   target: es2016")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   module: commonjs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   strict: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   esModuleInterop: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   skipLibCheck: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   forceConsistentCasingInFileNames: true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can learn more at https://aka.ms/tsconfig")]),t._v("\n")])])]),s("p",[t._v("执行"),s("code",[t._v("tsc")]),t._v("命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tsc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("h3",{attrs:{id:"include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" include")]),t._v(" "),s("p",[t._v("用来指定哪些ts文件需要被编译的")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("**")]),t._v("：任意目录")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v("：任意文件")])]),t._v(" "),s("h3",{attrs:{id:"exclude"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[t._v("#")]),t._v(" exclude")]),t._v(" "),s("p",[t._v("排除不想编译的文件")]),t._v(" "),s("ul",[s("li",[t._v("默认值："),s("code",[t._v('[ "node_modules", "bower_components", "jspm_packages" ]')])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/hello/**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"extends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[t._v("#")]),t._v(" extends")]),t._v(" "),s("p",[t._v("定位被继承的配置文件")]),t._v(" "),s("ul",[s("li",[t._v("不想重复写配置文件内容时，根据文件名，继承该文件的内容")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前配置文件中会自动包含config目录下base.json中的所有配置信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/base"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" files")]),t._v(" "),s("p",[t._v("指定要编译的文件，需要编译的文件很少时才会用到，与include类似")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/app.ts"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"compileroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compileroptions"}},[t._v("#")]),t._v(" compilerOptions")]),t._v(" "),s("p",[t._v("配置选项是配置文件中非常重要的，也是比较复杂的配置选项。")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("compilerOptions")]),t._v("中包含很多子选项，用来完成对编译的配置。")]),t._v(" "),s("h2",{attrs:{id:"编译选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译选项"}},[t._v("#")]),t._v(" 编译选项")]),t._v(" "),s("p",[t._v("TypeScript 提供了非常多的编译选项，但是官方文档对每一项的解释很抽象，这一章会详细介绍每一个选项的作用，并给出对应的示例。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来指定ts被编译的ES的版本")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2016"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来指定项目中要使用的库（宿主环境），默认不需要设置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "lib": [],')]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来指定要使用的模块化的规范")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否对js文件进行编译，，默认为false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowJs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否坚持js代码是否符合语法规范，默认为false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checkJs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来指定编译后文件所在的目录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来将代码合并为一个文件，将全局作用域中的代码合并到同一个文件中")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outFile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist/app.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否在编译后移除注释，默认为false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"removeComments"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不生成编译后的文件，默认为false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noEmit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当有错误时，不生成编译后的文件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noEmitOnError"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 严格检查总开关")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strict"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不允许使用隐式的any类型")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitAny"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 严格的检查空值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strictNullChecks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不允许不明确类型的this")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitThis"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来设置编译后的文件是否使用严格模式")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alwaysStrict"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"webpack打包ts代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包ts代码"}},[t._v("#")]),t._v(" webpack打包ts代码")]),t._v(" "),s("p",[t._v("初始化包描述文件"),s("code",[t._v("package.json")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v("\n")])])]),s("p",[t._v("安装开发依赖")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" webpack webpack-cli typescript ts-loader\n")])])]),s("p",[t._v("配置文件，在项目根目录下新建文件："),s("code",[t._v("webpack.config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html-webpack-plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入插件")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定入口文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.ts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定打包文件所在目录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包后的文件名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clean")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动将上次打包目录资源清空")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定webpack打包时要使用的模块")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test指定的是规则生效的文件")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.ts$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要使用的loader")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要排除的文件")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/index.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来设置引入模块，以这两个为扩展名的文件都可以作为模块使用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extensions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.ts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("安装内置服务器")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" webpack-dev-server\n")])])]),s("p",[t._v("然后在包描述文件"),s("code",[t._v("package.json")]),t._v("配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack serve --open"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),s("p",[t._v("babel 就是一个工具，"),s("strong",[t._v("可以将新的 js 语法转换为旧的 js，以提高代码的兼容性")]),t._v("。主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" @babel/core @babel/preset-env babel-loader core-js\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
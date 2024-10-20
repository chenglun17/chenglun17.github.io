(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{622:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"微信小程序进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序进阶"}},[a._v("#")]),a._v(" 微信小程序进阶")]),a._v(" "),t("h2",{attrs:{id:"api-promise-化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-promise-化"}},[a._v("#")]),a._v(" API Promise 化")]),a._v(" "),t("h3",{attrs:{id:"_1-基于回调函数的异步-api-的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基于回调函数的异步-api-的缺点"}},[a._v("#")]),a._v(" 1.基于回调函数的异步 API 的缺点")]),a._v(" "),t("p",[a._v("默认情况下，小程序官方提供的==异步 API== 都是==基于回调函数==实现的，例如，网络请求的 API 需要按照如下的方式调用：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wx.request({\n\tmethods: '',\n\turl: '',\n\tdata: {},\n\tsuccess: () => {},\t//请求成功的回调函数\n\tfail: () => {},\t\t//请求失败的回调函数\n\tcomplete: () => {}\t//请求完成的回调函数\n})\n")])])]),t("p",[a._v("缺点：容易造成 ==回调地狱== 的问题，代码的 ==可读性、维护性== 差！")]),a._v(" "),t("h3",{attrs:{id:"_2-什么是-api-promise-化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是-api-promise-化"}},[a._v("#")]),a._v(" 2.什么是 API Promise 化")]),a._v(" "),t("p",[a._v("API Promise 化，值的是 ==通过额外的配置==，将官方提供的、基于回调函数的异步 API，升级改造为基于 Promise 的异步 API，从而提高代码的可读性、维护性，避免回调地狱的问题")]),a._v(" "),t("h3",{attrs:{id:"_3-实现-api-promise-化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现-api-promise-化"}},[a._v("#")]),a._v(" 3.实现 API Promise 化")]),a._v(" "),t("p",[a._v("在小程序中，实现 API Promise 化主要依赖于 ==miniprogram-api-promise== 这个如第三方的 npm 包。它的安装和使用步骤如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install --save miniprogram-api-promise@1.0.4\n")])])]),t("p",[a._v("安装完成后需要重新构建npm（如果有minipropram_npm文件夹，先删除再执行工具中的构建npm）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//在小程序入口文件中（app.js），只需要调用一次 promisifyAll() 方法\n//即可实现异步 API 的 Promise 化\nimport {promisifyAll} from 'miniprogram-api-promise'\n\nconst wxp = wx.p = {}\t//定义一个空白对象\n\n// promisify all wx's api\npromisifyAll(wx,wxp)\n")])])]),t("p",[a._v("wx是一个点击对象，包含了很多方法，把这个对象上的方法通过promisifyAll()函数进行promise化，之后把promise化的api挂载到wxp这个空对象上")]),a._v(" "),t("h3",{attrs:{id:"_4-调用-promise-化之后的异步-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-调用-promise-化之后的异步-api"}},[a._v("#")]),a._v(" 4.调用 Promise 化之后的异步 API")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//页面的 .wxml 结构\n<van-botton type=\"danger\" bindtap=\"getInfo\">vant按钮</vant-button>\n\n//页面的 .js 文件中，定义对应的 tap 事件处理函数\nasync getInfo() {\n\tconst {data: res} = await wx.p.request({\n\t\tmethod: 'GET',\n\t\turl: 'https://www.escook.cn/api/get',\n\t\tdata:{name:'zs',age:20}\n\t})\n\t\n\tconsole.log(res)\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
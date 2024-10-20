(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{627:function(t,a,_){"use strict";_.r(a);var v=_(10),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"视图与逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图与逻辑"}},[t._v("#")]),t._v(" 视图与逻辑")]),t._v(" "),a("h2",{attrs:{id:"页面导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面导航"}},[t._v("#")]),t._v(" 页面导航")]),t._v(" "),a("h3",{attrs:{id:"_1-什么是页面导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是页面导航"}},[t._v("#")]),t._v(" 1.什么是页面导航")]),t._v(" "),a("p",[t._v("页面导航指的是==页面之间的相互跳转==。例如，浏览器中实现页面导航的方式有如下两种：")]),t._v(" "),a("ol",[a("li",[t._v("<a>链接")]),t._v(" "),a("li",[t._v("location.href")])]),t._v(" "),a("h3",{attrs:{id:"_2-页面导航的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面导航的两种方式"}},[t._v("#")]),t._v(" 2.页面导航的两种方式")]),t._v(" "),a("ol",[a("li",[t._v("==声明式导航==\n"),a("ul",[a("li",[t._v("在页面上声明一个<navigator>导航组件")]),t._v(" "),a("li",[t._v("通过点击<navigator>组件实现页面跳转")])])]),t._v(" "),a("li",[t._v("==编程时导航==\n"),a("ul",[a("li",[t._v("调用小程序的导航 API，实现页面的跳转")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-声明式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-声明式导航"}},[t._v("#")]),t._v(" 3.声明式导航")]),t._v(" "),a("h4",{attrs:{id:"_1-导航到-tabbar-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-导航到-tabbar-页面"}},[t._v("#")]),t._v(" 1.导航到 tabBar 页面")]),t._v(" "),a("p",[t._v("tabBar 页面指的是被配置为 tabBar 的页面")]),t._v(" "),a("p",[t._v("在使用==<navigator>组件==跳转到指定的 tabBar 页面时，需要指定 ==url== 属性和 ==open-type== 属性，其中：")]),t._v(" "),a("ul",[a("li",[t._v("url 表示要跳转的==页面的地址==，必须以 ==/== 开头")]),t._v(" "),a("li",[t._v("open-type 表示==跳转的方式==，必须为 ==switchTab==")])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<navigator url="/pages/message/message" open-type="switchTab">导航到消息页面</navigator>\n')])])]),a("h4",{attrs:{id:"_2-导航到非-tabbar-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导航到非-tabbar-页面"}},[t._v("#")]),t._v(" 2.导航到非 tabBar 页面")]),t._v(" "),a("p",[t._v("非 tabBar 页面指的是没有被配置为 tabBar 的页面。")]),t._v(" "),a("p",[t._v("在使用<navigator>组件跳转到普通的非 tabBar 页面时，需要指定 ==url== 属性和 ==open-type== 属性，其中：")]),t._v(" "),a("ul",[a("li",[t._v("url 表示要跳转的==页面的地址==，必须以 ==/== 开头")]),t._v(" "),a("li",[t._v("open-type 表示==跳转的方式==，必须为 ==navigate==")])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<navigator url="/pages/info/info" open-type="navigate">导航到info页面</navigator>\n')])])]),a("p",[t._v('注意：为了简便，在导航到非 tabBar 页面时，==open-type="navigate"== 属性==可以省略==。')]),t._v(" "),a("h4",{attrs:{id:"_3-后退导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后退导航"}},[t._v("#")]),t._v(" 3.后退导航")]),t._v(" "),a("p",[t._v("如果要后退到上一页面或多级页面，需要指定 open-type 属性和 delta 属性，其中：")]),t._v(" "),a("ul",[a("li",[t._v("==open-type== 的值必须是 ==navigateBack==，表示要进行后退导航")]),t._v(" "),a("li",[t._v("==delta== 的值必须是==数字==，表示要后退的层级")])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<navigator open-type=\"navigateBack\" delta='1'>返回上一页</navigator>\n")])])]),a("p",[t._v("注意：为了简便，如果只是后退到上一页面，则==可以省略 delta 属性==，其==默认值就是1==。")]),t._v(" "),a("h3",{attrs:{id:"_4-编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编程式导航"}},[t._v("#")]),t._v(" 4.编程式导航")]),t._v(" "),a("h4",{attrs:{id:"_1-导航到-tabbar-页面-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-导航到-tabbar-页面-2"}},[t._v("#")]),t._v(" 1.导航到 tabBar 页面")]),t._v(" "),a("p",[t._v("调用 ==wx.switchTab(Object object)== 方法，可以跳转到 tabBar 页面。其中 Object ==参数对象==的属性列表如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必选")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("==url==")]),t._v(" "),a("td",[t._v("==String==")]),t._v(" "),a("td",[t._v("==是==")]),t._v(" "),a("td",[t._v("需要跳转的 tabBar 页面的路径，路径后不能带参数")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//页面结构\n<button bindtap="gotoMessage">跳转到消息页面</button>\n')])])]),a("p",[t._v("页面 .js 中与data平级")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//通过编程式导航，跳转到message页面\ngotoMessage(){\n\twx.switchTab({\n\t\turl: '/pages/message/message'\n\t})\n}\n")])])]),a("h4",{attrs:{id:"_2-导航到非-tabbar页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导航到非-tabbar页面"}},[t._v("#")]),t._v(" 2.导航到非 tabBar页面")]),t._v(" "),a("p",[t._v("调用 ==wx.navigateTo(Object object)== 方法，可以跳转到非 tabBar 页面。其中 Object ==参数对象==的属性列表如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必选")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("==url==")]),t._v(" "),a("td",[t._v("==String==")]),t._v(" "),a("td",[t._v("==是==")]),t._v(" "),a("td",[t._v("需要跳转的非 tabBar 页面的路径，路径后可以带参数")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//页面结构\n<button bindtap="gotoInfo">跳转到info页面</button>\n')])])]),a("p",[t._v("页面 .js 中与data平级")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//通过编程式导航，跳转到info页面\ngotoInfo(){\n\twx.navigateTo({\n\t\turl: '/pages/info/info'\n\t})\n}\n")])])]),a("h4",{attrs:{id:"_3-后退导航-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后退导航-2"}},[t._v("#")]),t._v(" 3.后退导航")]),t._v(" "),a("p",[t._v("调用 ==wx.navigateBack(Object object)== 方法，可以返回上一页面或多级页面。其中 Object ==参数对象==的属性列表如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("是否必选")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("==delta==")]),t._v(" "),a("td",[t._v("==number==")]),t._v(" "),a("td",[t._v("==1==")]),t._v(" "),a("td",[t._v("==否==")]),t._v(" "),a("td",[t._v("返回的页面数，如果 delta 大于现有页面数，则返回到首页")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//页面结构\n<button bindtap="gotoBack">后退</button>\n')])])]),a("p",[t._v("页面 .js 中与data平级")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//编程式导航，后退到上一页面\ngotoBack(){\n\twx.navigateBack()\n}\n")])])]),a("h3",{attrs:{id:"_5-导航传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-导航传参"}},[t._v("#")]),t._v(" 5.导航传参")]),t._v(" "),a("h4",{attrs:{id:"_1-声明式导航传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明式导航传参"}},[t._v("#")]),t._v(" 1.声明式导航传参")]),t._v(" "),a("p",[t._v("navigator 组件的 url 属性用来指定将要跳转到的页面的路径。同时，==路径的后面还可以携带参数==：")]),t._v(" "),a("ul",[a("li",[t._v("==参数== 与 ==路径== 之间使用 ==?== 分隔")]),t._v(" "),a("li",[t._v("==参数键== 与 ==参数值== 用 ===== 相连")]),t._v(" "),a("li",[t._v("==不同参数== 用 ==&== 分隔")])]),t._v(" "),a("p",[a("em",[t._v("代码示例如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<navigator url="/pages/info?name=hulujing&age=22">跳转到info页面</navigator>\n')])])]),a("h4",{attrs:{id:"_2-编程式导航传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编程式导航传参"}},[t._v("#")]),t._v(" 2.编程式导航传参")]),t._v(" "),a("p",[t._v("调用 ==wx.navigateTo(Object object)== 方法跳转页面时，也可以携带参数，")]),t._v(" "),a("p",[a("em",[t._v("代码示例如下：")])]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//页面结构\n<button bindtap="gotoInfo2">跳转到info页面</button>\n')])])]),a("p",[t._v("页面 .js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//通过编程式导航，跳转到info页面，并携带参数\ngotoInfo2(){\n\twx.navigateTo({\n\t\turl: '/pages/info?name=ls&gender=男'\n\t})\n}\n")])])]),a("h4",{attrs:{id:"_3-在-onload-中接收导航参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-在-onload-中接收导航参数"}},[t._v("#")]),t._v(" 3.在 onLoad 中接收导航参数")]),t._v(" "),a("p",[t._v("通过==声明式导航传参==或==编程式导航传参==所携带的参数，可以直接在 ==onLoad事件==中直接获取到，")]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n* 生命周期函数--监听页面加载\n*/\nonLoad: function(options){\n\t//options就是导航传递过来的参数对象\n\tconsole.log(options)\n}\n")])])]),a("h2",{attrs:{id:"页面事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面事件"}},[t._v("#")]),t._v(" 页面事件")]),t._v(" "),a("h3",{attrs:{id:"下拉刷新事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下拉刷新事件"}},[t._v("#")]),t._v(" 下拉刷新事件")]),t._v(" "),a("h4",{attrs:{id:"_1-什么是下拉刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是下拉刷新"}},[t._v("#")]),t._v(" 1.什么是下拉刷新")]),t._v(" "),a("p",[t._v("==下拉刷新==是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而==重新加载页面数据==的行为。")]),t._v(" "),a("h4",{attrs:{id:"_2-启用下拉刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用下拉刷新"}},[t._v("#")]),t._v(" 2.启用下拉刷新")]),t._v(" "),a("p",[t._v("启用下拉刷新的两种方式：")]),t._v(" "),a("ol",[a("li",[t._v("==全局开启下拉刷新==\n"),a("ul",[a("li",[t._v("在 app.json 的 window 节点中，将 enablePullDownRefresh 设置为 true")])])]),t._v(" "),a("li",[t._v("==局部开启下拉刷新==（推荐）\n"),a("ul",[a("li",[t._v("在页面的 .json 配置文件中，将 enablePullDownRefresh 设置为 true")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-配置下拉刷新窗口的样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置下拉刷新窗口的样式"}},[t._v("#")]),t._v(" 3.配置下拉刷新窗口的样式")]),t._v(" "),a("p",[t._v("在全局或页面的 .json 配置文件中，通过 ==backgroundColor== 和 ==backgroundTextStyle== 来配置下拉刷新窗口的样式，其中：")]),t._v(" "),a("ul",[a("li",[t._v("backgroundColor 用来配置==下拉刷新窗口的背景颜色==，仅支持16进制的颜色值")]),t._v(" "),a("li",[t._v("backgroundTextStyle 用来配置==下拉刷新 loading 的样式==，仅支持 dark 和 light")])]),t._v(" "),a("h4",{attrs:{id:"_4-监听页面的下拉刷新事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-监听页面的下拉刷新事件"}},[t._v("#")]),t._v(" 4.监听页面的下拉刷新事件")]),t._v(" "),a("p",[t._v("在页面的 .js 文件中，通过 ==onPullDownRefresh()== 函数即可监听当前页面的下拉刷新事件。")]),t._v(" "),a("p",[t._v("例如，在页面的 wxml 中有如下的 UI 结构，点击按钮可以让 count 值自增 +1：")]),t._v(" "),a("p",[t._v("页面的 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//页面结构\n<view>count值为: {{count}}</view>\n<button bindtap="countAdd">+1</button>\n')])])]),a("p",[t._v("页面 .js 中与 data平级")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//+1按钮的点击事件处理函数\ncountAdd(){\n\tthis.setData({\n\t\tcount: this.data.count +1\n\t})\n}\n")])])]),a("p",[t._v("在触发页面的下来刷新事件的时候，如果要把 count 的值重置为0，示例代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n*\t页面相关事件处理函数--监听用户下拉动作\n*/\nonPullDownRefresh: function(){\n\tthis.setData({\n\t\tcount:0\n\t})\n}\n")])])]),a("h4",{attrs:{id:"_5-停止下拉刷新的效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-停止下拉刷新的效果"}},[t._v("#")]),t._v(" 5.停止下拉刷新的效果")]),t._v(" "),a("p",[t._v("当处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，==不会主动消失==，所有需要手动隐藏下拉刷新的 loading 效果。此时，调用 ==wx.stopPullDownRefresh()== 可以停止当前页面的下拉刷新。")]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n*\t页面相关事件处理函数--监听用户下拉动作\n*/\nonPullDownRefresh: function(){\n\tthis.setData({\n\t\tcount:0\n\t})\n//当数据重置成功之后，调用此函数，关闭下拉刷新的效果\nwx.stopPullDownRefresh()\n}\n")])])]),a("h3",{attrs:{id:"上拉触底事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上拉触底事件"}},[t._v("#")]),t._v(" 上拉触底事件")]),t._v(" "),a("h4",{attrs:{id:"_1-什么是上拉触底"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是上拉触底"}},[t._v("#")]),t._v(" 1.什么是上拉触底")]),t._v(" "),a("p",[t._v("==上拉触底==是移动端的专有名词，通过手指在屏幕上拉滑动操作，从而==加载更多数据==的行为。")]),t._v(" "),a("h4",{attrs:{id:"_2-监听页面的上拉触底事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-监听页面的上拉触底事件"}},[t._v("#")]),t._v(" 2.监听页面的上拉触底事件")]),t._v(" "),a("p",[t._v("在页面的 .js文件中，通过 ==onReachBottom()== 函数即可监听当前页面的上拉触底事件。")]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n*\t页面上拉触底事件的处理函数\n*/\nonReachBottom: function(){\n\tconsole.log('触发了上拉触底事件')\n}\n")])])]),a("h4",{attrs:{id:"_3-配置上拉触底距离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置上拉触底距离"}},[t._v("#")]),t._v(" 3.配置上拉触底距离")]),t._v(" "),a("p",[t._v("上拉触底距离指的是==触发上拉触底事件时，滚动条距离页面底部的距离==。")]),t._v(" "),a("p",[t._v("可以在全局或页面的 .json配置文件中，通过 ==onReachBottomDistance== 属性来配置上拉触底的距离。")]),t._v(" "),a("p",[t._v("小程序默认的触底距离是 50px，在实际开发中，可以根据自己的需求修改这个默认值")]),t._v(" "),a("h4",{attrs:{id:"_4-对上拉触底进行节流处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-对上拉触底进行节流处理"}},[t._v("#")]),t._v(" 4.对上拉触底进行节流处理")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 data 中==定义== isloading 节流阀")]),t._v(" "),a("ul",[a("li",[t._v("false 表示当前没有进行任何数据请求")]),t._v(" "),a("li",[t._v("true 表示当前正在进行数据请求")])])]),t._v(" "),a("li",[a("p",[t._v("在 getColors() 方法中==修改== isloading 节流阀的值")]),t._v(" "),a("ul",[a("li",[t._v("在刚调用 getColors 时将节流阀设置为true")]),t._v(" "),a("li",[t._v("在网络请求的 complete 回调函数中，将节流阀重置为 false")])])]),t._v(" "),a("li",[a("p",[t._v("在 onReachBottom 中==判断==节流阀的值，从而对数据请求进行节流控制")]),t._v(" "),a("ul",[a("li",[t._v("如果节流阀的值为 true ，则阻止当前请求")]),t._v(" "),a("li",[t._v("如果节流阀的值为 false，则发起数据请求")])])])]),t._v(" "),a("h2",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("h3",{attrs:{id:"自定义编译模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义编译模式"}},[t._v("#")]),t._v(" 自定义编译模式")]),t._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("h3",{attrs:{id:"_1-什么是生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是生命周期"}},[t._v("#")]),t._v(" 1.什么是生命周期")]),t._v(" "),a("p",[t._v("==生命周期==（Life Cycle）是值一个对象从 ==创建== -> ==运行== -> ==销毁== 的整个阶段，==强调的是一个时间段==。例如：")]),t._v(" "),a("ul",[a("li",[t._v("小程序的启动，表示生命周期的开始")]),t._v(" "),a("li",[t._v("小程序的结束，表示生命周期的结束")]),t._v(" "),a("li",[t._v("中间小程序运行的过程，就是小程序的生命周期")])]),t._v(" "),a("h3",{attrs:{id:"_2-生命周期的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生命周期的分类"}},[t._v("#")]),t._v(" 2.生命周期的分类")]),t._v(" "),a("p",[t._v("在小程序中，生命周期分为两类，分别是：")]),t._v(" "),a("ol",[a("li",[t._v("应用生命周期\n"),a("ul",[a("li",[t._v("特指小程序从 启动 -> 运行 -> 销毁 的过程")])])]),t._v(" "),a("li",[t._v("页面生命周期\n"),a("ul",[a("li",[t._v("特指小程序中，每个页面的 加载 -> 渲染 -> 销毁 的过程")])])])]),t._v(" "),a("p",[t._v("其中，==页面==的生命周期==范围较小==，==应用程序==的生命周期==范围较大==。")]),t._v(" "),a("h3",{attrs:{id:"_3-什么是生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是生命周期函数"}},[t._v("#")]),t._v(" 3.什么是生命周期函数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("生命周期函数：是由小程序框架提供的内置函数，会伴随着生命周期，自动按次序执行。")])]),t._v(" "),a("li",[a("p",[t._v("生命周期函数的作用：允许程序员在特定的时间点，执行某些特定的操作。例如，页面刚加载的时候，可以在 onLoad 生命周期函数中初始化页面的数据。")])])]),t._v(" "),a("p",[t._v("==注意==：生命周期强调的是时间段，生命周期函数强调的是时间点。")]),t._v(" "),a("h3",{attrs:{id:"_4-生命周期函数的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-生命周期函数的分类"}},[t._v("#")]),t._v(" 4.生命周期函数的分类")]),t._v(" "),a("p",[t._v("在小程序中，生命周期函数分为两类，分别是：")]),t._v(" "),a("ol",[a("li",[t._v("应用的生命周期函数\n"),a("ul",[a("li",[t._v("特指小程序从 启动 -> 运行 -> 销毁 期间依次调用的那些函数")])])]),t._v(" "),a("li",[t._v("页面的生命周期函数\n"),a("ul",[a("li",[t._v("特指小程序中，每个页面的 加载 -> 渲染 -> 销毁 期间依次调用的那些函数")])])])]),t._v(" "),a("h3",{attrs:{id:"_5-应用的生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-应用的生命周期函数"}},[t._v("#")]),t._v(" 5.应用的生命周期函数")]),t._v(" "),a("p",[t._v("小程序的 ==应用生命周期函数== 需要在 ==app.js== 中进行声明，"),a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("app.js 文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("App({\n\t//小程序初始化完成时，执行此函数，全局只触发一次。可以做一些初始化的工作\n\tonLaunch: function(options){},\n\t//小程序启动时或从后台进入前台显示时触发\n\tonShow: function(options){},\n\t//小程序从前台进入后台时触发\n\tonHide: function(){}\n})\n")])])]),a("h3",{attrs:{id:"_6-页面的生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-页面的生命周期函数"}},[t._v("#")]),t._v(" 6.页面的生命周期函数")]),t._v(" "),a("p",[t._v("小程序的 ==页面生命周期函数== 需要在页面的 ==.js文件== 中进行生命，"),a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面的 .js文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Page({\n\tonLoad: function(options){},\t //监听页面加载，一个页面只调用一次\n\tonShow: function(){},\t\t\t//监听页面显示\n\tonReady: function(){},\t\t\t//监听页面初次渲染完成，一个页面只调用一次\n\tonHide: function(){},\t\t\t//监听页面隐藏\n\tonUnload: function(){}\t\t\t//监听页面卸载，一个页面只调用一次\n})\n")])])]),a("h2",{attrs:{id:"wxs脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxs脚本"}},[t._v("#")]),t._v(" WXS脚本")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("h4",{attrs:{id:"_1-什么是wxs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是wxs"}},[t._v("#")]),t._v(" 1.什么是WXS")]),t._v(" "),a("p",[t._v("WXS（WeiXin Script）是小程序==独有的一套脚本语言==，结合WXML，可以构建出页面的结构。")]),t._v(" "),a("h4",{attrs:{id:"_3-wxs的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-wxs的应用场景"}},[t._v("#")]),t._v(" 3.WXS的应用场景")]),t._v(" "),a("p",[t._v("wxml中无法调用在页面的 .js中定义的函数，但是，wxml中可以调用 wxs 中定义的函数。")]),t._v(" "),a("p",[t._v('因此，小程序中 wxs 的典型应用场景就是 "==过滤器=="。')]),t._v(" "),a("h4",{attrs:{id:"_4-wxs-和javascript-关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-wxs-和javascript-关系"}},[t._v("#")]),t._v(" 4.WXS 和JavaScript 关系*")]),t._v(" "),a("p",[t._v("虽然 wxs 的语法类似于JavaScript，但是 wxs 和 JavaScript 是完全不同的两种语言：")]),t._v(" "),a("ol",[a("li",[t._v("==wxs 有自己的数据类型==\n"),a("ul",[a("li",[t._v("number 数值类型、string 字符串类型、boolean 布尔类型、object 对象类型")]),t._v(" "),a("li",[t._v("function 函数类型、array 数组类型、date 日期类型、regexp 正则")])])]),t._v(" "),a("li",[t._v("==wxs 不支持类似于 ES6 及以上的语法形式==\n"),a("ul",[a("li",[t._v("不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc")]),t._v(" "),a("li",[t._v("==支持==：var 定义变量、普通 function 函数等类似于 ES5 的语法")])])]),t._v(" "),a("li",[t._v("==wxs 遵循 commonJS 规范==\n"),a("ul",[a("li",[t._v("module对象")]),t._v(" "),a("li",[t._v("require()函数")]),t._v(" "),a("li",[t._v("module.exports对象")])])])]),t._v(" "),a("h3",{attrs:{id:"基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[t._v("#")]),t._v(" 基础语法")]),t._v(" "),a("h4",{attrs:{id:"_1-内嵌-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内嵌-wxs-脚本"}},[t._v("#")]),t._v(" 1.内嵌 WXS 脚本")]),t._v(" "),a("p",[t._v("wxs代码可以编写在 wxml 文件中的 ==<wxs>== 标签内，就像 JavaScript代码可以编写在 html 文件中的 <script> 标签内一样。")]),t._v(" "),a("p",[t._v("wxml 文件中的每一个<wxs></wxs> 标签，==必须提供 module 属性==，用来指定==当前 wxs 的模板名称==，方便在 wxml 中访问模块中的成员：")]),t._v(" "),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<view>{{m1.toUpper(username)}}</view>\n\n<wxs module="m1">\n\t//将文本转化为大写形式 zs -> ZS\n\tmodule.exports.toUpper = function(str){\n\t\treturn str.toUpperCase()\n\t}\n</wxs>\n')])])]),a("h4",{attrs:{id:"_2-定义外联的-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义外联的-wxs-脚本"}},[t._v("#")]),t._v(" 2.定义外联的 wxs 脚本")]),t._v(" "),a("p",[t._v("wxs 代码还可以编写在==以 .wxs为后缀名的文件内==，就像 JavaScript 代码可以编写在以 .js 为后缀名的文件中一样。")]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("utils文件夹 -> tools.wxs")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function toLower(str){\n\treturn str.toLowerCase()\n}\n\nmodule.exports = {\n\ttoLower: toLower\n}\n")])])]),a("h4",{attrs:{id:"_3-使用外联的-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用外联的-wxs-脚本"}},[t._v("#")]),t._v(" 3.使用外联的 wxs 脚本")]),t._v(" "),a("p",[t._v("在 wxml 中引入外联的 wxs 脚本时，==必须==为 <wxs> 标签添加 module 和 src 属性，其中：")]),t._v(" "),a("ul",[a("li",[t._v("==module== 用来指定模块的名称")]),t._v(" "),a("li",[t._v("==src== 用来指定要引入的脚本的路径，且==必须是相对路径==")])]),t._v(" "),a("p",[a("em",[t._v("示例代码如下：")])]),t._v(" "),a("p",[t._v("页面 .js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("data:{\n\tcountry:'CHINA'\n}\n")])])]),a("p",[t._v("页面 .wxml")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!--调用m2模块中的方法--\x3e\n<view>{{m2.toLower(country)}}</view>\n\n\x3c!--引用外联的tools.wxs脚本，并命名为m2--\x3e\n<wxs src="../../utils/tools.wxs" module="m2"></wxs>\n')])])]),a("h3",{attrs:{id:"wxs-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxs-的特点"}},[t._v("#")]),t._v(" WXS 的特点")]),t._v(" "),a("h4",{attrs:{id:"_1-与-javascript-的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-与-javascript-的不同"}},[t._v("#")]),t._v(" 1.与 JavaScript 的不同")]),t._v(" "),a("p",[t._v("为了降低 wxs（==Weixin Script==）的学习成本，wxs 语言在设计时大量借鉴了 JavaScript 的语法。但是本质上，wxs  和 JavaScript 是完全不同的两种语言！")]),t._v(" "),a("h4",{attrs:{id:"_2-不能作为组件的事件回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-不能作为组件的事件回调"}},[t._v("#")]),t._v(" 2.不能作为组件的事件回调")]),t._v(" "),a("p",[t._v('wxs 典型的应用场景就是 "==过滤器=="，==经常配合 Mustache 语法进行使用==，例如：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<view>{{m2.toLower(coutry)}}</view>\n")])])]),a("p",[t._v("但是，在 wxs中定义的函数==不能作为组件的事件回调函数==。例如，下面的用是==错误==的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button bindtap="m2.toLower">按钮</button>\n')])])]),a("h4",{attrs:{id:"_3-隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-隔离性"}},[t._v("#")]),t._v(" 3.隔离性")]),t._v(" "),a("p",[t._v("==隔离性==指的是 wxs 的运行环境和其他 JavaScript 代码是隔离的。体现在如下两方面：")]),t._v(" "),a("ol",[a("li",[t._v("wxs 不能调用 js 中定义的函数")]),t._v(" "),a("li",[t._v("wxs 不能调用小程序提供的 API")])]),t._v(" "),a("h4",{attrs:{id:"_4-性能好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能好"}},[t._v("#")]),t._v(" 4.性能好")]),t._v(" "),a("ul",[a("li",[t._v("在 iOS设备上，小程序内的 WXS 会比 JavaScript 代码快2~20倍")]),t._v(" "),a("li",[t._v("在 Android 设备上，二者的运行效率无差异")])])])}),[],!1,null,null,null);a.default=s.exports}}]);
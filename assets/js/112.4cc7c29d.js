(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{619:function(_,v,t){"use strict";t.r(v);var a=t(10),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"微信小程序基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序基础"}},[_._v("#")]),_._v(" 微信小程序基础")]),_._v(" "),v("h2",{attrs:{id:"目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[_._v("#")]),_._v(" 目录结构")]),_._v(" "),v("ul",[v("li",[_._v("pages 用来存放所有小程序的页面")]),_._v(" "),v("li",[_._v("utils 用来存放工具性质的模块（例如：格式化的自定义模块）")]),_._v(" "),v("li",[_._v("app.js 项目的"),v("strong",[_._v("入口文件")])]),_._v(" "),v("li",[_._v("app.json 项目的"),v("strong",[_._v("全局配置文件")])]),_._v(" "),v("li",[_._v("app.wxss 项目的"),v("strong",[_._v("全局样式文件")])]),_._v(" "),v("li",[_._v("project.config.json 项目的"),v("strong",[_._v("配置文件")])]),_._v(" "),v("li",[_._v("sitemap.json 用来配置小程序及其页面"),v("strong",[_._v("是否允许被微信索引")])])]),_._v(" "),v("h3",{attrs:{id:"页面组成部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面组成部分"}},[_._v("#")]),_._v(" 页面组成部分")]),_._v(" "),v("p",[_._v("小程序官方建议把所有小程序的页面，都存放在 pages 目录中，以单独的文件夹存放")]),_._v(" "),v("p",[_._v("其中，每个页面由 4 个基本文件组成")]),_._v(" "),v("ol",[v("li",[_._v(".js 文件（页面的脚本文件，存放页面的数据、事件处理函数等）")]),_._v(" "),v("li",[_._v(".json 文件（当前页面的配置文件，配置窗口外观、表现等）")]),_._v(" "),v("li",[_._v(".wxml 文件（页面的模板结构文件）")]),_._v(" "),v("li",[_._v(".wxss 文件 （当前页面的样式表文件）")])]),_._v(" "),v("h3",{attrs:{id:"json配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#json配置文件"}},[_._v("#")]),_._v(" JSON配置文件")]),_._v(" "),v("h4",{attrs:{id:"_1-json配置文件的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-json配置文件的作用"}},[_._v("#")]),_._v(" 1.JSON配置文件的作用")]),_._v(" "),v("p",[_._v("JSON 是一种数据格式，在实际开发中，JSON 总以配置文件的形式出现。小程序项目中也不例外：通过不同的 .json 配置文件，可以对小程序项目进行不同级别的配置。")]),_._v(" "),v("p",[_._v("小程序项目中有 4 种json文件，分别是：")]),_._v(" "),v("ul",[v("li",[_._v("项目根目录中的 app.json 配置文件")]),_._v(" "),v("li",[_._v("项目根目录中的 project.config.json 配置文件")]),_._v(" "),v("li",[_._v("项目根目录中的 sitemap.json 配置文件")]),_._v(" "),v("li",[_._v("每个页面文件夹中的 .json 配置文件")])]),_._v(" "),v("h4",{attrs:{id:"_2-app-json文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-app-json文件"}},[_._v("#")]),_._v(" 2.app.json文件")]),_._v(" "),v("p",[_._v("app.json 是当前小程序项目的 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("全局配置文件")]),_._v("，包括小程序的所有 "),v("strong",[_._v("页面路径")]),_._v("，"),v("strong",[_._v("窗口外观")]),_._v("、"),v("strong",[_._v("页面表现")]),_._v("、"),v("strong",[_._v("底部 tab")]),_._v(" 等")]),_._v(" "),v("p",[_._v("例如，demo 项目里面的 app.json 配置内容：")]),_._v(" "),v("ul",[v("li",[_._v("pages：用来记录当前小程序所有页面的路径")]),_._v(" "),v("li",[_._v("window：全局定义小程序所有页面的背景色、文字颜色等")]),_._v(" "),v("li",[_._v("style：全局定义小程序组件所使用的样式版本")]),_._v(" "),v("li",[_._v("sitemapLocation：用来指明 sitemap.json 的位置")])]),_._v(" "),v("h4",{attrs:{id:"_3-project-config-json文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-project-config-json文件"}},[_._v("#")]),_._v(" 3.project.config.json文件")]),_._v(" "),v("p",[_._v("project.config.json 是当前小程序项目的 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("配置文件")]),_._v("，用来记录我们对小程序开发工具的个性化配置，例如：")]),_._v(" "),v("ul",[v("li",[_._v("setting 中保存的是"),v("strong",[_._v("编译相关的配置")])]),_._v(" "),v("li",[_._v("projectname 中保存的是"),v("strong",[_._v("项目名称")])]),_._v(" "),v("li",[_._v("appid 中保存的是"),v("strong",[_._v("小程序的账号ID")])])]),_._v(" "),v("h4",{attrs:{id:"_4-sitemap-json文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-sitemap-json文件"}},[_._v("#")]),_._v(" 4.sitemap.json文件")]),_._v(" "),v("p",[_._v("微信现在已经开放小程序内搜索，效果类似于 PC 网页的 SEO。sitemap.json 文件用来配置小程序页面 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("是否允许微信索引")]),_._v("。")]),_._v(" "),v("p",[_._v("==注意== ：sitemap 的索引提示是默认开启的，如需要关闭 sitemap 的索引提示，可以在小程序项目配置文件 project.config.json 的 setting 中配置字段 checkSiteMap 为 false")]),_._v(" "),v("h4",{attrs:{id:"_5-页面的-json文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-页面的-json文件"}},[_._v("#")]),_._v(" 5.页面的.json文件")]),_._v(" "),v("p",[_._v("小程序中的每个页面，可以使用 .json 文件来对页面的窗口外观进行配置，页面中的配置项会覆盖 app.json 的 window 中相同的配置项。")]),_._v(" "),v("h4",{attrs:{id:"_6-新建小程序页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-新建小程序页面"}},[_._v("#")]),_._v(" 6.新建小程序页面")]),_._v(" "),v("p",[_._v("只需要在 app.json --\x3e pages 中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件。")]),_._v(" "),v("h4",{attrs:{id:"_7-修改项目首页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-修改项目首页"}},[_._v("#")]),_._v(" 7.修改项目首页")]),_._v(" "),v("p",[_._v("只需要调整 app.json --\x3e pages 数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，当做首页进行渲染。")]),_._v(" "),v("h2",{attrs:{id:"wxml模板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wxml模板"}},[_._v("#")]),_._v(" WXML模板")]),_._v(" "),v("h3",{attrs:{id:"_1-什么是wxml"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是wxml"}},[_._v("#")]),_._v(" 1.什么是WXML")]),_._v(" "),v("p",[_._v("WXML（WeiXin Markup Language）是一套 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("标签语言")]),_._v("，用来构建小程序页面的结构，其作用类似于网页开发中的HTML。")]),_._v(" "),v("h3",{attrs:{id:"_2-wxml和html的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-wxml和html的区别"}},[_._v("#")]),_._v(" 2.WXML和HTML的区别")]),_._v(" "),v("ol",[v("li",[_._v("标签名称不同\n"),v("ul",[v("li",[_._v("HTML（div，span，img，a）")]),_._v(" "),v("li",[_._v("WXML（view，text，image，navigator）")])])]),_._v(" "),v("li",[_._v("属性节点不同\n"),v("ul",[v("li",[v("strong",[v("code",[_._v('<a href="#"></a>')])])]),_._v(" "),v("li",[v("strong",[v("code",[_._v('<navigator url="/pages/home/home"></navigator>')])])])])]),_._v(" "),v("li",[_._v("提供了类似于vue中的模板语法\n"),v("ul",[v("li",[_._v("数据绑定")]),_._v(" "),v("li",[_._v("列表渲染")]),_._v(" "),v("li",[_._v("条件渲染")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-什么是wxss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是wxss"}},[_._v("#")]),_._v(" 3.什么是WXSS")]),_._v(" "),v("p",[_._v("WXSS（WeiXin Style Sheets）是一套 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("样式语言")]),_._v("，用于描述WXML的组件样式，类似于网页开发中的CSS。")]),_._v(" "),v("h3",{attrs:{id:"_4-wxss和css的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-wxss和css的区别"}},[_._v("#")]),_._v(" 4.WXSS和CSS的区别")]),_._v(" "),v("ol",[v("li",[_._v("新增了 rpx 尺寸单位\n"),v("ul",[v("li",[_._v("CSS 中需要手动进行像素单位换算，例如 rem")]),_._v(" "),v("li",[_._v("WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算（750px）")])])]),_._v(" "),v("li",[_._v("提供了全局的样式和局部样式\n"),v("ul",[v("li",[_._v("项目根目录中的 app.wxss 会作用于所有小程序页面")]),_._v(" "),v("li",[_._v("局部页面的 .wxss 样式仅对当前页面生效")])])]),_._v(" "),v("li",[_._v("WXSS 仅支持部分 CSS 选择器\n"),v("ul",[v("li",[_._v(".class 和 #id")]),_._v(" "),v("li",[_._v("element")]),_._v(" "),v("li",[_._v("并集选择器、后代选择器")]),_._v(" "),v("li",[_._v("::after 和 ::before 等伪类选择器")])])])]),_._v(" "),v("h2",{attrs:{id:"js逻辑交互"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js逻辑交互"}},[_._v("#")]),_._v(" JS逻辑交互")]),_._v(" "),v("h3",{attrs:{id:"_1-小程序中的-js文件分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序中的-js文件分类"}},[_._v("#")]),_._v(" 1.小程序中的.js文件分类")]),_._v(" "),v("p",[_._v("小程序中的JS文件分为3大类，分别是：")]),_._v(" "),v("ol",[v("li",[_._v("app.js\n"),v("ul",[v("li",[_._v("是"),v("strong",[_._v("整个小程序项目")]),_._v("的 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("入口文件")]),_._v("，通过调用 App() 函数来启动整个小程序")])])]),_._v(" "),v("li",[_._v("页面的 .js 文件\n"),v("ul",[v("li",[_._v("是"),v("strong",[_._v("页面")]),_._v("的入口文件，通过调用 Page() 函数来创建并运行页面")])])]),_._v(" "),v("li",[_._v("普通的 .js 文件\n"),v("ul",[v("li",[_._v("是普通的功能模块文件，用来封装公共的函数或属性供页面使用")])])])]),_._v(" "),v("h2",{attrs:{id:"宿主环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宿主环境"}},[_._v("#")]),_._v(" 宿主环境")]),_._v(" "),v("h3",{attrs:{id:"_1-什么是宿主环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是宿主环境"}},[_._v("#")]),_._v(" 1.什么是宿主环境")]),_._v(" "),v("p",[_._v("宿主环境（host environment）指的是 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("程序运行所必须的依赖环境")]),_._v("。Android 和 iOS 系统是两个不同的宿主环境。")]),_._v(" "),v("h3",{attrs:{id:"_2-小程序的宿主环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序的宿主环境"}},[_._v("#")]),_._v(" 2.小程序的宿主环境")]),_._v(" "),v("p",[_._v("手机微信是小程序的宿主环境，小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能")]),_._v(" "),v("h3",{attrs:{id:"_3-小程序宿主环境包含的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-小程序宿主环境包含的内容"}},[_._v("#")]),_._v(" 3.小程序宿主环境包含的内容")]),_._v(" "),v("h3",{attrs:{id:"_3-1-通信模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-通信模型"}},[_._v("#")]),_._v(" 3.1 通信模型")]),_._v(" "),v("h4",{attrs:{id:"通信的主体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通信的主体"}},[_._v("#")]),_._v(" 通信的主体")]),_._v(" "),v("p",[_._v("小程序中的通信的主体是 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("渲染层")]),_._v(" 和 "),v("strong",{staticStyle:{color:"#DD5145"}},[_._v("逻辑层")]),_._v("，其中：")]),_._v(" "),v("ol",[v("li",[_._v("WXML 模板 和 WXSS 样式工作在渲染层")]),_._v(" "),v("li",[_._v("JS 脚本工作在逻辑层")])]),_._v(" "),v("h4",{attrs:{id:"小程序的通信模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序的通信模型"}},[_._v("#")]),_._v(" 小程序的通信模型")]),_._v(" "),v("p",[_._v("小程序中的通信模型分为两部分：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("渲染层")]),_._v(" 和 "),v("strong",[_._v("逻辑层")]),_._v(" 之间的通信\n"),v("ul",[v("li",[_._v("由微信客户端进行转发")])])]),_._v(" "),v("li",[v("strong",[_._v("逻辑层")]),_._v(" 和 "),v("strong",[_._v("第三方服务器")]),_._v(" 之间的通信\n"),v("ul",[v("li",[_._v("由微信客户端进行转发")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-2-运行机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-运行机制"}},[_._v("#")]),_._v(" 3.2 运行机制")]),_._v(" "),v("h4",{attrs:{id:"小程序启动的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序启动的过程"}},[_._v("#")]),_._v(" 小程序启动的过程")]),_._v(" "),v("ol",[v("li",[_._v("把小程序的代码包下载到本地")]),_._v(" "),v("li",[_._v("解析 app.json 全局配置文件")]),_._v(" "),v("li",[_._v("执行 app.js 小程序入口文件，调用App () 创建小程序实例")]),_._v(" "),v("li",[_._v("渲染小程序首页")]),_._v(" "),v("li",[_._v("小程序启动完成")])]),_._v(" "),v("h4",{attrs:{id:"页面渲染的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染的过程"}},[_._v("#")]),_._v(" 页面渲染的过程")]),_._v(" "),v("ol",[v("li",[_._v("加载解析页面的.json配置文件")]),_._v(" "),v("li",[_._v("加载页面的.wxml模板和.wxss样式")]),_._v(" "),v("li",[_._v("执行页面的.js文件，==调用Page()创建页面实例==")]),_._v(" "),v("li",[_._v("页面渲染完成")])]),_._v(" "),v("h3",{attrs:{id:"_3-3-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-组件"}},[_._v("#")]),_._v(" 3.3 组件")]),_._v(" "),v("h4",{attrs:{id:"_1-小程序中的组件的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序中的组件的分类"}},[_._v("#")]),_._v(" 1.小程序中的组件的分类")]),_._v(" "),v("p",[_._v("==小程序的组件也是由宿主环境提供的==，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为9大类，分别是：")]),_._v(" "),v("ol",[v("li",[_._v("==视图容器==")]),_._v(" "),v("li",[_._v("==基础内容==")]),_._v(" "),v("li",[_._v("==表单组件==")]),_._v(" "),v("li",[_._v("==导航组件==")]),_._v(" "),v("li",[_._v("媒体组件")]),_._v(" "),v("li",[_._v("map地图组件")]),_._v(" "),v("li",[_._v("canvas画布组件")]),_._v(" "),v("li",[_._v("开放能力")]),_._v(" "),v("li",[_._v("无障碍访问")])]),_._v(" "),v("h4",{attrs:{id:"_2-常用的视图容器类组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用的视图容器类组件"}},[_._v("#")]),_._v(" 2.常用的视图容器类组件")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("==view==")]),_._v(" "),v("ul",[v("li",[_._v("普通视图区域")]),_._v(" "),v("li",[_._v("类似于HTML中的div，是一个块级元素")]),_._v(" "),v("li",[_._v("常用来实现页面的布局效果")])])]),_._v(" "),v("li",[v("p",[_._v("==scroll-view==")]),_._v(" "),v("ul",[v("li",[_._v("可滚动的视图区域")]),_._v(" "),v("li",[_._v("常用来实现滚动列表效果")]),_._v(" "),v("li",[_._v("scroll-x 横向滚动")]),_._v(" "),v("li",[_._v("scroll-y 纵向滚动。竖向滚动时，必须给scroll-view一个固定高度")])])]),_._v(" "),v("li",[v("p",[_._v("==swiper和swiper-item==")]),_._v(" "),v("ul",[v("li",[_._v("轮播图容器组件和轮播图item组件")]),_._v(" "),v("li",[_._v("swiper组件常用属性")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("类型")]),_._v(" "),v("th",[_._v("默认值")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("indicator-dots")]),_._v(" "),v("td",[_._v("boolean")]),_._v(" "),v("td",[_._v("false")]),_._v(" "),v("td",[_._v("是否显示面板指示点")])]),_._v(" "),v("tr",[v("td",[_._v("indicator-color")]),_._v(" "),v("td",[_._v("color")]),_._v(" "),v("td",[_._v("rgba(0,0,0,3)")]),_._v(" "),v("td",[_._v("指示点颜色")])]),_._v(" "),v("tr",[v("td",[_._v("indicator-active-color")]),_._v(" "),v("td",[_._v("color")]),_._v(" "),v("td",[_._v("#000000")]),_._v(" "),v("td",[_._v("当前选中的指示点颜色")])]),_._v(" "),v("tr",[v("td",[_._v("autoplay")]),_._v(" "),v("td",[_._v("boolean")]),_._v(" "),v("td",[_._v("false")]),_._v(" "),v("td",[_._v("是否自动切换")])]),_._v(" "),v("tr",[v("td",[_._v("interval")]),_._v(" "),v("td",[_._v("number")]),_._v(" "),v("td",[_._v("5000")]),_._v(" "),v("td",[_._v("自动切换时间间隔")])]),_._v(" "),v("tr",[v("td",[_._v("circular")]),_._v(" "),v("td",[_._v("boolean")]),_._v(" "),v("td",[_._v("false")]),_._v(" "),v("td",[_._v("是否采用衔接滑动")])])])])])]),_._v(" "),v("h4",{attrs:{id:"_3-常用的基础内容组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用的基础内容组件"}},[_._v("#")]),_._v(" 3.常用的基础内容组件")]),_._v(" "),v("ol",[v("li",[_._v("==text==\n"),v("ul",[v("li",[_._v("文本组件")]),_._v(" "),v("li",[_._v("类似于HTML中的span标签，是一个行内元素")])])]),_._v(" "),v("li",[_._v("==rich-text==\n"),v("ul",[v("li",[_._v("富文本组件")]),_._v(" "),v("li",[_._v("支持把HTML字符串渲染为WXML结构")])])])]),_._v(" "),v("p",[_._v("通过text组件的==user-select==属性，实现长按选中文本内容的效果：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("<view>\n  手机号支持长按选中效果\n  <text user-select>133333332222</text>\n</view>\n")])])]),v("p",[_._v("通过rich-text组件的==nodes==属性节点，==把HTML字符串渲染为对应的UI结构==：")]),_._v(" "),v("div",{staticClass:"language-h extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("<rich-text nodes=\"<h1 style='color: red;'>标题</h1>\"></rich-text>\n")])])]),v("h4",{attrs:{id:"_4-其他常用组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他常用组件"}},[_._v("#")]),_._v(" 4.其他常用组件")]),_._v(" "),v("ol",[v("li",[_._v("==button==\n"),v("ul",[v("li",[_._v("按钮组件")]),_._v(" "),v("li",[_._v("功能比HTML中的button按钮丰富")]),_._v(" "),v("li",[_._v("通过open-type属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）")])])])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v('<view>-----通过type指定按钮类型-----</view>\n<view>-----size="mini" 小尺寸按钮-----</view>\n<view>-----plain 镂空按钮-----</view>\n\n<button size="mini">默认按钮</button>\n<button type="primary" size="mini" plain>主色调按钮</button>\n<button type="warn" size="mini" plain>警告按钮</button>\n')])])]),v("ol",{attrs:{start:"2"}},[v("li",[_._v("==image==")])]),_._v(" "),v("ul",[v("li",[_._v("图片组件")]),_._v(" "),v("li",[_._v("image组件默认宽度约300px，高度约240px")])]),_._v(" "),v("p",[_._v("image组件的mode属性用来指定图片的==裁剪==和==缩放==模式，常用的mode属性值如下：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("mode值")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("scaleToFill")]),_._v(" "),v("td",[_._v("(默认值)缩放模式，==不保持纵横比缩放图片==，使图片的宽高完全拉伸至==填满image元素==")])]),_._v(" "),v("tr",[v("td",[_._v("aspectFit")]),_._v(" "),v("td",[_._v("缩放模式，==保持纵横比缩放图片，使图片的长边完全显示出来==。即可以完整地将图片显示出来")])]),_._v(" "),v("tr",[v("td",[_._v("aspectFill")]),_._v(" "),v("td",[_._v("缩放模式，==保持纵横比缩放图片，只保证图片的短边能完全显示出来==。")])]),_._v(" "),v("tr",[v("td",[_._v("widthFix")]),_._v(" "),v("td",[_._v("缩放模式，==宽度不变，高度自动变化==，保持原图宽高比不变")])]),_._v(" "),v("tr",[v("td",[_._v("heightFix")]),_._v(" "),v("td",[_._v("缩放模式，==高度不变，宽度自动变化==，保持原图宽高比不变")])])])]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[_._v("==navigator==")])]),_._v(" "),v("ul",[v("li",[_._v("页面导航组件")]),_._v(" "),v("li",[_._v("类似于HTML中的a链接")])]),_._v(" "),v("h3",{attrs:{id:"_4-4-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-api"}},[_._v("#")]),_._v(" 4.4 API")]),_._v(" "),v("h4",{attrs:{id:"_1-小程序api概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序api概述"}},[_._v("#")]),_._v(" 1.小程序API概述")]),_._v(" "),v("p",[_._v("==小程序中的API是由宿主环境提供的==，通过这些丰富的小程序API，开发者可以方便的调用微信提供的能力，例如：获取用户信息、本地储存、支付功能等")]),_._v(" "),v("h4",{attrs:{id:"_2-小程序api的三大分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序api的三大分类"}},[_._v("#")]),_._v(" 2.小程序API的三大分类")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("==事件监听API==")]),_._v(" "),v("ul",[v("li",[_._v("特点：以==on==开头，用来"),v("strong",[_._v("监听某些事件的触发")])]),_._v(" "),v("li",[_._v("举例：wx."),v("strong",[_._v("onWindowResize")]),_._v("(function callback) 监听窗口尺寸变化的事件")])])]),_._v(" "),v("li",[v("p",[_._v("==同步API==")]),_._v(" "),v("ul",[v("li",[_._v("特点1：以==Sync==结尾的API都是同步API")]),_._v(" "),v("li",[_._v("特点2：同步API的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常")]),_._v(" "),v("li",[_._v("举例：wx."),v("strong",[_._v("setStorageSync")]),_._v("('key','value') 向本地存储中写入内容")])])]),_._v(" "),v("li",[v("p",[_._v("==异步API==")]),_._v(" "),v("ul",[v("li",[_._v("特点：类似于jQuery中的**$.ajax(aptions)** 函数，需要通过success、fail、complete接收调用的结果")]),_._v(" "),v("li",[_._v("举例：wx."),v("strong",[_._v("request")]),_._v("() 发起网络数据请求，通过success回调函数接收数据")])])])]),_._v(" "),v("h2",{attrs:{id:"协同工作和发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协同工作和发布"}},[_._v("#")]),_._v(" 协同工作和发布")])])}),[],!1,null,null,null);v.default=s.exports}}]);
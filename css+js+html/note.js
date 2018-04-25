***css***
1、多个background用','号隔开,蒙层优先级高->低
2、margin: auto; 对块标签元素有效，作用于自身
	text-align: center; 对行内元素/文本有效，作用域子元素
3、background-size: len,len;	设置多个背景的宽高
4、list-style(ul的简写属性) 设置列表项标志
5、nth-child(n)  先找某元素的父元素，然后找第n个(递归查找)子元素且元素必须为原元素
6、$(selector).toggle(); 	切换元素可见状态
7、text-decoration: none; 	去掉a标签修饰
8、cursor: pointer/default;		手型/默认光标
9、target: _blank/_self..		在何处打开文档链接（文档重定向）
10、a:link	未访问链接   css伪类: link、visited、hover、active 可覆盖
11、vertical-align: text-bottom;(行内元素底端对齐父元素字体底端)	定义该元素基线相对于该行基线的垂直对齐
12、圆方字体引入	@font-face{font-family: '',url:''}自定义字体系列及引入路径
13、float布局文字环绕



***浏览器***
*加载、解析、渲染*
1、加载
url请求->解析主机名->DNS查询(Domain Name System)(先取缓存),网址转换为ip->http请求->TCP(Transmission Control Protocol)连接(三次握手)->前端请求->服务器html响应->显示html->资源对象请求及响应(css/js/img..)
2、解析
html自上而下加载(逐步完成), 并解析渲染
构建dom树(深度遍历) -> css Rule Tree -> 构造Render Tree
3、渲染
解析html构建dom树->构建render树->布局render树->绘制render树
回流(Reflow): 影响布局的变化(dom操作、尺寸、table), 耗时多, 影响性能
重画(Repaint): 不影响布局的变化(color、position)
减少回流/重画
css选择器从右到左进行匹配
js下载(非动态创建script)和执行会阻止dom树的构建
cn: 顶级域名  com: 机构域名	


*chrome TimeLine*
周期	Redirect -> App Cache -> DNS -> TCP -> Request -> Response
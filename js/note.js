*Dom
1. input/text - focus()		//el.focus/blur()
2. 事件对象e
	e = e || window.event;		//兼容ie和firefox
	screenX 		//相对桌面左侧距离, 浏览器窗口可拖动
	clientX			//相对于浏览器左侧距离, 文档滚动不影响
	pageX 			//相对于文档左侧距离
3. HTML DOM Element属性
	clientWidth	 	//元素的可见宽度(不含border)
	offsetWidth		//元素的宽度(box盒子模型)
	offsetLeft		//元素水平偏移位置(position)
	scrollLeft		//元素左边缘与视图之间的距离(用于overflow, 从左边起拉动滚动条的距离)
	scrollWidth		//元素的整体宽度(=clientWidth, 除ie7)
	
	document.documentElement.scrollTop		//firefox 、webkit
	document.body.scrollTop					//ie, safari
	
	scrollTop+clientHeight=height

*Bom
1.Location对象
	- window.location
	- hostname		//主机名

*ECMAScript		//European Computer Manufacturers Association
1、定时器传参
a、字符串形式
	setTimeout("fn(name)",100); name是变量 => eval("fn(name)")
b、调用fn返回不带餐函数（该函数调用带参函数） 
	function fn(name){
		return function(){
			fn1(name)
		}
	}
c、重写,bind/apply/call方法
	
2、舍入误差
	有限小数转化为无限位二进制小数, 计算机存储有限位
	解决: 放大10的n次方倍, 取整, 然后除以...
	Number.prototype.toFixed()		//chrome/Firefox某些版本显示不正确
	
3、js导出excel(服务器端中转方式)
	location.href = '';
	data:application/vnd.ms-excel;base64
	xmlns:o="urn:schemas-microsoft-com:office:office" 
	xmlns:x="urn:schemas-microsoft-com:office:excel" 
	xmlns="http://www.w3.org/li/REC-html40"
	
	<head>
	<!--[if gte mso 9]>
	<xml>
		<x:ExcelWorkbook>
			<x:ExcelWorksheets>
				<x:ExcelWorksheet>
					<x:Name>{worksheet}</x:Name>			//表名
					<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
				</x:ExcelWorksheet>
			</x:ExcelWorksheets>
		</x:ExcelWorkbook>
	</xml>
	<![endif]-->
	</head><body><table>{table}</table></body></html>'			//内容
	
	
4、正则
	正则匹配不含特点字符串
		^(?!.*(title|wrp)).*$
		?:   ?= 和 ?!(预查)		//非捕获元
		\r\n					//匹配换行
		^ $						//整行	开始-结尾
		.*要放在预查中
	
	^(1.*)\n					//配置1开头\n换行的整行
	
	
	
5、console.log
	可使用pirntf()风格的占位符(%d - 整数/%s - 字符/%o - 对象/%f - 浮点数..)		//console.log("圆周率是%f",3.1415926);
	打印字符串+对象								//console.log('o',{a:1})
	
6、new Error('错误对象')			//定义错误对象

7、字符串
	'\.'		//字符串中的\转义不能单独使用
	
8、Array.prototype.map
	- 返回新数组		//按照原始数组元素顺序依次处理元素
	- arr.map(function(currentValue，index，arr){return 新值}) 		//不改变原数组 
	
	
	
	
	
	
	
	
	
	
	

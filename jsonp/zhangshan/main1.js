var but = document.querySelector('button')//获取button标签
var container= null  //声明变量来盛放后端发送的数据

but.addEventListener('click',function (event){

	var zhangsan = 'zhangsan'+(parseInt(Math.random()*100000,10))
	window[zhangsan] = function (content){
		return container = content
	}//生成一个函数，其名随机

	var script = document.createElement('script')//动态创建script标签,
	script.src = 'www.baidu.com'     //添加请求路径
	document.body.appendChild(script)			 //插入html文档后自动发送get请求

	script.onload = function(e){
		script.remove()
		delete window[zhangsan]
		money.innerText=(container)+'';
	}//若成功，删除script标签和随机函数命，并且操作返回数据

	script.onerron = function(e){
		script.remove()
		delete window[zhangsan]
		console.log(1)
	}//失败，删除script标签和随机函数命
	
})
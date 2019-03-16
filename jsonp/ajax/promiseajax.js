//点击事件触发http请求
but2.addEventListener('click',function (event){
	$2.Ajax2({method:'POST',url:'/pay',body:'X=WWW&&Y=QQQ'}).then((haha)=>{console.log(haha);return 1},(heihei)=>{console.log(heihei)}).then((rrr)=>{console.log(rrr)})
})

//声明一个jQuery1的函数
window.jQuery2 = function (){}

//给该函数赋值给全局变量$1
window.$2 = window.jQuery2

//封装ajax请求函数，并赋值给$.ajax1
$2.Ajax2 = function ({method,url,body}){

	/*return 一个Promise实例 该实例具有then方法，then方法接受两个回调函数，
	该then方法还能return一个then方法，新的then方法也接受两个回调函数，回调函数接受一个参数，
	该参数是第一个then的回调函数return出来的值*/
	return new Promise(function (a,b){

		let xhr = new XMLHttpRequest
		xhr.addEventListener('readystatechange',function (){
		
			if (xhr.readyState === 4){
				if (xhr.status >=200 && xhr.status <300){

					//获取http响应
					console.log('...当前请求状态码：'+xhr.readyState+',http请求已经完成')
					console.log('获取响应状态码'+xhr.status+xhr.statusText)
					console.log('获取一个响应头'+xhr.getResponseHeader('Content-type'))
					console.log('获取所有响应头'+xhr.getAllResponseHeaders())
					console.log('获取响应体内容'+xhr.responseText)

					a(xhr.responseText)

				}else if(xhr.status>=400 && xhr.status<500){
					b(xhr)
				}

			}else{

				console.log('当前请求状态码：'+xhr.readyState+',http请求还未完成')
			}
		})

		//配置http请求
		xhr.open(method,url,true)//第一个参数和第二个参数method，url
		xhr.setRequestHeader('content-type','x-www-from-urlencoded')
		xhr.setRequestHeader('name','wanglu')
		xhr.send(body)//第三个参数body

	})
	
}



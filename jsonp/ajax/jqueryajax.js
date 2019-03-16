//点击事件触发http请求
but1.addEventListener('click',function (event){
	$1.Ajax('POST',
		   '/pay',
		   'X=WWW&&Y=QQQ',
		   function (body){p.innerText = body},
		   function (obj){console.log(obj)})
	})

//声明一个jQuery1的函数
window.jQuery1 = function (){}

//给该函数赋值给全局变量$1
window.$1 = window.jQuery1

//封装ajax请求函数，并赋值给$.ajax1
$1.Ajax = function (method,url,body,succeed, error){

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

				//第四个参数
				succeed(xhr.responseText)

			}else if(xhr.status>=400 && xhr.status<500){

				//第五个参数
				error(xhr)
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
}



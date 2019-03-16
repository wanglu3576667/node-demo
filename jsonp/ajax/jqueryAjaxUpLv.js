//点击事件触发http请求
but3.addEventListener('click',function (event){
	
	$.ajax({url:'/pay',method:'POST',body:'x=sss&&y=rrr',succeed:function(a){console.log(a)},error:function (b){console.log(b)}},
		   {name:'wangliu',age:'18'})
	})

//声明一个jQuery的函数
window.jQuery = function (){}

//给该函数赋值给全局变量$
window.$ = window.jQuery

//封装ajax函数，并赋值给$.ajax，接受两个对象作为参数
$.ajax = function (obj,obj1){
	//ES6解构赋值
	var {url,method,body,succeed,error} = obj

	var xhr = new XMLHttpRequest
	xhr.addEventListener('readystatechange',function(event){
		
		if (xhr.readyState === 4){
			if (xhr.status >= 200 && xhr.status<300){
				succeed.call(null,xhr.responseText)
			}else if (xhr.status >= 400 && xhr.status<= 500){
				error.call(null,xhr)
			}
		}else{
			console.log(`当前ajax状态码为：${xhr.readyState}`)
		}
	
	})

	xhr.open(method,url,true)
	//如果第二个参数是对象，遍历该对象，传参设置请求头
	if (typeof arguments[1] === 'object'){
		for (let key in obj1){
			xhr.setRequestHeader(key+'',obj1[key]+'')
		}
	}
	xhr.send(body)
	
	
}
	



//用户触发点击事件， 进行ajax操作
but.addEventListener('click',ajax)
//原生JS写ajax
function ajax(){

	//生成实例对象
	var xhr = new XMLHttpRequest();

	//绑定监听事件，监听请求状态
	xhr.addEventListener('readystatechange',function(){

		//判断服务器返回的数据是否接收完毕，或者本次接收已经失败
		if(xhr.readyState === 4){

			//根据返回的状态码来确认时候这次请求是否成功
			if(xhr.status >= 200 && xhr.status<=300){
				alert('请求成功')

				//将返回的字符串赋值给变量
				var hash = xhr.responseText
				console.log(hash)
				console.log(xhr.response)

				//将JSON数据类型的值，由这个值字符串状态转换为正常的JS的数据类型的值
				let content = JSON.parse(hash)

				//操作返回数据
				p.innerText=`${content.name}+${content.age}`
			}
		}
	})
	//配置请求类型与路径，异步
	xhr.open('GET','/pay',true)
	//发送请求，没有要提交的附加数据
	xhr.send()
}


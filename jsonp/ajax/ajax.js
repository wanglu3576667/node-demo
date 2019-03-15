//点击事件触发http请求
but.addEventListener('click',ajax)

//JS原生ajax
function ajax(){
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange',function(){
		if(xhr.readyState === 4){
			if(xhr.status >= 200 && xhr.status<=300){
				alert('请求成功')
				var hash = xhr.responseText
				console.log(hash)
				console.log('响应体的数据类型：'+xhr.responseType)
				let content = JSON.parse(hash)
				p.innerText=`${content.name}+${content.age}`
			}
		}
		
	})
	xhr.open('GET','/pay',true)
	xhr.send()
}


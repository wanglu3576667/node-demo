var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method


  console.log('HTTP 路径为\n' + path)
  
   if(path == '/ajax.js'){
    let main1 = fs.readFileSync('./ajax.js','utf-8')
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write(main1)
    response.end()
  }else if(path == '/'){
    let string = fs.readFileSync('./ajax.html','utf-8')
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/pay'){
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(`{"name":"zhangsan","age":14}`)
    response.end()
  }else if(path == '/jqueryajax.js'){
    let main1 = fs.readFileSync('./jqueryajax.js','utf-8')
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write(main1)
    response.end()
  }else if(path == '/jqueryAjaxUpLv.js'){
    let main1 = fs.readFileSync('./jqueryAjaxUpLv.js','utf-8')
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write(main1)
    response.end()
  }else if(path == '/promiseajax.js'){
    let main1 = fs.readFileSync('./promiseajax.js','utf-8')
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write(main1)
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }

})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
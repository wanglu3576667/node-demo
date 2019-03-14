$.ajax({
 url: "http://localhost:80/pay",
 dataType: "jsonp",
 success: function( response ) {
     alert(response)
 }
 })
// 原生api操作cookie
//  $('#set').click(function(){
//     // 存cookie
//     document.cookie = 'name=lucy'
//     document.cookie = 'psw=123456'
// })
// $('#get').click(function(){
//     // 取cookie;字符串
//     var allcookies = document.cookie
//     console.log(allcookies)
// })


// jquery-cookie插件关于cookie操作

$('#set').click(function(){
    // 存cookie
    $.cookie('class','h5-15')
    $.cookie('date','2017-1-5')
    $.cookie('number',7)
    // cookie中不能存储复杂对象；
    // 可以把对象转化为字符串再存储
    var obj = {
        age:26,
        tel:'13383839248'
    }
    // 把对象序列化为字符串
    var objStr = JSON.stringify(obj)
    console.log(objStr)
    $.cookie('obj',objStr)

    //没设置有效期，存储的都是会话cookie；
    // 会话：浏览器关闭，就清除了;(注意不是关闭标签页)

    // 持久化cookie
    // expire:有效期
    //expires:number|date 
    // number:以天为单位，有效期
    // date:日期，失效日期
    $.cookie('love','music',{expires:7})
    var date =new Date(2017,11,10)
    console.log(date)
    $.cookie('like','ball',{expires:new Date(2017,11,10)})
})
$('#get').click(function(){
    // 取cookie;取出来是字符串
    var cla = $.cookie('class')
    console.log(cla)
    // 存的是数字，取出来依旧是字符串
    var num = $.cookie('number') 
    console.log(num)
    // 转化为数字
    num = parseInt(num)

    // 取出来之后，再转化为对象
    var obj = $.cookie('obj')
    obj = JSON.parse(obj)
    console.log(obj)


    // 取出所有的cookie；是一个对象
    var allCookie = $.cookie()
    console.log(allCookie)
   
})
$('#remove').click(function(){
    // 删除cookie
    $.removeCookie('love')
})

//cookie 可以用来存储少量的数据，最多不能超过4k;
//cookie会主动随着请求发往服务端；
//因此cookie一般不能存储重要数据，也不能存储过多数据；


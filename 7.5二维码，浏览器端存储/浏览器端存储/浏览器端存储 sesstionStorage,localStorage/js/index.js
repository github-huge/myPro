// localStorage:本地存储；持久化存储，浏览器关闭，依旧存在
// sessionStorage：会话存储，浏览器只要关闭，就消失；
// 这两种存储方式，api一模一样
$('#set').click(function(){
    // 存储
    sessionStorage.setItem('name','lucy')
    sessionStorage.setItem('age',27)
})
$('#get').click(function(){
    var name = sessionStorage.getItem('name')
    console.log(name)
    var age = sessionStorage.getItem('age')
    console.log(age)
})
$('#remove').click(function(){
    // 删除
   sessionStorage.removeItem('name')
})

$('#clear').click(function(){
    // 清空存储的内容
   sessionStorage.clear()
})
// storage的存储，不会随着请求发送到服务端
// 各个浏览器支持的存储容量也不一致，大概在5M左右；





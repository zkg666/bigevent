// 定义一个对象存储的是封装的功能
var user = {
    //第一ajax请求功能，判断登录名密码正确否
    login:function(userName,password,callback){
        //提交ajax请求
        $.ajax({
            url:'http://localhost:8000/admin/login',
            type:'post',
            data:{user_name:userName,password:password},
            success:function(res){
              callback(res);
            }
        })
    }   
}
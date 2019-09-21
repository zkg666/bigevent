// 定义一个对象存储的是封装的功能
var user = {
    //第一个ajax请求功能，判断登录名密码是否正确的功能
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
    },   
    //第二个ajax请求功能，进行管理员退出功能
    logout:function(callback){
        $.ajax({
            url:'http://localhost:8000/admin/logout',
            type:'post',
            success:function(res){
                callback(res);
            }
        })
    },
    //第三个ajax请求功能，获取用户信息的功能
  
}
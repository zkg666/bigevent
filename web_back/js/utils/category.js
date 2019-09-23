/**
 * 关于文章类型的方法
 */
var category = {
    //获取文章
    search:function(callback){
        $.ajax({
            url:url.search,
            type:'get',
            success:function(res){
                callback(res);
            }
        })
    }

}
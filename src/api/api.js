const api={
    http:{},
    post:function(url,json,sucess,fail){
        //发送 post 请求
        this.http.post(url,json,{emulateJSON:true}).then(sucess,fail);
    }
}
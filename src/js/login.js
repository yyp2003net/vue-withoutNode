const login={
    template:'\
      <el-form label-position="left" label-width="50px"  class="loginForm login-container">\
          <h3 class="title">登入系统</h3>\
          <el-form-item label="账户" prop="account">\
            <el-input auto-complete="off" v-model="login.username" placeholder="帐号">\
            </el-input>\
          </el-form-item>\
          <el-form-item label="密码" prop="psw">\
            <el-input type="password" v-model="login.password" auto-complete="off" placeholder="密码">\
            </el-input>\
          </el-form-item>\
          <el-form-item style="width:100%;">\
            <template slot-scope>\
            <el-button type="primary" style="width:100%" @click="login.confirm(vm)">登录</el-button>\
            </template>\
          </el-form-item>\
      </el-form>\
    ',
    username:"",
    password:"",
    clear:function(){
      this.username="";
      this.password="";
    },
    confirm:function(vm){
      var that=this;
      var url='xxx';
      vm.api.post(url,{username:this.username,password:this.password},
      function(res){
          that.clear()
          vm.logged=true;
          vm.$router.push('/');
      },
      function(res){
        vm.logged=false;
      });
    }
}
Vue.component('x-menu', {
    props: {logged:Boolean},
    template: '<el-menu v-if="logged" class="el-menu" mode="horizontal" background-color="#545c64" text-color="#fff">\
    <el-submenu index="1">\
    <template slot="title">我的工作台</template>\
    <el-menu-item>\
        <router-link to="/article" active-class="active-text">文章管理</router-link>\
    </el-menu-item>\
    <el-menu-item>\
        <router-link to="/login" active-class="active-text">退出</router-link>\
    </el-menu-item>\
    </el-submenu>\
    </el-menu>'
  })

const router = new VueRouter({
    routes: [
        {   
            name:'home',
            meta:{
                login_required:true
            },
            path: "/", 
            component: {
                    template:'<div>首页</div>'
            }
        },
        {   
            name:'article',
            meta:{
                login_required:true
            },
            path: "/article", 
            component: {
                    template:'<div>文章管理</div>'
            }
        },
        { 
            name:'login',
            path: "/login", 
            component: {
            template:login.template
    }},
    ]
});
router.beforeEach(function(to, from, next){
    var tonext=true;
    if(to.matched.some(function(item){
                return item.meta.login_required;
    })){
        tonext=this.vm!=undefined? this.vm.logged:false;
    }
    else if(to.name=="login"){
        if(this.vm!=undefined)
            this.vm.logged=false;
    }
    if(tonext){
        next();
    }
    else{
        next('/login');
    }
})

var vm=new Vue({
    el: "#app",
    router: router,
    data:{
        logged:false,
        api:api,
        index:index,
        login:login        
        },
    created :function() {
        this.api.http=this.$http;
    },
    methods: {
        handleSelect:function(key, keyPath) {
            console.log(key, keyPath);
        }
    }
});


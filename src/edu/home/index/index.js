
import Vue from 'vue'
import App from './indexApp.vue'
import resource from 'vue-resource'
import VueRouter from 'vue-router'

import Course from './course'



const routes = [
    { path: '/', component: App },
    { path: '/course', component: Course }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes:routes
});
Vue.use(resource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://192.168.1.101:8080/edu';
new Vue({
    el:'#a',
    data:{
        courses:[],
        courseNum:0
    },
    router:router,
    methods: {
        //获取全部课程
        getAllCourses(){
            this.$http.get('courses').then(function (response) {
                this.courses = response.data;
                this.coursesNum = this.courses.length;
            },function (err) {
                console.log(err);
            })
        },
    },
    //已成功挂载，相当ready()
    mounted(){
        this.getAllCourses();
    },
    components:{
        App,Course
    }
});

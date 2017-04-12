
import Vue from 'vue'
import App from './indexApp.vue'
import resource from 'vue-resource'
Vue.use(resource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://192.168.1.101:8080/edu';
new Vue({
    el:'#a',
    data:{
        courses:[],
        courseNum:0
    },

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
    //已成功挂载，相当ready()ABC的
    mounted(){
        this.getAllCourses();
    },
    components:{
        App
    }
});

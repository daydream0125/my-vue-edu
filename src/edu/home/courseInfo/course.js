
import Vue from 'vue'
import App from './course.vue'
import resource from 'vue-resource'
Vue.use(resource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://192.168.1.101:8080/edu';
new Vue({
    el:'#a',
    data:{

    },

    methods: {


    },
    //已成功挂载，相当ready()
    mounted(){

    },
    components:{
        App
    }
});

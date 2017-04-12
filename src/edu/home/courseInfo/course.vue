<template>
    <div id="app">
        <vb></vb>
        <h1 style="color: #1b6d85">课程详情</h1>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import Vb from 'components/head'
    import Vue from 'vue'
    import resource from 'vue-resource'
    Vue.use(resource);
    Vue.http.options.emulateJSON = true;
    Vue.http.options.root = 'http://192.168.1.101:8080/edu';
    //test
    export default {
        props: ['courses'],
        components: {Vb},
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate(){
        },
        //在挂载开始之前被调用
        beforeMount(){


        },
        //相关操作事件
        methods: {
            //截取课程的一部分
            sliceCourse(course, begin, end) {
                return course.slice(begin, end);
            },
            enter(index){
                return index % 3 === 0;
            }
        },
        //已成功挂载，相当ready()
        mounted(){
        },
        filters: {
            formatImgURL(courseId) {

                return "http://192.168.1.101:8080/edu/coursePhoto/" + courseId;
            }
        }
    }
</script>

<style>
    body {
        margin-top: 70px;
    }

    .index-course {
        margin-top: 20px;
        height: 400px;
        width: 100%;
        overflow: hidden;
    }

    .carousel-caption, h1 h2 h3 {
        font-family: Menlo;
    }

    .course-block {
        width: 350px;
        height: 450px;
        float: left;
        overflow: hidden;
    }

</style>

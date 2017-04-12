<template>
    <div id="app">
        <vb></vb>
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active index-course">
                    <div class="carousel-caption" style="color: black">
                        <h1>注册以关注更多课程内容</h1>
                        <button class="btn btn-lg btn-success">
                            立即注册


                        </button>
                    </div>
                </div>
                <div class="item index-course" v-for="course in sliceCourse(courses,0,2)">
                    <div class="carousel-caption" style="color: black">
                        <h1>{{course.courseName}}</h1>
                        <h3>
                            {{course.courseDescription}}
                        </h3>
                        <h2>开课老师：{{course.accountByTeacherId.name}}</h2>
                        <h3>时间：{{course.startTime}}--{{course.endTime}}</h3>
                        <button class="btn btn-lg btn-success">
                            立即参加


                        </button>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <br>
        <div class="container">
            <h1>全部课程</h1>
            <div class="col-md-4 course-block" v-for="(course,index) in courses">
                <div class="thumbnail" style="overflow: hidden;">
                    <img :src="course.courseId | formatImgURL" style="height: 235px">
                    <div class="caption" style="height: 210px;overflow: hidden">
                        <h3>{{course.courseName}}</h3>
                        <p>{{course.courseDescription}}</p>
                        <p><router-link to="/course">abc</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
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

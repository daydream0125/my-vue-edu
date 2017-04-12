<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">精准教育</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="">主页</a></li>
                        <li><a href="">课程管理</a></li>
                        <li><a href="">题库管理</a></li>
                        <li><a href="">作业管理</a></li>
                        <li><a href="">成绩管理</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                        <li><a href=""
                               class="btn btn-link"></a></li>
                        <li><a href="">注销</a></li>
                        <li><a href="">登录</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>
<script>
    import Lib from 'assets/js/Lib'
    export default {
        name:'head'
    }
</script>
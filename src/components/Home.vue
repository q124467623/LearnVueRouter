<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页的内容</p>
        <router-link to='/home/news' >新闻</router-link>
        <router-link to='/home/message'>消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return {
            message:'你好',
            path:'/home/news'
        }
    },
    //这两个组件对应的是<router-view/>
    created() { //组件创建完的时候回调
        console.log('home created')
    },
    destroyed() {
        console.log('home destroyed')
    },
    //这两个函数对应的是<keep-alive><router-view/></keep-alive>,
    //加了keep-alive后，created只执行一次，destroyed不执行
    activated() {
        console.log('home activated');
        this.$router.push(this.path)
    },
    deactivated() {
        console.log('home deactivated');
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave',this.$route.path);   //beforeRouteLeave /home/message
        this.path = this.$route.path;
        next()
    },
    
}
</script>

<style scoped>

</style>
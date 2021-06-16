<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户的内容</p>
        <h2>{{userId}}</h2>
        <h2>{{$route.params.id}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name:'User',
    created() { //组件创建完的时候回调
        console.log('User created')
        // document.title = '关于'
    },
    destroyed(){
        console.log('User destroyed')
    },
    computed:{
        userId(){
            return this.$route.params.id
        }
    },
    methods: {
        btnClick(){
            console.log(this.$route)
            console.log(this.$router)
        }
    },
}
</script>

<style scoped>

</style>
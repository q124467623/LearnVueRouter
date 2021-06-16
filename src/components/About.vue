<template>
    <div>
        <h2>我是关于</h2>
        <p>我是关于的内容</p>
        <button @click="btnClick">关于按钮</button>
    </div>
</template>

<script>
export default {
    name:'About',
    created() { //组件创建完的时候回调
        console.log('About created')
        // document.title = '关于'
    },
    destroyed(){
        console.log('About destroyed')
    },
    methods: {
        btnClick(){
            console.log('关于this.$route.path:',this.$route.path);
        }
    },
}
</script>

<style scoped>

</style>
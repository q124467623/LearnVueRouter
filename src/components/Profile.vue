<template>
    <div>
        <h2>我是profile组件</h2>
        <h2>{{$route.query}}</h2>
        <h2>{{$route.query.name}}</h2>
    </div>
</template>

<script>
export default {
    name:'Profile',
    created() { //组件创建完的时候回调
        console.log('Profile created')
        // document.title = '关于'
    },
    destroyed(){
        console.log('Profile destroyed')
    },
}
</script>

<style scoped>

</style>
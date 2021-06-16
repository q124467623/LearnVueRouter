<template>
  <div id="app">
    <router-link to='/home' tag="button">首页</router-link>
    <router-link to='/about' tag="button">关于</router-link>
    <router-link :to="'/user/'+id" tag="button">用户</router-link>
    <router-link to="/profile">我的</router-link>
    <router-link :to="{path:'/profile',query:{name:'ws',age:18,height:1.88}}">我的</router-link>
    <!-- <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button> -->

      <!-- <router-view/> -->
    
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      id:'lisi',
      // profile:'/profile'
    }
  },
  methods: {
    userClick(){
      this.$router.push('/user/'+this.id)
    },
    profileClick(){
      this.$router.push({path:'/profile',query:{name:'ws',age:18,height:1.88}})
    }
  },
}
</script>

<style>

</style>

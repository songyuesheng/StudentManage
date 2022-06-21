<template>
<div class="nav">
    <!-- <div class="line"></div> -->
      <el-menu
          router
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="/index">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的班级</template>
            <el-menu-item index="2-1">2020计应1班</el-menu-item>
            <el-menu-item index="2-2">2020计应2班</el-menu-item>
            <el-menu-item index="2-3" @click="jumpTo">2020计应9班</el-menu-item>
        </el-submenu>
          <el-menu-item @click="logout">注销</el-menu-item>
          <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
</div>
</template>




<script>
export default {
    name:"Nav",
    data(){
      return{
        islogin: true
      }
    },
    methods:{
      jumpTo(){
        this.$router.push('/StudentList')
      },
      logout(){
        this.islogin = false
        localStorage.removeItem("token")
        this.$router.push("/login")
      },
      checkIsLogin(){
        if(localStorage.getItem("token")){
          this.islogin=true
        }else{
          this.islogin=false
        }
      }
    },
    created(){
      this.checkIsLogin()
    }
}

</script>


<style>

</style>

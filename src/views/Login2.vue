<template>
    <div id="main">
        <div class="">
            <div class="root">
                <div class="root_1">
                    <h2 style="margin-bottom:10px;">欢迎注册</h2>
                    <el-input v-model="username" placeholder="请输入账号"></el-input>
                    <el-input v-model="password1" show-password placeholder="请输入密码"></el-input>
                    <el-input v-model="password2" show-password placeholder="确认密码"></el-input>
                    <el-row>
                        <el-button type="primary" @click="login" style="width:200px;">注册</el-button>
                        <a href="http://localhost:8080/#/login">已有账号去登录</a>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    name: "Login",
    data() {
        return {
            username: 'zhangsan',
            password1: '1234567',
            password2: '123'
        }
    },
    methods: {
        login() {
            axios({
                url: '/api/login',
                method: 'POST',
                data: { "username": this.username, "password": this.password }
            }).then(response => {
                localStorage.setItem("token", response.data.data.token)
                this.successInfo()
                this.$router.push('/index')

                console.log(response)
            })
        },
        successInfo() {
            this.$message({
                message: '登陆成功',
                type: 'success'
            });
        },
    }
}

</script>

<style>
#main {
    background: url(../assets/22.jpg);
    background-size: 100% 100%;
    background-attachment: fixed;
    height: 91.8vh;
    padding-top: 150px;
}

.root_1 {
    padding-top: 60px;
    text-align: center;
    margin: 0px auto;
    width: 340px;
    height: 280px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    line-height: 50px;
}

.root_1 a {
    color: black;
    font-size: 13px;
    position: absolute;
    right: 14px;
    top: 35px;
}

.root_1 a:hover {
    color: blue;
}
</style>
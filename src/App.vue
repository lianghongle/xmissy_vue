<template>
    <div id="layout">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <div v-if="this.isLogin">
            <!-- 登陆 -->
            <el-container style="height: 100%; border: 1px solid #eee;margin-top: 10px;">

                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                    <el-menu :default-openeds="['1']" router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>仪表盘</template>
                            <el-menu-item index="/system/index">日报</el-menu-item>
                        </el-submenu>
                    </el-menu>

                    <el-menu :default-openeds="[]" router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>用户</template>
                            <el-menu-item index="/user/list">用户列表</el-menu-item>
                        </el-submenu>
                    </el-menu>

                    <el-menu :default-openeds="[]" router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统</template>
                            <el-menu-item index="/admin/list">管理员</el-menu-item>
                            <el-menu-item index="/auth/index">权限</el-menu-item>
                        </el-submenu>
                    </el-menu>

                </el-aside>

                <el-container>
                    <el-header style="text-align: right; font-size: 12px">
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                        <el-dropdown>
                            <span>王小虎</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>我的</el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="logout">退出</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-header>

                    <el-main>
                        <router-view></router-view>
                    </el-main>

                </el-container>
            </el-container>
        </div>
        <div v-else>
            <!--未登录-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            logout() {
                this.$store.dispatch('logout')
                // this.$router.push({name:'Login'})
                self.location="/";
            }
        },
        computed:{
            isLogin(){
                console.log(this.$store.getters.isLogin)
                return this.$store.getters.isLogin
            }
        }
    }
</script>

<style>
    .el-container {
        height: 100%;
        min-height: 600px;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

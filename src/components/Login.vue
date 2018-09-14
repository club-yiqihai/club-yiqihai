<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
<div id="login">
    <div><h2>用户登陆</h2></div>
    <div style="margin-top: 6px">
        <Input prefix="ios-contact" placeholder="用户名" style="width: auto" size="large" :clearable="true"/>
    </div>
    <div style="margin-top: 6px">
        <Input prefix="md-key" type="password" placeholder="密码" style="width: auto" size="large" :clearable="true"/>
    </div>
    <div style="margin-top: 6px">
        <Button type="success" @click="login()" style="width: 211px">登陆</Button>
    </div>
</div>
</template>
<script src="http://www.lmlblog.com/winter/templets/xq/js/snowy.js"></script>
<script src="http://www.lmlblog.com/blog/14/js/Snow.js"></script>
<script>
    export default {
        methods: {
            login(){
                this.$router.push({path:'/home'});
            }
        }
    }
</script>

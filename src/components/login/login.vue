<template>
	<div>
	  <div>用户名<input type="text" v-model="username"/></div>
      <div>密码:<input type="password" v-model="password"/></div>
      <div><input type="submit" value="登陆" v-on:click="login"/></div>
	</div>
</template>
<script>
	import Vue from 'vue';
	export default {
		name: 'login',
		mounted:function(){
            console.log(ENV_URL);
  			Vue.http.options.emulateJSON = true;
            
		},
		methods:{
			 login:function(){
			 	
                var that = this;
                // this.$http.post(
                //         '/thnkphp-demApp/index.php/Admin/Login/check',
                //         {
                //             username:that.username,password:that.password
                //         }
                // ).then(function(response){
                // 	console.log(response)
                //     // 响应成功回调
                //     //window.location.href="/activity.html"
                // }, function(response){
                //     // 响应错误回调
                // });
                this.$http.post(
                        '/Account/UserLoginByPassword',
                        {
                            CallingCode:"86",
                            mobile:that.username,
                            password:that.password
                        }
                ).then(function(response){
                    console.log(response)
                    // 响应成功回调
                    //window.location.href="/activity.html"
                }, function(response){
                    // 响应错误回调
                });
            }
		}
	}
</script>
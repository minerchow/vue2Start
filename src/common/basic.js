import Cookie from 'cookie_js';
import Vue from 'vue';
import vueResource from 'vue-resource';

Vue.use(vueResource);
export default {
	loginStatus:false,
	username:"",
	mounted:function(){
		
		//Vue.http.options.emulateJSON = true;
	},
	checkLogin:function(){
		var that = this;
		
		// if(!Cookie.cookie.get('login')){
  //           window.location.href="/login.html";

  //       }
  //       else{
        	
  //           that.loginStatus =  true;
  //           that.username = Cookie.cookie.get('login');
  //       }
   				Vue.http.post(
                        '/Account/UserLoginStatus'
                        
                ).then(function(response){
                	console.log(response)
                    if(!response.body.success){
                    	console.log(1)
                    //	window.location.href="/login.html";
                    }else{
                    	console.log(2)
                    	that.loginStatus =  true;
                    }
                }, function(response){
                    // 响应错误回调
                });

	}
}
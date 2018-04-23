<template>
  <div>
      <User :name="loginUserName" @onPropsChange="change"></User>
     
    	<Display></Display>	
    	<Count></Count>
      <div>{{items}}</div>
    	<router-link to="/a">/foo</router-link>
	    <router-link :to="{name:'componentb', params: { id: 123 }}">/bar</router-link>
	    <transition name="fade">
	    <router-view :item="items"></router-view>
	    </transition>
  </div>
</template>

<script>

  import Display from './components/index/display';
  import Count from './components/index/count';
  import store from './store/store';
  import Basic from './common/basic';
  import User from './components/user/user';
  import Util from './common/util';


	export default {
  name: 'app',
  store,	
  components: {
    Display,
    Count,
    User
  },
  
  mounted:function(){
    var that = this;
    Basic.checkLogin();
    
    if(Basic.loginStatus){
      that.loginUserName = Basic.username;
    }
    console.log(Util.formatTime("yyyy-MM-dd hh:mm:ss.S"));

  },
  data:function(){
      return {
        items:"props传递数据",
        loginUserName:""
      }
    },
    methods:{
      change:function(propName,newVal,oldVal){
         this[propName]=newVal;
         console.log("组件tab的" +propName+ "属性变更为" +newVal);
      } 
    }
};
</script>
<style lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
  -webkit-transition:all 1s ease-in-out;
    opacity:0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transition:all 1s ease-in-out;
    opacity:0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
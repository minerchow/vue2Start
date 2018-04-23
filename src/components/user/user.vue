<template>
    <div>
    <div>用户名：{{p_name}}</div>
    <div  v-on:click="setActive()">改变用户名</div>
    </div>
</template>
<script>
    import propsync from '../common/propsSync.js';
    export default {
        data:function(){
            return {
                username:"",
                login:''
            }
        },
        mixins: [propsync],
        props:{
            name:''
        },
        ready:function(){
            var that = this;
            //that.username = cookie.get('login');
        },
         methods: {
            setActive(page, index, e) {
            this.p_name = "22222";//可以直接使用this.p_active
        }
  }
    }
</script>
<template>
    <div>
        这是组件A {{item}} {{text}}
        <div v-on:click="changeTXt()">点击改变</div>
    </div>
</template>

<script>
   
    export default {
        name: 'componentA',
        data:function(){
        	return {
        		text:"ee",
        		
        	}
        	
        },

        props:{
            item:{
            	
            }
        },
        methods:{
        	changeTXt:function(){
        		this.text="改变后的数据";
                
        	}
        }
    };
</script>

<style>
</style>
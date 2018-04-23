<template>
    <div>
        这是组件B
    </div>
</template>

<script>
    export default {
        name: 'componentB',
        props:{
            item:''
        },
    };
</script>

<style lang="less" scoped>
div{
	color: #ff0000;
}
</style>
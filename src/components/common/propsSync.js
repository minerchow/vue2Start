
const emitPropsChangeName = "onPropsChange";
/**
 * 【配置】
 * 可在组件属性中定义当前props是否参加本mixin实现双向绑定。
 */
const isEnableName = "propsync";
/**
 * 【配置】
 * 根据prop的名称生成对应的data属性名，可自行修改生成后的名称。
 * 默认为在prop属性名前面增加"p_"，即若prop中有字段名为"active"，则自动生成名为"p_active"的data字段
 *
 * @param {string} propName 组件prop字段名称
 * @returns {string} 返回生成的data字段名
 */
function getDataName(propName) {
    //注意：映射后名称不能以 $ 或 _ 开头，会被vue认定为内部属性！！
    return "p_" + propName;
}
export default {
    //修改data，自动生成props对应的data字段
    data: function () {
        var data = {};
        var that = this;
        /** 所有组件定义的props名称数组 */
        var propsKeys = Object.keys((that.$options.props) || {});
        propsKeys.forEach(function (prop, i) {
            var dataName = getDataName(prop);
            var isEnable = that.$options.props[prop][isEnableName];
            isEnable = (typeof isEnable === "boolean") ? isEnable : true;
            if (!isEnable)
                return;
            //若使用mixins方法导入本代码，则本函数会 先于 组件内data函数执行！
            data[dataName] = that[prop];
        });
        return data;
    },
    created: function () {
        var that = this;
        /** 所有 取消props的watch监听函数 的数组 */
        var unwatchPropsFnArr = [];
        /** 所有 取消data的watch监听函数 的数组 */
        var unwatchDataFnArr = [];
        /** 所有组件定义的props名称数组 */
        var propsKeys = Object.keys((that.$options.props) || {});
        propsKeys.forEach(function (prop, i) {
            var dataName = getDataName(prop);
            var isEnable = that.$options.props[prop][isEnableName];
            isEnable = (typeof isEnable === "boolean") ? isEnable : true;
            if (!isEnable)
                return;
            //监听所有props属性
            var propsFn = that.$watch(prop, function (newVal, oldVal) {
                that[dataName] = newVal; //将组件外变更的prop同步到组件内的p_prop变量中
            }, {});
            unwatchPropsFnArr.push(propsFn);
            //[监听所有属性映射到组件内的变量]
            var dataFn = that.$watch(dataName, function (newVal, oldVal) {
                that.$emit(emitPropsChangeName, prop, newVal, oldVal); //将组件内p_prop通知给组件外(调用方)
            }, {});
            unwatchDataFnArr.push(dataFn);
        });
    },
    destroyed: function () {
        
    }
};


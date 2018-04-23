
export default {
	formatTimeObjBySeconds:function(second){
		 var retVal = {};
	    //retVal.milliSecond = milliSecond % 1000;
	    //milliSecond = Math.floor(milliSecond / 1000);
	    retVal.second = second % 60;
	    second = Math.floor(second / 60);
	    retVal.minute = second % 60;
	    second = Math.floor(second / 60);
	    retVal.hour = second % 24;
	    retVal.day = Math.floor(second / 24);
	    return retVal;
	},
	/**
	**从浏览器获取参数
	*/
	getValueFromHrefByKey:function(key){
		var sHref = window.location.href;
    //取出不带＃的URL
	    sHref = sHref.split('#')[0];
	    var args = sHref.split("?");
	    var retval = "";
	    /*参数为空*/
	    if(args[0] == sHref){
	        return retval; /*无需做任何处理*/
	    }
	    var str = args[1];
	    args = str.split("&");
	    for(var i = 0; i < args.length; i++ ) {
	        str = args[i];
	        var arg = str.split("=");
	        if(arg.length <= 1) continue;
	        if(arg[0] == key) retval = arg[1];
	    }
	    
	    return retval;
	},
	/**
	 * @public
	 * 计算和当前时间的差值，返回一个统一的时段描述，"刚刚", "几小时前","几天前"，大于7天，则显示正常的日期
	 * @second:int 以秒为单位的时间
	 * @return String
	 */
	getDeltaTimeDisplay:function(second){
		    var date = new Date( );
		    var deltaSecond =  Math.floor(date.getTime( ) / 1000) - second;
		    if(deltaSecond < 3600){
		        //少于1小时，都算刚刚
		        return "刚刚";
		    }else if(deltaSecond < 3600 * 24){
		        //少于24小时
		        return Math.floor(deltaSecond / 3600) + "小时前";
		    }else if(deltaSecond < 3600 * 24 * 7) {
		        //少于7天
		        return Math.floor(deltaSecond / (3600 * 24)) + "天前";
		    }else{
		        var date = new Date(second * 1000);
		        return (date.getMonth() + 1)  + "月" +  date.getDate() + "日";
		    }
	},
	//距离1970年1月1日8时零分零秒的时间
	formatTimeStrBySeconds:function(second){
		var timeObj = this.formatTimeObjBySeconds(second);
	    var retVal = "";
	    for(var key in timeObj){
	        if(timeObj[key] < 10){
	            timeObj[key] = '0' + timeObj[key];
	        }
	    }
	    if(timeObj.day > 0){
	        retVal += (timeObj.day + '天');
	    }
	    retVal += (timeObj.hour + '时');
	    retVal += (timeObj.minute + '分');
	    retVal += (timeObj.second + '秒');
	    return retVal;
	},
	//日期时间格式化 传入millionSecond毫秒 time:yyyy-MM-dd hh:mm:ss.S
	formatTime:function(time,millionSecond){
		var fDate = '';
		if(millionSecond){
			fDate = new Date(millionSecond);
		}
		else{
			fDate = new Date();
		}
		var o = {
            "M+": fDate.getMonth() + 1,
            "d+": fDate.getDate(),
            "h+": fDate.getHours(),
            "m+": fDate.getMinutes(),
            "s+": fDate.getSeconds(),
            "q+": Math.floor((fDate.getMonth() + 3) / 3),
            "S": fDate.getMilliseconds()
        };
        if (/(y+)/.test(time)){
            time = time.replace(RegExp.$1, (fDate.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o){
            if (new RegExp("(" + k + ")").test(time)){
                time = time.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return time;
	}
	
}
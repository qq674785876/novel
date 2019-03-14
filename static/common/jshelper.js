(function() {
    'use strict';

    function getUrlQuery(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            try {
                return decodeURI(r[2]);
            }
            catch (res){
                return unescape(r[2]);
            }
        }
            
        return null;
    }

    //弹窗显示指令成功或者失败的状态
    function comStatus(promptName) {
        $(promptName).slideDown(200);
        setTimeout(function () {
            $(promptName).slideUp(200);
        }, 3000);
    } 

    //获取中英文字符长度，截取指定长度字符显示
    function cutStr(str, len) {
        var str_length = 0;

        if (str == null || str == "" || str.length == 0 || str == undefined) return "";
        if (str == '未填写品牌') return str;

        var str_cut = new String();
        for (var i = 0; i < str.length; i++) {
            var a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4  
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；  
        if (str_length < len) {
            return str;
        }
    }

    /**
	 *! 确认框封装
	 *! 调用例子：
	 *! 打开：shared.cfm.open('确定要提交吗？');
	 *! 关闭：shared.cfm.close();
	 */
    var cfm = (function() {
        var $cfm = null, $content = null;

        return {
            open: open,
            close: close
        }

        function init_cfm_ele() {
            var html = [];
            html.push('<div class="m-confirm-bg"></div>');
            html.push('<div class="m-confirm-container">');
            html.push('<div class="m-confirm-msg"></div>')
            html.push('<div class="m-confirm-btn">');
            html.push('<div class="m-confirm-btn-cols1">');
            html.push('<button type="button" class="m-btn m-btn-info m-btn-block" onclick="shared.cfm.close()">关闭</button>');
            html.push('</div>');
            html.push('<div class="m-confirm-btn-cols2">');
            html.push('<button type="button" class="m-btn m-btn-info m-btn-block">我的主页</button>');
            html.push('</div>');
            html.push('</div>');
            html.push('</div>');
            $('body').append(html.join(''));
        }

        function open(text) {
            if($cfm === null)
                init_cfm_ele();
            $cfm = $(".m-confirm-bg");
            $content = $(".m-confirm-container");

            $('.m-confirm-msg', $content).text(text);
            $cfm.show();
            $content.show();
        }

        function close() {
            if($cfm !== null) 
                $cfm.hide();
            if($content !== null)
                $content.hide();
        }

    }());

    /*loading加载方法*/

    var loading = (function () {
        var $loading = null, $content = null;

        return {
            open: open,
        }

        function init_loading_ele() {
            var html = [];
            html.push('<div class="m-confirm-bg"></div>');
            html.push('<div class="loading">');
            html.push('<div class="loading-img"><img src="../cgi-bin/images/loading.gif" /></div><div class="loading-text">正在查询</div>');
            html.push('</div>');
            $('body').append(html.join(''));
        }


        function open(text) {
            if ($loading === null)
                init_loading_ele();
            $loading = $(".m-confirm-bg");
            $content = $(".loading");

            $('loading-text', $content).text(text);
            $loading.show();
            $content.show();

        }

    }());

    //手机提示框
    function getPrompt(text, time) {
        $('#promptBox').remove();
        if ($('#promptBox').length == 0) {
            $('body').append('<div id="promptBox" style="display: none;">' + text + '</div>');
            $('#promptBox').css({
                position: 'fixed',
                top: '40%',
                transform: 'translate(-50%)',
                'width': '50%',
                'text-align': 'center',
                padding: '20px 20px',
                left: '50%',
                'background-color': 'rgba(0,0,0,.5)',
                color: '#fff',
                'border-radius': '8px',
                'z-index': 999
            });
        } else {
            $('#promptBox').text(text);
        }
        $('#promptBox').fadeIn(600);
        setTimeout(function () {
            $('#promptBox').fadeOut(600);
        }, time ? time : 3000)
    }

    /*获取照片和视频方法*/

    var photoCapture = (function () {
        var $photoCapture = null, $content = null;

        return {
            open: open,
        }

        function init_photoCapture_ele() {
            var html = [];
            html.push('<div class="m-confirm-bg"></div>');
            html.push('<div class="photoCapture">');
            html.push('<div class="photoCapture-text"></div>');
            html.push('</div>');
            $('body').append(html.join(''));
        }


        function open(text) {
            if ($photoCapture === null)
                init_photoCapture_ele();
            $photoCapture = $(".m-confirm-bg");
            $content = $(".photoCapture");

            $('.photoCapture-text', $content).text(text);
            $photoCapture.show();
            $content.show();

        }

    }());

    //得到方向值 
    function getDirectDescript(direct) {
        if ((direct >= 0 && direct <= 22) || (direct >= 338 && direct <= 360)) {
            return "正北";
        } else if (direct >= 23 && direct <= 67) {
            return "东北";
        } else if (direct >= 68 && direct <= 112) {
            return "正东";
        } else if (direct >= 113 && direct <= 157) {
            return "东南";
        } else if (direct >= 158 && direct <= 202) {
            return "正南";
        } else if (direct >= 203 && direct <= 247) {
            return "西南";
        } else if (direct >= 248 && direct <= 292) {
            return "正西";
        } else if (direct >= 293 && direct <= 337) {
            return "西北";
        } else {
            return "正北";
        }
    }

    /**
	 *! 信息框封装，用于显示详细地址为主
	 *! 调用例子：
	 *! 打开：shared.msg.open('河北省衡水市桃城区...');
	 *! 关闭：shared.msg.close();
	 */
    var msg = (function() {
        var $msg = null, $content = null;

        return {
            open: open,
            close: close
        }

        function init_msg_ele() {
            var html = [];
            html.push('<div class="m-confirm-bg"></div>');
            html.push('<div class="m-confirm-container">');
            html.push('<div class="m-confirm-msg"></div>');
            html.push('<div class="m-confirm-btn">');
            html.push('<div class="m-row">');
            html.push('<div class="m-col-1"></div>');
            html.push('<div class="m-col-10">');
            html.push('<button type="button" class="m-btn m-btn-info m-btn-block" onclick="shared.msg.close()">关闭</button>');
            html.push('</div>');
            html.push('<div class="m-col-1"></div>');
            html.push('</div>');
            html.push('</div>');
            html.push('</div>');
            $('body').append(html.join(''));
        }

        function open(text) {
            if($msg === null)
                init_msg_ele();
            $msg = $(".m-confirm-bg");
            $content = $(".m-confirm-container");

            $('.m-confirm-msg', $content).text(text);
            $msg.show();
            $content.show();
        }

        function close() {
            if($msg !== null) 
                $msg.hide();
            if($content !== null)
                $content.hide();
        }

    }());

    //打开等待提示窗口
    var loadCfm = (function() {
        var $cfm = null, $content = null;

        return {
            open: open,
            close: close
        }

        function init_cfm_ele() {
            var html = [];
            html.push('<div class="m-confirm-bg"></div>');
            html.push('<div class="m-confirm-loading">');

            html.push('<div style="float: left;margin-top: 11px;margin-left: 10px;"><img src="../cgi-bin/images/loading.gif" /> </div>');
            html.push('<div class="m-loading-msg">正在处理中...</div>');
            html.push('</div>');
            $('body').append(html.join(''));
        }

        function open(text) {
            if($cfm === null)
                init_cfm_ele();
            $cfm = $(".m-confirm-bg");
            $content = $(".m-confirm-loading");

            //$('.m-loading-msg', $content).text(text);
            $cfm.show();
            $content.show();
        }

        function close() {
            if($cfm !== null) 
                $cfm.hide();
            if($content !== null)
                $content.hide();
        }

    }());

    var timehelper = (function() {

        return {
            getTimeSpaceHHMM: getTimeSpaceHHMM,
            getTimeFormatMDHM: getTimeFormatMDHM
        };

        /**
    	 *! 获取一段时间的时长
    	 *# 参数格式(start_time/end_time)：2015-05-01 07:06:06
    	 *# 注意：end_time > start_time
    	 *! 返回格式：HH:mm
    	 */
        function getTimeSpaceHHMM(start_time, end_time) {
            var st = start_time.split(' ');
            var et = end_time.split(' ');
            var ar_ds = st[0].split('-');
            var ar_ts = st[1].split(':');
            var ar_de = et[0].split('-');
            var ar_te = et[1].split(':');
            var ds = new Date(ar_ds[0], ar_ds[1] - 1, ar_ds[2], ar_ts[0], ar_ts[1]);
            var de = new Date(ar_de[0], ar_de[1] - 1, ar_de[2], ar_te[0], ar_te[1]);

            var miss = de.getTime() - ds.getTime();
            var hhmm = [];
            var hh = (miss / 3600000).toFixed(0);
            var mm = ((miss % 3600000) / 60000).toFixed(0);
            hhmm.push(hh < 10 ? '0' + hh : hh);
            hhmm.push(mm < 10 ? '0' + mm : mm);

            return hhmm.join(':');
        }

        /**
    	 *! 返回简略的日期时间格式
    	 *# 参数格式(date_time)：2015-05-01 07:06:06
    	 *! 返回格式：MM-dd HH:mm
    	 *! 如：05-01 07:06
    	 */
        function getTimeFormatMDHM(date_time) {
            var t = date_time.split(' ');
            var md = t[0].split('-');
            var hm = t[1].split(':');
            return md[1] + '-' + md[2] + ' ' + hm[0] + ':' + hm[1];
        }

    }());

    function getMyLocation(callBackCurPosition){
        var options = {
            enableHighAccuracy: true, 
            maximumAge: 3000
        }
        if(navigator.geolocation){
            //浏览器支持geolocation
            navigator.geolocation.getCurrentPosition(callBackCurPosition, callBackonError, options);
        }else{
            //浏览器不支持geolocation
        }
    }

    function callBackonError(error) {
        switch(error.code){
            case 1:
                alert("位置服务被拒绝");
                break;
            case 2:
                alert("暂时获取不到位置信息");
                break;
            case 3:
                alert("获取信息超时");
                break;
            case 4:
                alert("未知错误");
                break;
        }
    }

    //使用百度地图定位
    function getMyLocationBMap() {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {

                var point = mapapi.g_position(r.point.lng, r.point.lat);
                mapapi.me.get_me_location(point);

                $("#hidLng").val(r.point.lng);
                $("#hidLat").val(r.point.lat);

                return r.point.lng + ',' + r.point.lat;
            }else {
                //获取不到本地位置
                alert("暂时获取不到位置信息");
            }
        },
        {
            enableHighAccuracy: true
        });
    }

    // 保留小数点后几位
    function disposeNumber(data, subcount){
        if(data == null || data == ""){
            return 0;
        }else if(data.toString().indexOf(".") == -1){
            return data;
        }else{
            return round(data, subcount);
        }
    }

    function round(v,e){
        var t=1;
        for(;e>0;t*=10,e--);
        for(;e<0;t/=10,e++);
        return Math.round(v*t)/t;
    }

    function setSelIndex(obj, val){
        for(var i=0; i<obj.length; i++){
            if(obj.options[i].value === val){
                obj.selectedIndex = i;
                break;
            }
        }
    }

    function getOptionTextByVal(objSlt, val){
        var sltText = "";
        for(var i=0; i<objSlt.length; i++){
            if(objSlt.options[i].value === val){
                sltText = objSlt.options[i].text;
                break;
            }
        }
        return sltText;
    }

    // 解析地址接口
    function analyze_insert_address(lon, lat, path, element) {
        var url = path + 'api/GeoCoding';
        $.get(url, { lon: lon, lat: lat }).
		done(function(data) {
		    if(data === null || data === '' || data === 'undefined')
		        return;
		    if(data.error !== 0)
		        return;
		    $(element).text(data.result);
		})
		.fail(function() {
		    console.log('error');
		});
    }

    //判断经纬度是否合法
    function isCoordVaild(x) {
        var flag = false;
        if(x !== null) {
            if(!isNaN(x)) {
                if(x <= 180 && x > -180 && x !== 0) {
                    flag = true;
                }
            }
        }
        return flag;
    }

    /*设置url跳转参数，加入、修改，参数：url本页面路径、q查询参数=objectId、key值*/
    function setUrlKey(url, q, key) {
        /*
        if(key=='undefined'){
            return url;
        }else{
            var param=getQuery(q); return param != null ? url.replace( q + '=' + escape(param), q + '=' + encodeURIComponent(key)) : url = url.indexOf('?') > 0 ? url + '&' + q + '=' + encodeURIComponent(key) : url + '?' + q + '=' + encodeURIComponent(key);
        }*/

        var newUrl = "";
        if (key == 'undefined') {
            newUrl = url;
        } else {
            var paramVal = getQueryFromSrc(url, q);
            if (paramVal != null) {
                newUrl = url.replace(q + '=' + escape(paramVal), q + '=' + encodeURIComponent(key));
            } else {
                if (url.indexOf('?') > 0) {
                    newUrl = url + '&' + q + '=' + encodeURIComponent(key);
                } else {
                    newUrl = url + '?' + q + '=' + encodeURIComponent(key);
                }
            }
        }

        return newUrl;
    }
    function getQueryFromSrc(src, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = src.split('?').length > 1 ? src.split('?')[1].match(reg) : null;
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    function map_bd2tx(lat, lon) {
        var tx_lat;
        var tx_lon;
        var x_pi = 3.14159265358979324;
        var x = lon - 0.0065, y = lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        tx_lon = z * Math.cos(theta);
        tx_lat = z * Math.sin(theta);
        return tx_lat + "," + tx_lon;
    }


    function GetAddr(lat, lng, spId) {

        //根据经纬度获取到地址
        var params = { pos: lng + "," + lat, isShort: "true" };
        $.ajax({
            type: "get",
            url: "http://open.u12580.com/api/v1/GeocoderV3",
            data: params
        }).done(function (msg) {
            if (msg != "") {
                $("#" + spId).html(msg);
            }
        });
    }

    //加载微信菜单项
    function loadWxMeunInfo(appid, sign) {

        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
            appId: appid, // 必填，公众号的唯一标识
            timestamp: 2015061616, // 必填，生成签名的时间戳
            nonceStr: '20150605032014', // 必填，生成签名的随机串
            signature: sign,// 必填，签名，见附录1
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
    }

    function Trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    }

    /**
       * 对象转url参数
       * @param {*} data
       * @param {*} isPrefix
       */
    function queryParams(data, isPrefix) {
        isPrefix = isPrefix ? isPrefix : false
        let prefix = isPrefix ? '?' : ''
        let _result = []
        for (let key in data) {
            let value = data[key]
            // 去掉为空的参数
            if (['', undefined, null].includes(value)) {
                continue
            }
            if (value.constructor === Array) {
                value.forEach(_value => {
                    _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
                })
            } else {
                _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
            }
        }

        return _result.length ? prefix + _result.join('&') : ''
    }

	/**
	 *! 定义全局函数对象
	 *! 调用：		$.fn(data, namespace);
	 *! data: 		[ [ 'map', map ], [ 'init', init ], [ 'setapp', setapp ] ]
	 *! namespace:  命名空间
	 */
	function fn(data, namespace) {
		var _count = data.length;
		window[namespace] = window[namespace] || {};
		for(var i=0; i<_count; i++) {
			window[namespace][ data[i][0] ] = window[namespace][ data[i][0] ] || data[i][1];
		}
	}
	
	fn([ 
		['fn', fn],
        ['Trim', Trim],
		['cfm', cfm],
		['getUrlQuery', getUrlQuery], 
		['cfm', cfm],
        ['loading', loading],
        ['photoCapture', photoCapture],
		['msg', msg],
        ['loadCfm', loadCfm],
        ['getMyLocation', getMyLocation],
        ['getMyLocationBMap', getMyLocationBMap],
        ['disposeNumber', disposeNumber],
        ['setSelIndex', setSelIndex],
        ['getOptionTextByVal', getOptionTextByVal],
        ['timehelper', timehelper],
        ['analyze_insert_address', analyze_insert_address],
        ['isCoordVaild', isCoordVaild],
        ['cutStr', cutStr],
        ['comStatus', comStatus],
        ['setUrlKey', setUrlKey],
        ['map_bd2tx', map_bd2tx],
        ['getDirectDescript', getDirectDescript],
        ['GetAddr', GetAddr],
        ['loadWxMeunInfo', loadWxMeunInfo],
        ['getPrompt', getPrompt],
        ['queryParams', queryParams]
	], 'jshelper');

}());

var shared = window['jshelper'];
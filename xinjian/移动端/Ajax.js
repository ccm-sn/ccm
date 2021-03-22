
function ajaxGet(url, fun) {
    //创建XMLHttpRequest对象
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //第二步向服务器发送请求
    xmlhttp.open("GET", url, true); //true异步 false同步
    xmlhttp.send();

    //接收回调数据 0: 请求未初始化
    // 1: 服务器连接已建立
    // 2: 请求已接收
    // 3: 请求处理中
    // 4: 请求已完成，且响应已就绪
    // 200: "OK"
    // 404: 未找到页面
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log();
            var obj = JSON.parse(xmlhttp.responseText)
            fun(obj);
        }
    }

}

function ajaxpost(url,str,fun){

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xmlhttp.open("POST", url, true); 
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("levelname=" + str.levelname);
  
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            fun(obj)
        }
    }
   }

$.fn.extend({
    vip2: function () {
        $(this).html(
            ' <button class="btn">登录</button>' +
            ' <div class="box">' +
            '  <div class="main"></div>' +
            '<div class="center">' +
            ' <div class="header">' +
            '   登录' +
            ' <span class="false">X</span>' +
            '   </div>' +
            ' <div>登录</div>' +
            ' </div>' +
            ' </div>')
        $(".btn").click(function () {
            $(".box").show();
        })
        $(".false").click(function () {
            $(".box").hide();
        })
    }
})
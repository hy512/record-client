
var subscribeResiz;

(function (doc, win) {
    // 订阅的数组和监听。
    var subscribe = [];
    subscribeResiz = function(fn) {
        subscribe.push(fn);
        return function() {
            var index = subscribe.indexOf(fn);
            subscribe.splice(index, 1);
        }
    }

    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            // console.log(clientWidth);
            if (!clientWidth) return;
            if (clientWidth <= 480)
                docEl.style.fontSize = 20 * (clientWidth / 360) + 'px';
            else docEl.style.fontSize = 20 * (480 / 360) + 'px';

            // 执行窗口监听订阅
            // for(var fn of subscribe) {
            //     fn(clientWidth);
            // }
            for (var p =0; p<subscribe.length; p++)
                subscribe[p](clientWidth);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);

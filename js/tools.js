/**
 * Created by 15173 on 2017/9/13.
 */

//获取页面滚动scrollTop以及scrollLeft
function getScroll(){
    return {
        scrollTop: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0,
    };
}
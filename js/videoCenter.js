/**
 * Created by 15173 on 2017/9/13.
 */

//遮罩层input单击事件
var inputs = document.getElementsByTagName("input");

$(inputs).focus(function () {
    $(this).parent().css("borderColor","#808080").siblings().children("input").css("borderColor","#3b3b3b");
});
$(inputs).blur(function () {
    $(this).parent().css("borderColor","#3b3b3b");
});


var close = document.getElementById("close");
var rem = document.getElementById("rem");
var flag = false;
var login = document.getElementById("loginHere");
var bigCover = document.getElementById("bigCover");
rem.onclick = function () {
      if(flag == false){
          rem.style.backgroundImage = "url('images/icons-login.png')";
          flag = true;
      }else {
          rem.style.backgroundImage = "";
          flag = false;
      }
};

$(close).click(function () {
    $(".bigCover").fadeOut(400);
});
//close.onclick = function () {
//    close.parentNode.parentNode.parentNode.style.display = "none";
//};

$(login).click(function () {
    $(bigCover).fadeIn(400);
});
//login.onclick = function () {
//      bigCover.style.display = "block";
//};

//顶部快捷方式下拉菜单开始
$('.shortcuts').mouseenter(function () {
    $(this).find('ul').stop().slideDown(300);
    $(this).css("background-color","rgba(0,0,0,.8)").siblings().css("background-color","rgba(0,0,0,0)");
    $(this).siblings().find('ul').stop().slideUp(300);
});
$('.header-shortcut').mouseleave(function () {
    $('.header-shortcut').find("ul").stop().slideUp(300);
    $(this).children(".shortcuts").css("background-color","rgba(0,0,0,0)");
});
//顶部快捷方式下拉菜单结束

//视频中心头部快捷方式鼠标移入事件
$(".homePageVideoShortcut a").mouseenter(function () {
    $(this).stop().animate({"background-position-y":"-100px"},150);
    $(this).siblings().stop().animate({"background-position-y":0},150);
});
$(".homePageVideoShortcut").mouseleave(function () {
    $(this).find("a").stop().animate({"background-position-y":0},150);
});

//点击事件
$(".homePageVideoShortcut a").eq(0).click(function () {
    $('html,body').animate({scrollTop:240},500);
});
$(".homePageVideoShortcut a").eq(1).click(function () {
    $('html,body').animate({scrollTop:1179},500);
});
$(".homePageVideoShortcut a").eq(2).click(function () {
    $('html,body').animate({scrollTop:1638},500);
});
$(".homePageVideoShortcut a").eq(3).click(function () {
    $('html,body').animate({scrollTop:2156},500);
});
$(".homePageVideoShortcut a").eq(4).click(function () {
    $('html,body').animate({scrollTop:2494},500);
});
$(".homePageVideoShortcut a").eq(5).click(function () {
    $('html,body').animate({scrollTop:3350},500);
});
$(".homePageVideoShortcut a").eq(6).click(function () {
    $('html,body').animate({scrollTop:3868},500);
});
$(".homePageVideoShortcut a").eq(7).click(function () {
    $('html,body').animate({scrollTop:4835},500);
});
$(".homePageVideoShortcut a").eq(8).click(function () {
    $('html,body').animate({scrollTop:4835},500);
});

//页面滚动固定视频中心头部快捷栏开始
var homePageVideoShortcut = document.getElementById("homePageVideoShortcut");
var homePageVideoNews = document.getElementById("homePageVideoNews");
document.onscroll = function () {
    var topLength = getScroll().scrollTop;
    if(topLength > 240){
        homePageVideoShortcut.style.position = "fixed";
        homePageVideoShortcut.style.marginTop = 0;
        homePageVideoNews.style.marginTop = "136px"
    }
    if(topLength <= 240){
        homePageVideoShortcut.style.position = "relative";
        homePageVideoShortcut.style.marginTop = "16px";
        homePageVideoNews.style.marginTop = "20px"
    }
}
//页面滚动固定视频中心头部快捷栏结束
//视频中心开始

//视频中心轮播图开始
var index = 0;
var timerID = null;
var flag = true;
$(".videoTitle > ul > li").click(function () {
    clearInterval(timerID);
    $(this).css("background-color","#ae3e00").siblings().css("background-color","#586e7a");
    $(".videoPlay > ul > li").eq($(this).index()).stop().fadeIn(600).siblings("li").stop().fadeOut(600);
    index = $(this).index();
    timerID = setInterval(function () {//重新启用计时器
        index++;
        if(index > 4){
            index = 0;
        }
        $(".videoTitle > ul > li").eq(index).css("background-color","#ae3e00").siblings().css("background-color","#586e7a");
        $(".videoPlay > ul > li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
    },3000);
});
//自动轮播
timerID = setInterval(function () {
    index++;
    if(index > 4){
        index = 0;
    }
    $(".videoTitle > ul > li").eq(index).css("background-color","#ae3e00").siblings().css("background-color","#586e7a");
    $(".videoPlay > ul > li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
},3000);
//进入显示播放样式图片
$(".videoPlay").mouseenter(function () {
    clearInterval(timerID);
    $(".videoPlay > ul > img").fadeIn(600);
});
//离开隐藏播放样式图片
$(".videoPlay").mouseleave(function () {
    timerID = setInterval(function () {//重新启用计时器
        index++;
        if(index > 4){
            index = 0;
        }
        $(".videoTitle > ul > li").eq(index).css("background-color","#ae3e00").siblings().css("background-color","#586e7a");
        $(".videoPlay > ul > li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
    },3000);
    $(".videoPlay > ul > img").fadeOut(600);
});
//视频中心轮播图结束

//视频排行榜模块开始
$(".homePageVideoRankingList .date li").click(function () {
    $(this).addClass("bgcForDate").siblings().removeClass("bgcForDate");
    $(".homePageVideoLists").eq($(this).index()).css("display","block").siblings(".homePageVideoLists").css("display","none");
})

$(".homePageVideoRankingList .homePageVideoLists li").mouseenter(function () {
    $(this).find("i").css("display","block").parent().siblings().children("i").css("display","none");
    $(this).find("a").css("color","#e74f12");
    $(this).find("b").css("background-position-y","-17px");
    $(this).siblings().find("b").css("background-position-y",0);
});
$(".homePageVideoRankingList .homePageVideoLists li").mouseleave(function () {
    $(this).find("a").css("color","#d5d5d5");
    //$(this).find("b").css("background-position-y",0);
});
//视频排行榜模块结束

//最新视频版块开始
//tab栏切换
$(".newVideo .newVideoBody .newVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(".newVideo .newVideoBody .newVideoBodyMains").eq($(this).index()).css("display","block").siblings(".newVideoBodyMains").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
});

//视频列表鼠标移入事件
$(".newVideo .newVideoBody .newVideoBodyMains li").mouseenter(function () {
     $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
     $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
     $(this).children(".videoPic").children("i").css("color","#e74f12");
     $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","scale(1.1)").parent().siblings().find("img").css("transform","scale(1)");
});

//移出事件
$(".newVideo .newVideoBody .newVideoBodyMains li").mouseleave(function () {
     $(this).children(".cover").stop().fadeOut(600);
     $(this).find("h5").css("color","#d5d5d5");
     $(this).children(".videoPic").children("i").css("color","#d5d5d5");
     $(this).find("img").css("transform","scale(1)");
});
//最新视频版块结束

//官方视频版块开始
//移入事件
$(".officialVideo .officialVideoBody .officialVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","scale(1.1)").parent().siblings().find("img").css("transform","scale(1)");
});

//移出事件
$(".officialVideo .officialVideoBody .officialVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","scale(1)");
});
//官方视频版块结束

//比赛视频版块开始
//tab切换
$(".gameVideo .gameVideoBody .gameVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".gameVideo .gameVideoBody .gameVideoBodyMains").eq($(this).index()).stop().slideDown(600).siblings(".gameVideoBodyMains").stop().slideUp(600);
});
//移入事件
$(".gameVideo .gameVideoBody .gameVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","rotate(360deg)").parent().siblings().find("img").css("transform","rotate(0deg)");
});

//移出事件
$(".gameVideo .gameVideoBody .gameVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","rotate(0deg)");
});
//比赛视频版块结束

//新手入门版块开始
//tab切换以及移入显示
$(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyMains").eq($(this).index()).stop().fadeIn(600).siblings(".greenhandVideoBodyMains").stop().fadeOut(600);
});
$(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyShortcut li").mouseenter(function () {
    $(this).children("b").css("display","block").parent().siblings().find("b").css("display","none");
});
$(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyShortcut li").mouseleave(function () {
    $(this).parent().find("b").css("display","none");
});

//移入事件
$(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
});

//移出事件
$(".greenhandVideo .greenhandVideoBody .greenhandVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
});
//新手入门版块结束

//进阶教学版块开始
$(".advanceVideo .advanceVideoBody .advanceVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".advanceVideo .advanceVideoBody .advanceVideoBodyMains").eq($(this).index()).css("display","block").siblings(".advanceVideoBodyMains").css("display","none");
});

$(".advanceVideo .advanceVideoBody .advanceVideoBodyShortcut li").mouseenter(function () {
    $(this).children("b").css("display","block").parent().siblings().find("b").css("display","none");
});
$(".advanceVideo .advanceVideoBody .advanceVideoBodyShortcut li").mouseleave(function () {
    $(this).parent().find("b").css("display","none");
});

//移入事件
$(".advanceVideo .advanceVideoBody .advanceVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","scale(1.1)").parent().siblings().find("img").css("transform","scale(1)");
});

//移出事件
$(".advanceVideo .advanceVideoBody .advanceVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
    $(this).find("img").css("transform","scale(1)");
});
//进阶教学版块结束

//战队视频版块开始
$(".teamVideo .teamVideoBody .teamVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".teamVideo .teamVideoBody .teamVideoBodyMains").eq($(this).index()).css("display","block").siblings(".teamVideoBodyMains").css("display","none");
});
//移入事件
$(".teamVideo .teamVideoBody .teamVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
});

//移出事件
$(".teamVideo .teamVideoBody .teamVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
});
//战队视频版块结束

//明星视频版块开始
//$(".starVideo .starVideoBody .starVideoBodyMains").not(":first").hide();
$(".starVideo .starVideoBody .starVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".starVideo .starVideoBody .starVideoBodyMains").eq($(this).index()).css("display","block").siblings(".starVideoBodyMains").css("display","none");
    //if($("."+this.rel).is(":hidden")){
    //    $(".starVideo .starVideoBody .starVideoBodyMains").slideUp();
    //    $("."+this.rel).slideDown();
    //}
});
//移入事件
$(".starVideo .starVideoBody .starVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
});

//移出事件
$(".starVideo .starVideoBody .starVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
});
//明星视频版块结束

//英雄视频版块开始
var select1 = document.getElementById("byPosition");
var select2 = document.getElementById("byAttackType");
var select3 = document.getElementById("byHeroName");

var $imgs = $(".heroVideoBodyMain").find("li > img");//拿到所有英雄的img
var flag = true;
$(select1).on("click", function () {
    for(var i = 0; i < $(this).children().length; i++){
        if($(this).children()[i].selected){
            if(($(this).children()[i].className == "all" || $(this).children()[i].className == " " || $(this).children()[i].className == "posi")){
                if(flag = false) return false;
                $(".coverForHero").css("display","none");
                return false;
            }else {
                flag = false;
                $(".coverForHero").css("display","block");
                for(var j = 0; j < $imgs.length; j++){
                    if($imgs[j].className.indexOf($(this).children()[i].className) != -1){
                        $($imgs[j]).parent().css("zIndex",3);
                    }else{
                        $($imgs[j]).parent().css("zIndex",1);
                    }
                }
            }
        }
    }
});

$(select2).on("click", function () {
    for(var i = 0; i < $(this).children().length; i++){
        if($(this).children()[i].selected){
            if(($(this).children()[i].className == "all" || $(this).children()[i].className == " " || $(this).children()[i].className == "attacktype")){
                if(flag = false) return false;
                $(".coverForHero").css("display","none");
                return false;
            }else {
                flag = false;
                $(".coverForHero").css("display","block");
                for(var j = 0; j < $imgs.length; j++){
                    if($imgs[j].className.indexOf($(this).children()[i].className) != -1){
                        $($imgs[j]).parent().css("zIndex",3);
                    }else{
                        $($imgs[j]).parent().css("zIndex",1);
                    }
                }
            }
        }
    }
});

$(select3).on("click", function () {
    for(var i = 0; i < $(this).children().length; i++){
        if($(this).children()[i].selected){
            if($(this).children()[i].className == "all" || $(this).children()[i].className == " " || $(this).children()[i].className == "heroname"){
                if(flag = false) return false;
                $(".coverForHero").css("display","none");
                return false;
            }else{
                flag = false;
                $(".coverForHero").css("display","block");
                for(var j = 0; j < $imgs.length; j++){
                    if($imgs[j].className.indexOf(($(this).children()[i].className )) != -1){
                        $($imgs[j]).parent().css("zIndex",3).siblings().css("zIndex",1).parent().siblings().find("li").css("zIndex",1).parent().parent().siblings().find("li").css("zIndex",1);
                    }
                }
            }
        }
    }
});
var label = true;
$(".heroVideoBody .heroVideos span").on("click",function(){
    var that = this;
     if(label == true){
         $(this).parent().animate({left:0},1000,"swing", function () {
             $(that).parent().animate({left:-50},400,"swing", function () {
                 $(that).parent().animate({left:0},400,"swing", function () {
                     $(that).parent().animate({left:-30},200,"swing", function () {
                         $(that).parent().animate({left:0},200,"swing", function () {
                             $(that).parent().animate({left:-10},100,"swing", function () {
                                 $(that).parent().animate({left:0},100,"swing", function () {
                                     $(that).css({"border-radius":"10px 0 0 10px"});
                                     $(that).children(".icon-gengduo").css("display","none").siblings(".icon-fanhui").css("display","block");
                                     $(that).animate({right:0},1000);
                                 });
                             })
                         })
                     })
                 })
             })
         });
         label = false;
     }else {
         $(this).parent().animate({left:-1100},1000,"swing", function () {
             $(that).css({"border-radius":"0 10px 10px 0"});
             $(that).children(".icon-fanhui").css("display","none").siblings(".icon-gengduo").css("display","block");
             $(that).animate({right:-40},1000);
         });
         label = true;
     }
});
//英雄视频版块结束


//解说视频版块开始
$(".narrateVideo .narrateVideoBody .narrateVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".narrateVideo .narrateVideoBody .narrateVideoBodyMains").eq($(this).index()).css("display","block").siblings(".narrateVideoBodyMains").css("display","none");
});
//移入事件
$(".narrateVideo .narrateVideoBody .narrateVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
});

//移出事件
$(".narrateVideo .narrateVideoBody .narrateVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
});
//解说视频版块结束

//特别栏目版块开始
$(".specialVideo .specialVideoBody .specialVideoBodyShortcut li").click(function () {
    $(this).css("background-color","#364348").siblings("li").css("background-color","#63757f");
    $(this).children("i").css("display","block").parent().siblings("li").find("i").css("display","none");
    $(this).children("a").css("color","#d5d5d5").parent().siblings().find("a").css("color","#a4c3d5");
    $(".specialVideo .specialVideoBody .specialVideoBodyMains").eq($(this).index()).css("display","block").siblings(".specialVideoBodyMains").css("display","none");
});
//移入事件
$(".specialVideo .specialVideoBody .specialVideoBodyMains li").mouseenter(function () {
    $(this).children(".cover").stop().fadeIn(600).parent().siblings().find(".cover").stop().fadeOut(600);
    $(this).children("h5").css("color","#e74f12").parent().siblings().find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#e74f12");
    $(this).siblings().children(".videoPic").children("i").css("color","#d5d5d5");
});

//移出事件
$(".specialVideo .specialVideoBody .specialVideoBodyMains li").mouseleave(function () {
    $(this).children(".cover").stop().fadeOut(600);
    $(this).find("h5").css("color","#d5d5d5");
    $(this).children(".videoPic").children("i").css("color","#d5d5d5");
});

$(".specialVideo .specialVideoBody .specialVideoBodyShortcut li").mouseenter(function () {
    $(this).children("b").css("display","block").parent().siblings().find("b").css("display","none");
});
$(".specialVideo .specialVideoBody .specialVideoBodyShortcut li").mouseleave(function () {
    $(this).parent().find("b").css("display","none");
});
//特别栏目版块结束

//侧边栏显示和隐藏事件
var scrollTop = 0;
$(window).scroll(function () {
     scrollTop = $(this).scrollTop();
    if(scrollTop >= 4675){
        $(".sidebar").stop().fadeIn(400);
    }
    if(scrollTop < 4675){
        $(".sidebar").stop().fadeOut(400);
    }
});
//侧边栏回到顶部
$(".backTop a").click(function () {
    $("html,body").animate({"scrollTop":0},1000);
});
//侧边栏显示文字
$(".sidebar").find("a").mouseenter(function () {
    $(this).find("span").stop(true,false).delay(200).animate({"left":-70,"opacity":1,"width":70,"display":"block","backgroundColor":"#333"},400).parent().parent().siblings().find("span").stop().animate({"left":0,"opacity":0,"width":50,"display":"none","backgroundColor":"#999"},400);
    //$(this).find("span").css({"color":"#333","backgroundColor":"#999"});
});
$(".sidebar").find("a").mouseleave(function () {
    $(this).find("span").stop(true,false).delay(200).animate({"left":0,"opacity":0,"width":50,"display":"none","backgroundColor":"#999"},400);
});

//var flag = true
//$(".hidebar .button i").on("click", function () {
//    var that = this;
//    if(flag == true){
//        $(this).parent().parent().animate({left:0},2000, function () {
//            $(that).css("display","none").siblings().css("display","block");
//        });
//        flag = false;
//    }else {
//        $(this).parent().parent().animate({left:-1500},2000, function () {
//            $(that).css("display","none").siblings().css("display","block");
//        });
//        flag = true;
//    }
//});
//视频中心结束
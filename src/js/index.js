// 数据渲染
    $.ajax({
        type:"GET",
        url:"../json/index.json",
        dataType:"json",
        success:function(res){
            // 商品列表渲染
            var str1="";
            var main1 =res.main1;
            $.each(main1,function(index,data){
                str1+=`<li>
                        <div class="m02_img">
                            <img src="${data.img}" alt="">
                        </div>
                        <p class="phonename">${data.title}</a></p>
                        <p class="phone02">${data.describe}</p>
                        <p class="phonenum">${data.price}</p>
                    </li>`
            })
            $(".list1").append(str1);
            var str2="";
            var main2 =res.main2;
            $.each(main2,function(index,data){
                str2+=`<li>
                        <div class="m02_img">
                            <img src="${data.img}" alt="">
                        </div>
                        <p class="phonename">${data.title}</a></p>
                        <p class="phone02">${data.describe}</p>
                        <p class="phonenum">${data.price}</p>
                    </li>`
            })
            $(".list2").append(str2);
            var str3="";
            var main3 =res.main3;
            $.each(main3,function(index,data){
                str3+=`<li>
                        <div class="m02_img">
                            <img src="${data.img}" alt="">
                        </div>
                        <p class="phonename">${data.title}</a></p>
                        <p class="phone02">${data.describe}</p>
                        <p class="phonenum">${data.price}</p>
                    </li>`
            })
            $(".list3").append(str3);
            // 二级导航列表渲染
            (function nav_01(){
                var nstr1="";
                $.each(res.nav,function(index,data){
                    console.log(data)
                    nstr1=`<li>
                                <a href="javascript:;"><span>${data}</span><i class="iconfont iconyoula1"></i></a>
                                <div class="submenu">
                                    <ol class="submenu_left">
                                    </ol>
                                    <ol class="submenu_right">
                                    </ol>
                                </div>
                            </li>`;
                    $(".nav_01").append(nstr1)
                })
                var nav1=res.nav1;
                var nav2=res.nav2;
                $.each(nav1.nav1_left,function(index,data){
                    $(".submenu_left:even").append(`<li><a href="./detail.html"><img src="${data.img}" alt=""><span>${data.title}</span></a></li>`)
                })
                $.each(nav1.nav1_right,function(index,data){
                    $(".submenu_right:even").append(`<li><a href="./detail.html"><img src="${data.img}" alt=""><span>${data.title}</span></a></li>`)
                })
                $.each(nav2.nav1_left,function(index,data){
                    $(".submenu_left:odd").append(`<li><a href="./detail.html"><img src="${data.img}" alt=""><span>${data.title}</span></a></li>`)
                })
                $.each(nav2.nav1_right,function(index,data){
                    $(".submenu_right:odd").append(`<li><a href="./detail.html"><img src="${data.img}" alt=""><span>${data.title}</span></a></li>`)
                })
                $(".submenu_right").append(`<li><a href="javascript:;"><i class="iconfont iconyoula"></i>&nbsp;&nbsp;<span>查看更多</span></a></li>`)
            })(); 
        }
    })
// 给每个商品添加点击进入详情页
    $(".m02r_01").on("click","li",()=>{
        location.href="./detail.html"
    })
// 回到顶部功能
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".toolbar").children().eq(3).css("display","block").parent().css("bottom","20px")
        }else{
            $(".toolbar").children().eq(3).css("display","none").parent().css("bottom","60px")
        }
        $(".toolbar").children().eq(3).click(function(){
            console.log("11")
            $("html").stop().animate(
                {scrollTop:0}
              ,1000)
        })
    })
// 登录后显示用户号码
var un=sessionStorage.getItem("un")
if(un){
    $(".head_nav2 li").eq(0).html("欢迎您:"+un).css({
        color:"red",
        fontWeight:900
    })
    $(".hlr_01").html("欢迎您:"+un).css({
        color:"red",
        fontWeight:900
    })
}
// 秒杀倒计时
function fn(){
    var d1=new Date();
    var d2=new Date("2020,9,1");
    d1=d1.getTime();
    d2=d2.getTime();
    var cha=d2-d1;
    // console.log(cha);
    var day=Math.floor(cha/(1000*60*60*24));
    cha=cha-day*(1000*60*60*24);
    var hou=Math.floor(cha/(1000*60*60));
    cha=cha-hou*(1000*60*60);
    var min=Math.floor(cha/(1000*60));
    cha=cha-min*(1000*60);
    var sec=Math.floor(cha/1000);
    document.getElementsByClassName('time')[0].innerHTML=("距离开始还有"+hou+"小时"+min+"分"+sec+"秒")
    document.getElementsByClassName('time')[1].innerHTML=("距离开始还有"+hou+"小时"+min+"分"+sec+"秒")
    document.getElementsByClassName('time')[2].innerHTML=("距离开始还有"+hou+"小时"+min+"分"+sec+"秒")
    document.getElementsByClassName('time')[3].innerHTML=("距离开始还有"+hou+"小时"+min+"分"+sec+"秒")
}
fn();
setInterval(fn,1000)
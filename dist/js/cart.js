"use strict";function add(){$(".phone_np").html("￥"+parseInt($(".num").html())*parseInt($(".phone_price1").html()))}function adds(){$(".prices_price").html("￥"+parseInt($(".num").html())*parseInt($(".phone_price1").html()))}$.ajax({type:"post",url:"../php/cart.php",dataType:"json",success:function(n){var a="";a+='<div class="m_center clearfix">\n                    <h1 class="phone_id" style="display:none">'.concat(n.data[0].phone_id,'</h1>\n                    <div class="clearfix">\n                        <label><input type="checkbox" class="check_01" checked ></label>\n                        <ul class="clearfix">\n                            <li class="phone_img"><a href="./detail.html"><img src="').concat(n.data[0].phone_img,'" alt=""></a></li>\n                            <li class="phone_op">\n                                <p class="phone_title"><a href="./detail.html">').concat(n.data[0].phone_title,'</a></p>\n                                <p class="phone_deploy">\n                                    ').concat(n.data[0].phone_deploy,'\n                                </p>\n                                <p>分期免息</p>\n                            </li>\n                            <li class="phone_price">￥<b class="phone_price1">').concat(n.data[0].phone_price,'</b>\n                            </li>\n                            <li class="phone_num"><span class="dec">-</span><span class="num">1</span><span class="add">+</span></li>\n                            <li class="phone_np">￥<b class="phone_price2">').concat(n.data[0].phone_price,'</b></li>\n                            <li class="phone_del"><a href="#">删除</a></li>\n                        </ul>\n                    </div>\n                </div>'),$(".hascart").append(a),$(".cartkong").css({display:"none"}),$(".m_bottom").css({display:"block"})}}),$(".hascart").on("click",".dec",function(){$(".num").html(parseInt($(".num").html())-1),"0"==$(".num").html()&&$(".num").html("1"),add(),adds()}),$(".hascart").on("click",".add",function(){$(".num").html(parseInt($(".num").html())+1),add(),adds()}),$(".hascart").on("click",".phone_del",function(){$.ajax({type:"post",url:"../php/cart_del.php",data:{id:$(".phone_id").text()},success:function(){$(".cartkong").css({display:"block"}).next().html("").next().html(""),console.log($(".phone_id").text())},dataType:"json"})}),$(window).scroll(function(){300<$(window).scrollTop()?$(".toolbar").children().eq(3).css("display","block").parent().css("bottom","20px"):$(".toolbar").children().eq(3).css("display","none").parent().css("bottom","60px"),$(".toolbar").children().eq(3).click(function(){console.log("11"),$("html").stop().animate({scrollTop:0},1e3)})});
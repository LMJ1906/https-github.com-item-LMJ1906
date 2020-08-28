// 渲染购物车
    $.ajax({
        type:'post',
        url:'../php/cart.php',
        dataType:'json',
        success:function(data){
            var str=""
            str+=`<div class="m_center clearfix">
                    <h1 class="phone_id" style="display:none">${data.data[0].phone_id}</h1>
                    <div class="clearfix">
                        <label><input type="checkbox" class="check_01" checked ></label>
                        <ul class="clearfix">
                            <li class="phone_img"><a href="./detail.html"><img src="${data.data[0].phone_img}" alt=""></a></li>
                            <li class="phone_op">
                                <p class="phone_title"><a href="./detail.html">${data.data[0].phone_title}</a></p>
                                <p class="phone_deploy">
                                    ${data.data[0].phone_deploy}
                                </p>
                                <p>分期免息</p>
                            </li>
                            <li class="phone_price">￥<b class="phone_price1">${data.data[0].phone_price}</b>
                            </li>
                            <li class="phone_num"><span class="dec">-</span><span class="num">1</span><span class="add">+</span></li>
                            <li class="phone_np">￥<b class="phone_price2">${data.data[0].phone_price}</b></li>
                            <li class="phone_del"><a href="#">删除</a></li>
                        </ul>
                    </div>
                </div>`
            $(".top_cart_num").css({
                color:"red",
                fontWight:"blod"
            }).text($(".num").text())
                // console.log(str)
            $(".hascart").append(str);
            $(".cartkong").css({
                display:"none"
            })
            $(".m_bottom").css({
                display:"block"
            })
        }
    })
    // 点击增加或减少数量
    $(".hascart").on("click",".dec",function(){
        $(".num").html(parseInt($(".num").html())-1)
        if($(".num").html()=="0"){
            $(".num").html("1")
        }
        add()
        adds()
    })
        
    $(".hascart").on("click",".add",function(){
        $(".num").html((parseInt($(".num").html())+1))
        add()
        adds()
    })
function add(){
    $(".phone_np").html("￥"+(parseInt($(".num").html())*parseInt($(".phone_price1").html()))+".00")
}
function adds(){
    $(".prices_price").html("￥"+(parseInt($(".num").html())*parseInt($(".phone_price1").html()))+".00")
}
// 点击删除商品
    $(".hascart").on("click",".phone_del",function(){
        $.ajax({
            type:"post",
            url:"../php/cart_del.php",
            data:{
                id:$(".phone_id").text()
            },
            success:function(){
                $(".cartkong").css({
                    display:"block"
                }).next().html("").next().html("")
                console.log($(".phone_id").text())
            },
            dataType:"json",

        })
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

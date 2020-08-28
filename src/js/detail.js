// 点击加入购物车
$(".addcart>a").click(function(){
    $.ajax({
        type:'post',
        url:'../php/detail.php',
        data:{
            id:$(".detail_right>h1").text(),
            title:$(".phone_name").text(),
            img:"https://res.vmallres.com/pimages//product/6901443398027/428_428_C5B3EEB31BA081CF605FE04A1118DEF332F4C3003CC60ECEmp.png",
            deploy:$(".phone_deploy").text(),
            price:$(".phone_price").html()
        },
        dataType:'json',
        success:function(data){
            var a=confirm("商品已加入购物车");
            var b=0;
            if(a){
                location.href='../pages/cart.html';
                // 头部购物车商品数量
                b++;
                $(".top_cart_num").css({
                    color:"red",
                    fontWight:"blod"
                }).text(b)
            }
        }
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

// 滑入切换大图
$(".b_img>li").mouseover(function(){
    $(this).children().children("img").css({
        border:"1px solid red"
    }).parent().parent().siblings().children().children("img").css({
        border:"1px solid #fff"
    })
    $(".simg").css({
        top:(-parseInt($(this).index())*450+"px")
    })
    $(".bgimg>li").eq($(this).index()).css({
        // top:(-parseInt($(this).index())*800+"px")
        zIndex:"99"
    }).siblings().css({
        zIndex:"1"
    })
})
// 点击左右移动小图
$(".next").click(function(){
    if($(".b_img").css("left")=="-296px"){
        $(".b_img").css({
            left:"-296px"
        })
    }else{
        $(".b_img").css({
            left:parseInt($(".b_img").css("left"))-74+"px"
        })
    }
    console.log(parseInt($(".b_img").css("left")))
})
$(".prve").click(function(){
    if($(".b_img").css("left")=="0px"){
        $(".b_img").css({
            left:"0px"
        })
    }else{
        $(".b_img").css({
            left:parseInt($(".b_img").css("left"))+74+"px"
        })
    }
    console.log(parseInt($(".b_img").css("left")))
})
$(".smimg_box").mouseover(function(){
    $(".zhezhao").css({
        display:"block"
    })
    $(".bgimg_box").css({
        display:"block"
    })
})
$(".smimg_box").mouseout(function(){
    $(".zhezhao").css({
        display:"none"
    })
    $(".bgimg_box").css({
        display:"none"
    })
})
$(".smimg_box").mousemove(function(eve){
        var x = eve.pageX- parseInt($(".smimg_box").offset().left)-parseInt($(".zhezhao").css("width"))/2;
        var y = eve.pageY- parseInt($(".smimg_box").offset().top)-parseInt($(".zhezhao").css("height"))/2;
        console.log(parseInt($(".smimg_box").offset().left))
        if(x<0){
            x=0
        }
        if(x>parseInt($(".smimg_box").css("width"))-parseInt($(".zhezhao").css("width"))){
            x = parseInt($(".smimg_box").css("width"))-parseInt($(".zhezhao").css("width"));
        }
        if(y<0){
        y = 0;
        }
        if(y>parseInt($(".smimg_box").css("height")) - parseInt($(".zhezhao").css("height"))){
            y = parseInt($(".smimg_box").css("height")) - parseInt($(".zhezhao").css("height"));
        }
        $(".zhezhao").css({
            left:x+"px"
        })
        $(".zhezhao").css({
            top:y+"px"
        })
        var left = x/parseInt($(".smimg_box").css("width"))*800;
        var top = y/parseInt($(".smimg_box").css("height"))*800;
        $(".bgimg>li").css({
            left:-left+"px",
            top:-top+"px"
        })
})
// 点击选择商品属性
$(".process_01>a").click(function(){
    $(this).css({
        borderColor:"red"
    }).siblings().css({
        borderColor:"#a4a4a4"
    })
})

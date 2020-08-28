    // 手机号验证
    $(".telphone_num").on("blur",function(){
        var numts=$(".telphone_num").val();
        var regnum=/^1[3456789]\d{9}$/;
        if(regnum.test(numts)){
            $(".num_ts").css({
                display:"block",
                color:"green"
            }).html("<i class='iconfont icontishi'></i>电话号码输入正确");
        }else{
            $(".num_ts").css("display","block").html("<i class='iconfont icontishi'></i>请输入正确的电话号码");
        }
    })   
    $(".pw2").on("blur",function(){
        if($(".pw2").val()==$(".pw1").val()&&$(".pw2").val()!=""){
            $(".pwts").css("display","block").html("密码可用")
            $(".reg_btn").click(function(){
                $.ajax({
                    method:'post',
                    url:'../php/register.php',
                    data:{
                        username:$(".telphone_num").val(),
                        password:$(".pw2").val()
                    },
                    success:function(data){
                        if(data.code==1){
                            location.href="../pages/login.html"
                        }else{
                            alert(data.msg)
                        }
                    },
                    dataType:'json'
                })
            })
        }else{
            $(".pwts").css({
                display:"block",
                color:"red"
            }).html("密码不一致")
        }
    })
